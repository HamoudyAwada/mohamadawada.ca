# Portfolio Website - Project Structure

## Overview
A personal portfolio website for a UX and Product Designer, built with React, React Router, and CSS Modules following a comprehensive Figma design system.

## Tech Stack
- **React** 18.3.1
- **React Router** 7.13.0 (Data mode for routing)
- **CSS Modules** (No Tailwind - pure CSS with design tokens)
- **TypeScript**
- **Vite** for build tooling

## Project Structure

```
/src
  /app
    /components         # Reusable UI components
      /Logo            # Custom SVG logo (A+M letters)
      /Navigation      # Sticky nav with mobile overlay menu
      /Button          # Primary/secondary/ghost variants with hover states
      /Tag             # Colored pill badges
      /Divider         # Horizontal/vertical separators
      /ProjectCard     # Project cards with hover effects
      /SectionHeading  # Section headers with optional CTA
      /HeroSection     # Hero layout with image + content
      /CopyBlock       # Image + text side-by-side layout
      /Footer          # Multi-column footer with links
    /pages
      Home.tsx         # Landing page
      ComingSoon.tsx   # Placeholder for unbuilt pages
    routes.tsx         # React Router configuration
    App.tsx           # Root component
  /imports
    /DesktopHome-1    # Figma imported assets
      *.png           # Raster images (via figma:asset)
      svg-*.ts        # SVG path data
  /styles
    fonts.css         # Font imports (Plus Jakarta Sans, Quicksand)
    theme.css         # Design tokens (colors, spacing, typography)
    tailwind.css      # Tailwind v4 base
    index.css         # Main stylesheet imports
```

## Design System

### CSS Custom Properties (from theme.css)
All components use CSS variables defined in `/src/styles/theme.css`:

**Colors:**
- `--primary`: #1e7854 (green)
- `--secondary`: #0b2e50 (dark blue)
- `--accent`: #28a070 (light green)
- `--background`: #f2f2f2
- `--foreground`: #0e0e0e
- `--card`: #dedede
- `--border`: #3c3c3c

**Typography:**
- `--font-family-heading`: Plus Jakarta Sans
- `--font-family-body`: Quicksand
- `--text-h1` through `--text-h6`: Size tokens
- `--text-base`: 20px
- `--text-label`: 16px
- Font weights: extrabold (800), bold (700), medium (500), normal (400)

**Spacing & Borders:**
- `--radius`: 16px (default)
- `--radius-button`: 1024px (pill shape)

### Component Styling
- All components use CSS Modules (`.module.css` files)
- NO Tailwind utility classes
- Fully responsive with breakpoint at 768px

## Responsive Behavior

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Key Responsive Changes
- **Navigation**: Desktop horizontal nav → Mobile hamburger menu with full-screen overlay
- **Hero**: Side-by-side → Stacked vertical
- **Project Grid**: 3 columns → Single column stack
- **Footer**: 4 columns → Stacked vertical

## Interactive Features

### Navigation
- **Desktop**: Sticky top bar with logo + nav links + Contact button
- **Mobile**: Hamburger menu opens full-screen overlay
  - Closes on X click
  - Closes when navigating to current page
  - Closes when navigating to new page
  - Prevents body scroll when open

### Buttons
- **Hover states**: Slight lift + shadow increase
- **Active states**: Darker background
- **Variants**: primary (green), secondary (blue), ghost (transparent)

### Project Cards
- **Hover effect**: Enhanced shadow + translateY(-4px)
- All cards link to project pages (currently placeholder)

### Links
All navigation links route to separate pages:
- My Work → `/my-work`
- Process → `/process`
- About Me → `/about`
- Resume → `/resume`
- Contact → `/contact`

## Assets

### Images
Imported from Figma using special schemes:
```tsx
import img from "./[hash].png"
```

### SVG Icons
Imported from generated path data:
```tsx
import svgPaths from "../../imports/DesktopHome-1/svg-[hash]"
```

## Future Pages
The following pages need designs and will be built later:
- My Work page
- Process page
- About Me page
- Resume page (with PDF download)
- Contact page (with form)

Currently showing "Coming Soon" placeholder with navigation and footer.

## Development Notes

### Adding New Components
1. Create component folder in `/src/app/components/[ComponentName]`
2. Create `ComponentName.tsx` and `ComponentName.module.css`
3. Create `index.ts` for clean imports
4. Use CSS variables from theme.css
5. Ensure responsive behavior at 768px breakpoint

### Adding New Pages
1. Create page file in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Import Navigation and Footer components
4. Use consistent layout structure

### CSS Modules Best Practices
- Use camelCase for class names
- Leverage CSS custom properties for theming
- Keep component styles scoped to component file
- Use semantic class names

## Build & Deploy
```bash
npm run build
```
Outputs to `/dist` directory, ready for static hosting.
