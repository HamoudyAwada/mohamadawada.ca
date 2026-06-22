> *[HERO IMAGE: design system overview. Use the clean PNG exported straight from the Figma canvas as the full-width hero at the top of the case study.]*

# Building an AI-Ready Design System at Enterprise Scale

I took ENMAX's design system from a rough proof of concept to a scalable, accessible foundation, and built an AI-assisted workflow that carries tokens and components into production code.

---

## What I delivered

- Re-architected the system around a three-tier token model (Primitive, Global, Semantic) that scales like code and updates everywhere at once
- Validated every token for WCAG AA contrast and pushed toward AAA, so accessibility comes baked into the system from the start
- Cut component variants by 40%+ using Figma Slots and booleans, while increasing real variation capability
- Introduced dark mode to enmax.com through mode-ready semantic tokens, complete and ready for developer handoff
- Built an AI-assisted documentation workflow (Figma MCP and GitHub Copilot) that raised documentation efficiency roughly tenfold
- Now building a custom AI skill that generates ENMAX-true UI in Figma and production-ready React, and advancing Figma Code Connect to close the design-to-code loop

## The problem

ENMAX is a Calgary utility serving both regulated and competitive energy markets, with a product team shipping customer-facing experiences across enmax.com and internal tools. The design system I inherited worked the way a rough draft works. It proved the idea, but it couldn't scale, and its components sat below current best practices. I joined for an 8-month co-op term as a Product Designer with two jobs to do. First, turn that proof of concept into a scalable, accessible foundation. Second, get it ready for the AI design tools that are changing how product teams build, like Figma's MCP server.

## A foundation built to scale, accessibly

I rebuilt the system around a three-tier token architecture made up of Primitive, Global, and Semantic layers. Raw values resolve up through the tiers into intent-based tokens, so a single primitive like Red 500 flows into a Global role like Brand Primary and lands as a Semantic token such as button-background-primary-default. This works the way scalable systems do in code, so a brand or theme change updates everywhere at once with no manual hunting.

> *[Photo: the three-tier architecture diagram, paired with the resolution example showing Red 500 referenced through Brand Primary into button-background-primary-default across the tiers.]*

I built accessibility in from the very beginning. Every token was validated for WCAG AA contrast as it was created, with a constant push toward AAA, so the right color and contrast come straight from the system instead of falling on each designer to get right.

Working alongside leadership, I audited the component library to sort out what was deprecated, what lived only in Figma, and what was live in code. From there I manually mapped tokens to every component (the original system predated Figma variables, so none of that wiring existed) and rebuilt each one to auto-layout standards with proper component properties. In the same pass I introduced dark mode to enmax.com by structuring the semantic tokens for mode-switching from the ground up, complete and ready for developer handoff. When Figma released Slots, I used them with booleans to cut component variants by 40%+ while actually increasing variation capability, which keeps the library lean as it grows.

> *[Photo: the dropdown component built with its six options as slots, showing the leaner, more flexible structure.]*

## An AI-assisted workflow, treated as a core design skill

Documenting a system this size, while staying aligned with leadership, is where most design systems stall out. Using the `use_figma` skill through GitHub Copilot and Figma MCP, I built a workflow where an AI agent writes variable descriptions and component configurations straight into the Figma file and into parallel markdown files at the same time, one for tokens and one for components. That raised documentation efficiency roughly tenfold, and the markdown layer keeps the whole system portable and easy to carry forward. For me, fluency with AI tools is a real part of modern product design. It clears the hours I used to lose to maintenance so I can spend them on strategy and user experience.

## Closing the design-to-code loop

The work I'm driving now is a custom ENMAX Design System Skill, an AI agent that scaffolds ENMAX-true UI in Figma and production-ready React components. That frees designers up for strategy and UX while developers get consistent, on-system code. Tested through Figma MCP with iterative rule refinement, it already generates ENMAX-accurate UI. To make that output genuinely shippable, I'm actively working through Figma Code Connect, which ties each design component to its living production code. Once Code Connect is in place, what the agent generates can drop straight into production as real ENMAX code, fully closing the loop between design and development. A planned design system website will bring all of it into one source of truth for the organization.

The system isn't finished, but a good design system never really is. It scales cleanly and holds its accessibility as it grows, and it's ready for the way teams are starting to build with AI.

---

*Part of an ongoing 8-month UX Design Co-op term at ENMAX (January 2026 to August 2026).*
