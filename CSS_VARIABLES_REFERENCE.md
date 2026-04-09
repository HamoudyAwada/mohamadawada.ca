# CSS Variables Reference

This document lists all available CSS custom properties (variables) defined in `/src/styles/theme.css` that you can customize to update your design system globally.

## 🎨 How to Customize Your Design

All components use CSS variables, so you can update colors, spacing, typography, and more by simply editing `/src/styles/theme.css`. Changes will automatically apply to all components.

---

## Colors

### Background & Foreground
```css
--background: rgba(242, 242, 242, 1.00);      /* Main page background */
--foreground: rgba(14, 14, 14, 1.00);         /* Main text color */
```

### Cards & Containers
```css
--card: rgba(222, 222, 222, 1.00);            /* Card background (#dedede) */
--card-foreground: rgba(14, 14, 14, 1.00);    /* Text on cards */
```

### Popovers & Tooltips
```css
--popover: rgba(255, 255, 255, 1.00);         /* Popover background */
--popover-foreground: rgba(14, 14, 14, 1.00); /* Text in popovers */
```

### Primary (Green)
```css
--primary: rgba(30, 120, 84, 1.00);           /* Primary buttons (#1e7854) */
--primary-foreground: rgba(242, 242, 242, 1.00); /* Text on primary */
```

### Secondary (Dark Blue)
```css
--secondary: rgba(11, 46, 80, 1.00);          /* Secondary buttons (#0b2e50) */
--secondary-foreground: rgba(242, 242, 242, 1.00); /* Text on secondary */
```

### Accent (Lighter Green)
```css
--accent: rgba(40, 160, 112, 1.00);           /* Highlights (#28a070) */
--accent-foreground: rgba(14, 14, 14, 1.00);  /* Text on accent */
```

### Muted
```css
--muted: rgba(214, 244, 232, 1.00);           /* Muted backgrounds */
--muted-foreground: rgba(153, 153, 153, 1.00); /* Placeholder text (#999) */
```

### Destructive (Red)
```css
--destructive: rgba(204, 26, 26, 1.00);       /* Error states */
--destructive-foreground: rgba(255, 255, 255, 1.00); /* Text on errors */
```

### Borders & Inputs
```css
--border: rgba(60, 60, 60, 1.00);             /* Border color (#3c3c3c) */
--input: rgba(255, 255, 255, 1.00);           /* Input background */
--input-background: rgba(255, 255, 255, 1.00); /* Input background */
--ring: rgba(40, 160, 112, 1.00);             /* Focus ring color */
```

### Tag Colors (From Figma)
```css
/* Primary Tag (Green) */
--tag-primary: rgba(40, 160, 112, 1.00);      /* #28a070 */
--tag-primary-foreground: rgba(14, 14, 14, 1.00); /* #0e0e0e */

/* Secondary Tag (Blue) */
--tag-secondary: rgba(17, 69, 120, 1.00);     /* #114578 */
--tag-secondary-foreground: rgba(242, 242, 242, 1.00); /* #f2f2f2 */

/* Tertiary Tag (Light Green) */
--tag-tertiary: rgba(140, 226, 116, 1.00);    /* #8ce274 */
--tag-tertiary-foreground: rgba(25, 83, 9, 1.00); /* #195309 */
```

---

## Typography

### Font Families
```css
--font-family-heading: 'Plus Jakarta Sans', sans-serif;
--font-family-body: 'Quicksand', sans-serif;
```

### Font Sizes
```css
--text-h1: 80px;      /* Main hero headings */
--text-h2: 64px;      /* Section headings */
--text-h3: 48px;      /* Subsection headings */
--text-h4: 40px;      /* Card titles */
--text-h5: 28px;      /* Small headings, stats */
--text-h6: 32px;      /* Alternative heading size */
--text-base: 20px;    /* Body text, buttons */
--text-label: 16px;   /* Labels, small buttons, tags */
```

### Font Weights
```css
--font-weight-extrabold: 800;
--font-weight-bold: 700;
--font-weight-medium: 500;
--font-weight-normal: 400;
```

---

## Border Radius

```css
--radius: 16px;              /* Form inputs, default radius */
--radius-button: 1024px;     /* Buttons & tags (pill shape) */
```

### Radius Variations
```css
--radius-sm: calc(var(--radius) - 4px);     /* 12px */
--radius-md: calc(var(--radius) - 2px);     /* 14px */
--radius-lg: var(--radius);                 /* 16px */
--radius-xl: calc(var(--radius) + 4px);     /* 20px */

--radius-button-sm: calc(var(--radius-button) - 4px);
--radius-button-md: calc(var(--radius-button) - 2px);
--radius-button-lg: var(--radius-button);
--radius-button-xl: calc(var(--radius-button) + 4px);
```

---

## Shadows

```css
--elevation-sm: 0px 4px 10px 0px rgba(14, 14, 14, 0.25);
```

**Used for:**
- Form field focus states
- Card elevations
- Button hover states

---

## Sidebar (Navigation)

```css
--sidebar: rgba(255, 255, 255, 1.00);
--sidebar-foreground: rgba(14, 14, 14, 1.00);
--sidebar-primary: rgba(40, 160, 112, 1.00);
--sidebar-primary-foreground: rgba(14, 14, 14, 1.00);
--sidebar-accent: rgba(40, 160, 112, 1.00);
--sidebar-accent-foreground: rgba(14, 14, 14, 1.00);
--sidebar-border: rgba(60, 60, 60, 1.00);
--sidebar-ring: rgba(40, 160, 112, 1.00);
```

