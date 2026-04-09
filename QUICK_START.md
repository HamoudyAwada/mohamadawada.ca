# Quick Start Guide

## 🚀 Your Component Library is Ready!

All components are built using **CSS Modules** and **CSS Variables** from your Figma design system.

---

## 📦 What You Have

### 15 Components Ready to Use:
1. **Button** (3 variants, 3 sizes)
2. **Tag** (3 color variants)
3. **Input** (with label, optional, error states)
4. **TextArea** (with character counter)
5. **Select** (dropdown with custom arrow)
6. **Checkbox** (custom styled)
7. **ProjectCard** (complete card with image, tags, content)
8. **Divider** (horizontal line)
9. **Navigation** (sticky nav + mobile menu)
10. **Footer** (social links, copyright)
11. **HeroSection** (landing page hero)
12. **SectionHeading** (section titles with CTA)
13. **CopyBlock** (content blocks)
14. **StatBlock** (metric displays)
15. **Logo** (custom SVG)

---

## 🎯 View Components

### Live Component Showcase
Visit in your browser:
```
http://localhost:5173/components
```

See all components with interactive examples!

---

## 🎨 Customize Your Design

### Edit One File:
```
/src/styles/theme.css
```

### Common Changes:

#### Change Primary Color
```css
--primary: rgba(255, 100, 50, 1.00);  /* Your color */
```

#### Change Tag Colors
```css
--tag-primary: rgba(0, 150, 200, 1.00);
```

#### Change Fonts
```css
--font-family-heading: 'Your Font', sans-serif;
--font-family-body: 'Your Font', sans-serif;
```

#### Change Input Styling
```css
--radius: 20px;  /* Rounder inputs */
--border: rgba(100, 100, 100, 1.00);  /* Lighter border */
```

---

## 📝 Use Components

### Import Components:
```tsx
import Button from "./components/Button";
import Input from "./components/Input";
import Tag from "./components/Tag";
import ProjectCard from "./components/ProjectCard";
```

### Example: Button
```tsx
<Button variant="primary" size="medium">
  Click Me
</Button>

<Button variant="secondary" size="large">
  Secondary Action
</Button>

<Button variant="ghost" size="small">
  Text Only
</Button>
```

### Example: Form
```tsx
<Input 
  label="Email" 
  type="email" 
  placeholder="your@email.com" 
/>

<TextArea 
  label="Message"
  placeholder="Your message..."
  showCharacterCount
/>

<Select
  label="Type"
  options={[
    { value: "web", label: "Web Design" },
    { value: "mobile", label: "Mobile App" }
  ]}
/>

<Checkbox label="I agree to terms" />

<Button type="submit" variant="primary" fullWidth>
  Submit
</Button>
```

### Example: Project Card
```tsx
<ProjectCard
  image="/path/to/image.jpg"
  imageAlt="Project"
  tags={[
    { label: "ENMAX", variant: "primary" },
    { label: "Design System", variant: "secondary" }
  ]}
  title="Project Title"
  description="Project description..."
  badge="SAIT - Capstone"
  link={{ label: "See more", href: "/project" }}
/>
```

---

## 📚 Documentation

### Full References:
- `/COMPONENT_LIBRARY.md` - All components with props & examples
- `/CSS_VARIABLES_REFERENCE.md` - All design tokens & customization
- `/DESIGN_SYSTEM_SUMMARY.md` - Complete system overview
- `/IMPLEMENTATION_COMPLETE.md` - CSS variables integration details

---

## 🏗️ Build New Pages

### 1. Create Page File:
```tsx
// /src/app/pages/MyWork.tsx
import Navigation from "../components/Navigation";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function MyWork() {
  return (
    <>
      <Navigation />
      <main>
        <SectionHeading 
          title="My Work"
          description="Recent projects"
          align="center"
        />
        {/* Your content */}
      </main>
      <Footer />
    </>
  );
}
```

### 2. Add Route:
```tsx
// /src/app/routes.tsx
import MyWork from "./pages/MyWork";

export const router = createBrowserRouter([
  // ... existing routes
  {
    path: "/my-work",
    Component: MyWork,
  },
]);
```

---

## ✨ Design System Features

### ✅ CSS Variables
All styling centralized in `/src/styles/theme.css`

### ✅ Typography
- **Headings**: Plus Jakarta Sans
- **Body**: Quicksand

### ✅ Colors
- Primary: #1e7854 (green)
- Secondary: #0b2e50 (blue)
- Accent: #28a070 (light green)

### ✅ Spacing
4px, 8px, 12px, 16px, 24px, 32px, 64px, 128px

### ✅ Responsive
Desktop: 1440px, Mobile: 393px

### ✅ Components
All match Figma specifications exactly

---

## 🎯 Next Pages to Build

1. **My Work** - Grid of ProjectCard components
2. **Process** - CopyBlock + SectionHeading
3. **About** - CopyBlock + StatBlock
4. **Resume** - Timeline + experience
5. **Contact** - Full form with all inputs

---

## 💡 Tips

### Use Component Showcase
Test components at `/components` before using them

### Reference Documentation
Check `/COMPONENT_LIBRARY.md` for all props

### Customize Design Tokens
Edit `/src/styles/theme.css` for global changes

### Keep Consistency
Always use design system components, not custom HTML

---

## 🚦 Quick Command Reference

### View Site:
```bash
npm run dev
```

### Component Showcase:
```
http://localhost:5173/components
```

### Home Page:
```
http://localhost:5173/
```

---

## ✅ You're All Set!

Everything is ready to build your portfolio:
- ✅ 15 components built and documented
- ✅ CSS variables for easy customization
- ✅ Figma design system matched perfectly
- ✅ Responsive layouts working
- ✅ Interactive showcase available
- ✅ Complete documentation

**Start building your pages!** 🎨
