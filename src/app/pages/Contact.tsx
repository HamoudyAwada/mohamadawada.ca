import { useState, FormEvent } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import TextArea from "../components/TextArea/TextArea";
import Button from "../components/Button/Button";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    phone: "",
    message: "",
    company: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2821aa23/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Failed to send email:", data);
        setSubmitStatus("error");
        return;
      }

      console.log("Form submitted successfully:", data);
      setSubmitStatus("success");
      
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        topic: "",
        phone: "",
        message: "",
        company: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const topicOptions = [
    { value: "full-time", label: "Full-time Role" },
    { value: "part-time", label: "Part-Time Role" },
    { value: "freelance", label: "Freelance Project" },
    { value: "contract", label: "Contract-Work" },
    { value: "consultation", label: "Consultation" },
    { value: "other", label: "Other" },
  ];

  // Check if all required fields are filled
  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.topic.trim() !== "" &&
    formData.message.trim() !== "";

  return (
    <div className={styles.page}>
      <Navigation />
      
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Left Column - Info Section */}
          <div className={styles.infoSection}>
            <div className={styles.infoContent}>
              <div className={styles.headingSection}>
                <h1 className={styles.heading}>
                  Let's Build Something That Matters
                </h1>
                <p className={styles.description}>
                  Whether it's a full-time role, a freelance project, or even if you'd like to chat, get in touch by filling out the form.
                </p>
              </div>

              <div className={styles.responseNote}>
                <p className={styles.responseText}>
                  I'm pretty good with response time. I do my best to get back to you within 1-2 business days. Thanks in advance for your patience!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className={styles.formSection}>
            <BackgroundPattern contained />
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* First Name and Last Name Row */}
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <Input
                    label="First Name"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formField}>
                  <Input
                    label="Last Name"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className={styles.formFieldFull}>
                <Input
                  label="Email Address"
                  placeholder="name@email.com"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Topic and Phone Row */}
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <Select
                    label="Whats This About?"
                    options={topicOptions}
                    placeholder="Pick a topic"
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formField}>
                  <Input
                    label="Phone Number"
                    optional
                    placeholder="+1 (123) 456-7890"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      // Allow only numbers and phone formatting characters (+, -, (, ), spaces)
                      const filtered = e.target.value.replace(/[^0-9+\-() ]/g, '');
                      setFormData({ ...formData, phone: filtered });
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className={styles.formFieldFull}>
                <TextArea
                  label="Message"
                  required
                  placeholder="Placeholder Text"
                  rows={6}
                  showCharacterCount
                  maxCharacters={1000}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Company/Organization */}
              <div className={styles.formFieldFull}>
                <Input
                  label="Company/Organization"
                  optional
                  placeholder="Placeholder Text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
              </div>

              {/* Submit Button */}
              <div className={styles.submitWrapper}>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={!isFormValid || isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Form"}
                </Button>
                
                {submitStatus === "success" && (
                  <p className={styles.successMessage}>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                
                {submitStatus === "error" && (
                  <p className={styles.errorMessage}>
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}