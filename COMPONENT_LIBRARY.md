# Component Library Documentation

This document outlines all available components in your design system, built with CSS Modules and matching your Figma design specifications.

## Design Tokens

All components use CSS custom properties defined in `/src/styles/theme.css`:

### Colors
- **Primary**: `#1e7854` (var(--primary))
- **Secondary**: `#0b2e50` (var(--secondary))
- **Accent**: `#28a070` (var(--accent))
- **Background**: `#f2f2f2` (var(--background))
- **Foreground**: `#0e0e0e` (var(--foreground))
- **Border**: `#3c3c3c` (var(--border))
- **Muted**: `#999999`

### Typography
- **Heading Font**: Plus Jakarta Sans (var(--font-family-heading))
- **Body Font**: Quicksand (var(--font-family-body))
- **Font Sizes**: 
  - H1: 80px
  - H2: 64px
  - H3: 48px
  - H4: 40px
  - H5: 28px
  - Base: 20px
  - Label: 16px

### Spacing
- Standard gaps: 4px, 8px, 12px, 16px, 24px, 32px, 64px, 128px
- Standard padding: 4px, 8px, 10px, 16px, 24px

### Border Radius
- **Cards**: 32px (top and bottom)
- **Buttons/Tags**: 1024px (pill shape - var(--radius-button))
- **Inputs**: 16px

### Shadows
- **Card Shadow**: 0px 8px 15px 0px rgba(14, 14, 14, 0.3)
- **Form Field Focus**: 0px 4px 10px 0px rgba(14, 14, 14, 0.25)

---

## Components

### 1. Button

**Location**: `/src/app/components/Button/`

