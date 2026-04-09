import { useState } from "react";
import Button from "../components/Button";
import Tag from "../components/Tag";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Checkbox from "../components/Checkbox";
import Divider from "../components/Divider";
import StatBlock from "../components/StatBlock";
import styles from "./ComponentShowcase.module.css";

export default function ComponentShowcase() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
    agree: false,
  });

  const projectOptions = [
    { value: "web", label: "Web Design" },
    { value: "mobile", label: "Mobile App" },
    { value: "branding", label: "Branding" },
    { value: "ux", label: "UX Research" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2>Component Showcase</h2>
        <p>All components from your Figma design system</p>
      </div>

      <Divider />

      {/* Buttons Section */}
      <div className={styles.section}>
        <h3>Buttons</h3>
        <div className={styles.componentGroup}>
          <Button variant="primary" size="large">
            Primary Button
          </Button>
          <Button variant="secondary" size="large">
            Secondary Button
          </Button>
          <Button variant="ghost" size="large">
            Ghost Button
          </Button>
        </div>
        
        <div className={styles.componentGroup}>
          <Button variant="primary" size="medium">
            Medium Primary
          </Button>
          <Button variant="secondary" size="medium">
            Medium Secondary
          </Button>
          <Button variant="ghost" size="medium">
            Medium Ghost
          </Button>
        </div>

        <div className={styles.componentGroup}>
          <Button variant="primary" size="small">
            Small Primary
          </Button>
          <Button variant="secondary" size="small">
            Small Secondary
          </Button>
          <Button variant="ghost" size="small">
            Small Ghost
          </Button>
        </div>

        <Button variant="primary" disabled>
          Disabled Button
        </Button>
      </div>

      <Divider />

      {/* Tags Section */}
      <div className={styles.section}>
        <h3>Tags</h3>
        <div className={styles.componentGroup}>
          <Tag variant="primary">ENMAX</Tag>
          <Tag variant="secondary">Design System</Tag>
          <Tag variant="tertiary">AI</Tag>
        </div>
      </div>

      <Divider />

      {/* Stats Section */}
      <div className={styles.section}>
        <h3>Stat Blocks</h3>
        <div className={styles.componentGroup}>
          <StatBlock value="95%" description="Client Satisfaction" />
          <StatBlock value="50+" description="Projects Completed" />
          <StatBlock value="5+" description="Years Experience" />
        </div>
      </div>

      <Divider />

      {/* Form Components Section */}
      <div className={styles.section}>
        <h3>Form Components</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            label="Company/Organization"
            type="text"
            placeholder="Company name"
            optional
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />

          <Select
            label="Project Type"
            options={projectOptions}
            placeholder="Select a project type"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          />

          <TextArea
            label="Message"
            placeholder="Tell me about your project..."
            maxCharacters={1000}
            showCharacterCount
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <Checkbox
            label="I agree to the terms and conditions"
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          />

          <Button type="submit" variant="primary" fullWidth>
            Submit Form
          </Button>
        </form>
      </div>

      <Divider />

      {/* Typography Section */}
      <div className={styles.section}>
        <h3>Typography</h3>
        <div className={styles.typography}>
          <h1>Heading 1 - 80px</h1>
          <h2>Heading 2 - 64px</h2>
          <h3>Heading 3 - 48px</h3>
          <h4>Heading 4 - 40px</h4>
          <h5>Heading 5 - 28px</h5>
          <h6>Heading 6 - 32px</h6>
          <p>Body text - 20px. This is using Quicksand font family.</p>
          <label>Label text - 16px</label>
        </div>
      </div>
    </div>
  );
}
