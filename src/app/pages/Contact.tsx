import { useState, FormEvent } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import Select from "../components/Select/Select";
import TextArea from "../components/TextArea/TextArea";
import Button from "../components/Button/Button";
import BackgroundPattern from "../components/BackgroundPattern/BackgroundPattern";
import { projectId, publicAnonKey } from "/utils/supabase/info";
import contactContent from "../../content/contact.json";
import styles from "./Contact.module.css";

export default function Contact() {
  const { heading, description, responseNote, form } = contactContent;

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
                <h1 className={styles.heading}>{heading}</h1>
                <p className={styles.description}>{description}</p>
              </div>

              <div className={styles.responseNote}>
                <p className={styles.responseText}>{responseNote}</p>
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
                    label={form.fields.firstName.label}
                    required
                    placeholder={form.fields.firstName.placeholder}
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formField}>
                  <Input
                    label={form.fields.lastName.label}
                    required
                    placeholder={form.fields.lastName.placeholder}
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
                  label={form.fields.email.label}
                  placeholder={form.fields.email.placeholder}
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
                    label={form.fields.topic.label}
                    options={form.topicOptions}
                    placeholder={form.fields.topic.placeholder}
                    required
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                  />
                </div>
                <div className={styles.formField}>
                  <Input
                    label={form.fields.phone.label}
                    optional
                    placeholder={form.fields.phone.placeholder}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      const filtered = e.target.value.replace(/[^0-9+\-() ]/g, '');
                      setFormData({ ...formData, phone: filtered });
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className={styles.formFieldFull}>
                <TextArea
                  label={form.fields.message.label}
                  required
                  placeholder={form.fields.message.placeholder}
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
                  label={form.fields.company.label}
                  optional
                  placeholder={form.fields.company.placeholder}
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
                  {isSubmitting ? form.submittingButton : form.submitButton}
                </Button>

                {submitStatus === "success" && (
                  <p className={styles.successMessage}>{form.successMessage}</p>
                )}

                {submitStatus === "error" && (
                  <p className={styles.errorMessage}>{form.errorMessage}</p>
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