**Variants**:
- `primary` - Green background (#1e7854) with light text
- `secondary` - Dark blue background (#0b2e50) with light text
- `ghost` - Transparent background with secondary text color

**Sizes**:
- `small` - 4px 12px padding
- `medium` - 8px 16px padding (default)
- `large` - 12px 24px padding

**Props**:
```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}
```

**Usage**:
```tsx
import Button from "./components/Button";

<Button variant="primary" size="medium">
  Button Text
</Button>

<Button variant="ghost" icon={<ArrowIcon />} iconPosition="right">
  See more
</Button>
```

---

### 2. Tag

**Location**: `/src/app/components/Tag/`

**Variants**:
- `primary` - Green background (#28a070) with dark text (#0e0e0e)
- `secondary` - Blue background (#114578) with light text (#f2f2f2)
- `tertiary` - Light green background (#8ce274) with dark green text (#195309)

**Props**:
```tsx
interface TagProps {
  children: string;
  variant?: "primary" | "secondary" | "tertiary";
}
```

**Usage**:
```tsx
import Tag from "./components/Tag";

<Tag variant="primary">ENMAX</Tag>
<Tag variant="secondary">Design System</Tag>
<Tag variant="tertiary">AI</Tag>
```

---

### 3. Input

**Location**: `/src/app/components/Input/`

**Features**:
- White background (#ffffff)
- Border color: #3c3c3c
- Border radius: 16px
- Focus shadow: 0px 4px 10px rgba(14, 14, 14, 0.25)
- Optional label with "(Optional)" indicator
- Error state with red border

**Props**:
```tsx
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  optional?: boolean;
  error?: string;
}
```

**Usage**:
```tsx
import Input from "./components/Input";

<Input 
  label="Email" 
  type="email" 
  placeholder="your@email.com" 
/>

<Input 
  label="Company/Organization" 
  optional 
  placeholder="Placeholder Text" 
/>

<Input 
  label="Name" 
  error="This field is required" 
/>
```

---

### 4. TextArea

**Location**: `/src/app/components/TextArea/`

**Features**:
- Min height: 100px
- Character counter (default: 1000 characters)
- Optional label support
- Same styling as Input component

**Props**:
```tsx
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  showCharacterCount?: boolean;
  maxCharacters?: number;
}
```

**Usage**:
```tsx
import TextArea from "./components/TextArea";

<TextArea 
  label="Message" 
  placeholder="Your message here..."
  maxCharacters={1000}
  showCharacterCount
/>
```

---

### 5. Select

**Location**: `/src/app/components/Select/`

**Features**:
- Dropdown with custom arrow icon
- Same styling as Input component
- Option groups support

**Props**:
```tsx
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  optional?: boolean;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}
```

**Usage**:
```tsx
import Select from "./components/Select";

<Select 
  label="Project Type"
  options={[
    { value: "web", label: "Web Design" },
    { value: "mobile", label: "Mobile App" },
    { value: "branding", label: "Branding" }
  ]}
  placeholder="Select a project type"
/>
```

---

### 6. ProjectCard

**Location**: `/src/app/components/ProjectCard/`

**Features**:
- Fixed size: 345px × 678px
- Image height: 211px
- Card shadow: 0px 8px 15px rgba(14, 14, 14, 0.3)
- Hover effect: Lifts up with enhanced shadow
- Supports tags, title, description, badge, and link

**Props**:
```tsx
interface ProjectCardProps {
  image: string;
  imageAlt: string;
  tags: Array<{ label: string; variant?: "primary" | "secondary" | "tertiary" }>;
  title: string;
  description: string;
  badge: string;
  link: {
    label: string;
    href: string;
  };
}
```

**Usage**:
```tsx
import ProjectCard from "./components/ProjectCard";

<ProjectCard
  image="/path/to/image.jpg"
  imageAlt="Project preview"
  tags={[
    { label: "ENMAX", variant: "primary" },
    { label: "Design System", variant: "secondary" }
  ]}
  title="Card Title Here"
  description="Lorem ipsum dolor sit amet..."
  badge="SAIT - Capstone"
  link={{ label: "See more", href: "/projects/1" }}
/>
```

---

### 7. Divider

**Location**: `/src/app/components/Divider/`

**Features**:
- Horizontal line
- Color: #3c3c3c
- 2px stroke width
- Optional padding

**Usage**:
```tsx
import Divider from "./components/Divider";

<Divider />
```

---

### 8. Navigation

**Location**: `/src/app/components/Navigation/`

**Features**:
- Sticky header
- Mobile hamburger menu with full-screen overlay
- Smooth transitions
- Responsive breakpoints

**Usage**:
```tsx
import Navigation from "./components/Navigation";

<Navigation />
```

---

### 9. Footer

**Location**: `/src/app/components/Footer/`

**Features**:
- Social media links
- Copyright information
- Responsive layout

**Usage**:
```tsx
import Footer from "./components/Footer";

<Footer />
```

---

### 10. HeroSection

**Location**: `/src/app/components/HeroSection/`

**Features**:
- Large heading with primary CTA
- Responsive text sizing
- Full-width layout

**Usage**:
```tsx
import HeroSection from "./components/HeroSection";

<HeroSection />
```

---

### 11. SectionHeading

**Location**: `/src/app/components/SectionHeading/`

**Features**:
- H2 title
- Optional description
- Optional CTA button
- Left or center alignment

**Props**:
```tsx
interface SectionHeadingProps {
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  align?: "left" | "center";
}
```

**Usage**:
```tsx
import SectionHeading from "./components/SectionHeading";

<SectionHeading
  title="My Work"
  description="Explore my recent projects"
  align="center"
/>
```

---

### 12. CopyBlock

**Location**: `/src/app/components/CopyBlock/`

**Features**:
- Text content blocks
- Responsive typography
- Consistent spacing

**Usage**:
```tsx
import CopyBlock from "./components/CopyBlock";

<CopyBlock>
  <h3>About Me</h3>
  <p>I'm a UX and product designer...</p>
</CopyBlock>
```

---

### 13. StatBlock

**Location**: `/src/app/components/StatBlock/`

**Features**:
- Large value display (28px)
- Small description text (14px)
- Used for metrics and statistics

**Props**:
```tsx
interface StatBlockProps {
  value: string;
  description: string;
}
```

**Usage**:
```tsx
import StatBlock from "./components/StatBlock";

<StatBlock 
  value="95%" 
  description="Client Satisfaction" 
/>
```

---

### 14. Logo

**Location**: `/src/app/components/Logo/`

**Features**:
- Custom SVG logo
- Fixed size: 40px × 48px
- Link to home page

**Usage**:
```tsx
import Logo from "./components/Logo";

<Logo />
```

---

### 15. Checkbox

**Location**: `/src/app/components/Checkbox/`

**Features**:
- Custom checkbox with checkmark
- Label support
- Error state with red border
- Focus shadow
- Disabled state

**Props**:
```tsx
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}
```

**Usage**:
```tsx
import Checkbox from "./components/Checkbox";

<Checkbox 
  label="I agree to the terms and conditions" 
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

<Checkbox 
  label="Subscribe to newsletter" 
  error="This field is required" 
/>
```

---

## Component Showcase

Visit `/components` in your application to see all components in action with interactive examples.

---

## Form Example

Here's a complete form example using the form components:

```tsx
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Select from "./components/Select";
import Button from "./components/Button";

function ContactForm() {
  return (
    <form>
      <Input
        label="Name"
        type="text"
        placeholder="Your name"
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
      />
      
      <Input
        label="Company/Organization"
        type="text"
        placeholder="Company name"
        optional
      />
      
      <Select
        label="Project Type"
        options={[
          { value: "web", label: "Web Design" },
          { value: "mobile", label: "Mobile App" },
          { value: "branding", label: "Branding" }
        ]}
        placeholder="Select a project type"
      />
      
      <TextArea
        label="Message"
        placeholder="Tell me about your project..."
        maxCharacters={1000}
        showCharacterCount
        required
      />
      
      <Button type="submit" variant="primary" fullWidth>
        Submit Form
      </Button>
    </form>
  );
}
```

---

## Responsive Breakpoints

The design system uses these breakpoints:
- **Desktop**: 1440px (default)
- **Mobile**: 393px

Components automatically adjust their layout between these breakpoints.

---

## Color Palette

### Tag Colors
```css
/* Primary Tag */
background: #28a070;
color: #0e0e0e;

/* Secondary Tag */
background: #114578;
color: #f2f2f2;

/* Tertiary Tag */
background: #8ce274;
color: #195309;
```

### Button Colors
```css
/* Primary Button */
background: #1e7854;
color: #f2f2f2;
hover: #267d5e;

/* Secondary Button */
background: #0b2e50;
color: #f2f2f2;
hover: #0e3a63;

/* Ghost Button */
background: transparent;
color: #0b2e50;
hover: rgba(11, 46, 80, 0.05);
```

---

## Best Practices

1. **Use CSS Variables**: Always reference theme variables instead of hard-coded colors
2. **Font Families**: Use `var(--font-family-heading)` for headings and `var(--font-family-body)` for body text
3. **Spacing**: Follow the 4px/8px grid system (4, 8, 12, 16, 24, 32, 64, 128)
4. **Border Radius**: Use `var(--radius-button)` for pill shapes, 16px for inputs, 32px for cards
5. **Shadows**: Use predefined shadow values for consistency

---

## Next Steps

When building new pages, combine these components to create consistent layouts:

1. Start with `<Navigation />` at the top
2. Use `<HeroSection />` for landing pages
3. Layout content with `<SectionHeading />` and `<CopyBlock />`
4. Display projects with `<ProjectCard />` in a grid
5. Use form components for contact/submission pages
6. End with `<Footer />` at the bottom

All components are fully responsive and follow the design system specifications from your Figma library.