---

## Chart Colors

```css
--chart-1: rgba(40, 160, 112, 1.00);    /* Green */
--chart-2: rgba(11, 46, 80, 1.00);      /* Dark Blue */
--chart-3: rgba(70, 0, 0, 1.00);        /* Dark Red */
--chart-4: rgba(29, 115, 201, 1.00);    /* Blue */
--chart-5: rgba(63, 207, 23, 1.00);     /* Bright Green */
```

---

## Other Variables

```css
--font-size: 16px;  /* Base font size for the application */
```

---

## Component Usage Examples

### Using Variables in Your CSS

All components already use these variables. Here's how they're applied:

#### Buttons
```css
.button {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border-radius: var(--radius-button);
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-bold);
}
```

#### Input Fields
```css
.input {
  background-color: var(--input-background);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-family: var(--font-family-body);
  font-size: var(--text-label);
  color: var(--foreground);
}

.input::placeholder {
  color: var(--muted-foreground);
}

.input:focus {
  border-color: var(--primary);
  box-shadow: var(--elevation-sm);
}
```

#### Tags
```css
.tag {
  background-color: var(--tag-primary);
  color: var(--tag-primary-foreground);
  border-radius: var(--radius-button);
  font-family: var(--font-family-body);
  font-size: var(--text-label);
}
```

---

## How to Customize

### Example 1: Change Primary Color
To change the primary color from green to blue:

```css
/* In /src/styles/theme.css */
:root {
  --primary: rgba(0, 100, 200, 1.00);  /* Change to your blue */
  --primary-foreground: rgba(255, 255, 255, 1.00);
}
```

This will update:
- All primary buttons
- Focus states on inputs
- Links and highlights
- Checkbox checked states

### Example 2: Change Font Sizes
To make all text larger:

```css
:root {
  --font-size: 18px;  /* Increase from 16px to 18px */
  --text-h1: 90px;    /* Increase from 80px */
  --text-h2: 72px;    /* Increase from 64px */
  /* etc... */
}
```

### Example 3: Change Border Radius
To make inputs more rounded:

```css
:root {
  --radius: 24px;  /* Increase from 16px */
}
```

### Example 4: Change Tag Colors
To customize tag colors:

```css
:root {
  --tag-primary: rgba(255, 100, 50, 1.00);  /* Orange */
  --tag-primary-foreground: rgba(255, 255, 255, 1.00);
}
```

---

## Dark Mode Support

The theme includes dark mode variants. To enable dark mode, add the `.dark` class to your root element:

```html
<html class="dark">
```

Dark mode automatically adjusts:
- Background colors
- Text colors
- Card backgrounds
- Border colors
- And more...

---

## Component-Specific Hardcoded Values

Some components have intentional hardcoded values for specific design requirements:

### Button Hover States
Buttons have specific hover colors for better visual feedback:
```css
.primary:hover {
  background-color: #267d5e;  /* Darker green */
}

.secondary:hover {
  background-color: #0e3a63;  /* Darker blue */
}
```

These can be customized directly in `/src/app/components/Button/Button.module.css` if needed.

### Card Shadows
Project cards have a specific shadow from your Figma design:
```css
box-shadow: 0px 8px 15px 0px rgba(14, 14, 14, 0.3);
```

---

## Best Practices

1. **Always use CSS variables** when creating new components
2. **Refer to existing components** to see how variables are used
3. **Test in both light and dark modes** if implementing dark mode
4. **Keep spacing consistent** using the 4px/8px grid system
5. **Update theme.css only** - don't modify individual component files unless necessary

---

## Variable Naming Convention

Variables follow this pattern:
- `--{category}-{property}`: Example: `--primary-foreground`
- `--{element}-{category}`: Example: `--tag-primary`
- `--{property}`: Example: `--radius`, `--border`

---

## Where Variables Are Used

| Variable | Used In |
|----------|---------|
| `--primary` | Primary buttons, focus states, checkboxes, links |
| `--secondary` | Secondary buttons, ghost button text, nav links |
| `--border` | Input borders, card borders, dividers |
| `--input-background` | Text inputs, textareas, select dropdowns |
| `--muted-foreground` | Placeholder text, disabled text |
| `--destructive` | Error messages, error borders |
| `--radius` | Input fields, cards (with 32px override) |
| `--radius-button` | Buttons, tags (pill shape) |
| `--elevation-sm` | Focus shadows, card shadows |
| `--font-family-heading` | All h1-h6 elements |
| `--font-family-body` | All p, span, button, input elements |

---

## Quick Reference: Common Customizations

### Change Brand Colors
```css
--primary: /* Your primary brand color */
--secondary: /* Your secondary brand color */
```

### Adjust Spacing
```css
--font-size: /* Base font size affects all relative sizes */
```

### Modify Borders
```css
--border: /* All border colors */
--radius: /* Input/card roundness */
--radius-button: /* Button roundness */
```

### Update Typography
```css
--font-family-heading: /* Heading font */
--font-family-body: /* Body text font */
```

### Change Shadows
```css
--elevation-sm: /* All shadows */
```

---

All changes to these variables in `/src/styles/theme.css` will automatically propagate throughout your entire application!
