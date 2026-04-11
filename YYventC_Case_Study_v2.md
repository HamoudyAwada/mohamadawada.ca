# YYventC — Case Study

**Product Designer | Gatherly | Design Studio 1 — Fall 2025**

---

## Overview

YYventC is a community-first, mobile event discovery platform designed exclusively for Calgary. The name is a play on "YYC" (Calgary's airport code) and "events," because this app was built for Calgarians, by Calgarians. My role on the team spanned the full design lifecycle, from initial problem framing and research synthesis all the way through information architecture, interaction design, and prototype refinement for our final MVP presentation.

**My Role:** Product Designer (UX Design Lead)
**Team:** 4 members · 2 UX Designers · 1 Graphic Designer · 1 Web Developer
**Timeline:** September to December 2025
**Tools:** Figma, FigJam, Google Forms, Google Drive, Microsoft Teams

---

## The Problem

Calgary has a rich and growing local event scene — concerts, art shows, community markets, pop-ups, neighbourhood festivals — but no good way to find any of it. People were jumping between Eventbrite, Facebook, Ticketmaster, Instagram, and word of mouth just to stay in the loop, and still missing things they would have loved. Existing platforms skewed toward big-budget, ticketed events and largely ignored the small, local, community-run experiences that make a city feel alive.

Beyond discoverability, there was a deeper issue: people wanted to go out and connect, but had no easy way to find others who shared their interests or even know what was happening nearby. The city's event infrastructure was scattered in a way that was quietly eroding any real sense of community.

Our final problem statement captured it well:

> *Calgary lacks a central hub for people to connect, for businesses to thrive, and for artists to shine.*

That sentence drove every design decision we made.

---

## Research & Discovery

### Understanding the Landscape

We started by grounding ourselves in existing data. A City of Calgary engagement study — *Eventful City Strategy: What We Heard* — showed that of 382 Calgarians surveyed, the top two ways people found local events were Facebook and word of mouth. No dedicated event platform even made the top five. That told us something important: the gap wasn't that people weren't interested in events. The tools for finding them were simply not working.

### Our Own Research

To build on this, we ran a Google Forms survey targeting Calgarians aged 18 to 35. We collected 32 responses and structured our questions around three things: how people currently discover events, what frustrates them most, and what they'd want from a centralized hub.

I was involved in designing the survey questions, synthesizing the responses, and organizing our findings in FigJam using affinity mapping and prioritization models to surface meaningful patterns.

**What the data told us:**

The respondent base skewed young — 68.8% were between 18 and 23, and 56.3% identified as students. This aligned well with our target audience.

On discovery, 90.6% said they find events through social media, and 84.4% through friends and family. Only 15.6% were searching directly on event apps. Ticketmaster was the most used platform at 75%, followed by Eventbrite at 56.3% and Showpass at 50% — yet these platforms are built for ticketed, large-scale events, not the local and community-run experiences our users were actually looking for.

62.5% of respondents said they had missed an event they wanted to attend. When asked why, the answers were consistent: they found out too late, couldn't find enough information, or the app they were using didn't surface things relevant to them.

The most wanted features were telling. 81.3% wanted personalized event recommendations, 65.6% wanted local deals and discounts, 62.5% wanted events near them, and 59.4% wanted event reminders and calendar syncing. When asked about platform preference, the split between mobile app only (46.9%) and both mobile and web (46.9%) made a mobile-first approach an easy call.

When it came to supporting local creators, 81.3% said it was either very important or somewhat important to them, and 81.2% said they were very likely or somewhat likely to use YYventC to discover smaller, local, community-run events specifically.

The qualitative responses were just as telling. People weren't just frustrated with apps — they felt the city's event scene was happening around them without them. One respondent put it simply: "There isn't a centralized platform to find local events and most event apps have problematic work environments." Another wrote that the mission of YYventC "is not just about the event ticket platform — it's the connection between people with locals in Calgary, bringing everyone together."

That kind of feedback confirmed we were solving a real problem, not just an assumed one.

### User Personas

We developed two personas to anchor our design decisions throughout the project.

**Dereck, 22** is a student in Calgary who loves concerts and local art shows but consistently hears about them too late. He wants affordable, accessible experiences he can attend with friends, and he's tired of apps that surface the same repetitive, irrelevant suggestions.

**Jamie, 26** is a designer who wants one place that pulls everything together. She's tired of searching five different sites. She wants curated recommendations that fit her creative and social lifestyle without having to work for them.

These two users shaped our priorities for the rest of the project.

---

## My Role in the Process

### Information Architecture and Prioritization

One of my main contributions in the early-to-mid stages was helping define the structure of what YYventC would actually be. Using FigJam, I mapped out user flows, ran prioritization exercises against our research findings, and helped the team align on what needed to be in the MVP versus what could come later.

One decision that came out of this process: we initially considered integrating transit accessibility features so users could see events reachable by Calgary Transit. It seemed like a natural fit given that transportation came up as a real frustration in our survey. But after mapping out the scope, we recognized it was scope creep — a feature that would require data partnerships and infrastructure we couldn't build at this stage. Instead, we focused on what we could do: surfacing events near a signed-in user based on their location and interests, making discoverability feel personal without needing transit integration.

Knowing what to cut and why is one of the clearest contributions a designer can make to a project, and this was a decision I'm genuinely proud of.

### Navigation Structure

A major structural decision was how to organize YYventC's core navigation. I helped define and advocate for a three-pillar system that mapped directly back to our final problem statement:

- **Discover** — the main feed, personalized and location-aware
- **Categories** — organized browsing by event type, kept simple and uncluttered
- **Community** — local creators, small business events, neighbourhood spotlights

This wasn't just a nav bar decision. It was a deliberate reflection of the design philosophy: the app should help you discover, help you connect, and help you engage — in that order.

> **[Insert image: YYventC Discover Page]**
> *The Discover feed surfaces personalized, location-aware events with simple category filters and a "Popular Near You" section, keeping the experience focused and easy to scan.*

The Discover screen shows this thinking in action. The location pin at the top grounds the experience in where the user actually is. The category filters — All, Music, Food and Drinks — are deliberately minimal. The "Popular Near You" section does the work of surfacing relevance without requiring the user to dig for it. Clean, purposeful, and built around what our research told us people actually needed.

### Signed-In vs. Signed-Out Flows

I designed the separation between the signed-in and signed-out user experiences. This matters more than it might seem at first. A signed-out user landing on YYventC should still be able to browse and feel the value of the app — but a signed-in user gets something much richer: a personalized feed, friends' activity, saved events, and push notifications.

Getting this right meant thinking carefully about what information to surface at each state, what gates to put in place without making them feel like walls, and how to make the sign-up moment feel genuinely worth it. The welcome screen — "We're glad you're here. Enjoy the moment with us." — was intentionally warm for exactly that reason.

> **[Insert image: YYventC Events/Social Page]**
> *The Friends and Yvents feed shows where people in your network are going and what they're saying about it — turning event discovery into a social experience rather than a solo search.*

The social layer of the app was one of the features I helped refine most carefully. The Friends section at the top of the Yvents feed shows your network's faces and activity at a glance, while the feed itself surfaces posts from real attendees — making the experience feel like a community rather than a catalogue. One of our survey respondents said they wanted to "see what events my friends are going to, and if they cancel." This screen is the direct answer to that.

### Interaction Design and Prototype Refinement

In the final phase, I shifted into a refinement role. I added push interactions and transitions to make the prototype feel fluid and intentional rather than static. I also did a full consistency pass across all interactions before our final presentation, making sure that taps, transitions, and states were cohesive from screen to screen. When you're presenting a Figma prototype, the feel of moving through it matters just as much as what's on any individual screen.

I also helped refine the chat features, thinking through how users would communicate around events, coordinate with friends, and engage with the community tab.

---

## Design Decisions

### Keeping It Simple on Purpose

One of the strongest pieces of feedback we received early on was that scope of events can feel overwhelming. Users didn't want another app that threw everything at them — and our survey reinforced this, with respondents explicitly calling out "repetitive event suggestions" and apps that feel "cluttered" as top frustrations. Every design decision we made pushed back against that. The navigation is three items. The filter system is built around affordability, location, date, and interests — practical variables, not endless toggles.

### Verification and Trust

Our survey responses showed real skepticism about the reliability of event information. One respondent wrote: "I just rely on creators. I am not sure if it is sponsored so I am hoping to see something that is not biased." We addressed this by designing verified organizer badges and venue confirmation indicators — lightweight credibility signals that don't clutter the experience but meaningfully raise trust.

### Community as a Feature, Not an Afterthought

Most event apps treat community as something that happens around the product. We built it in. The Community tab features local spotlights, small business events, and neighbourhood happenings — things that wouldn't make it onto Ticketmaster but are exactly what makes Calgary's social fabric worth engaging with. With 81.3% of our survey respondents saying supporting local businesses and creators was important to them, this wasn't a nice-to-have. It was the point.

---

## The Final Product

The MVP prototype delivered:

- A personalized Discover feed with real-time event recommendations and location-aware surfacing
- Category browsing across Music, Food and Drinks, Arts, Community, and more
- A Friends and Yvents social feed showing where your network is going and what they're saying
- A community hub for local creators and small events
- Verified organizer and venue badges
- A signed-in and signed-out flow separation with a warm onboarding experience
- Smooth push transitions and consistent interaction patterns throughout

Usability testing confirmed the design was clean and easy to navigate, and the community hub was singled out as distinctively different from competitors. Feedback also pointed toward adding more social nudges — things like "Your friends are going to [event]. Join them?" — which validated the direction we were already heading.

---

## Reflection

YYventC started with a genuine belief: that a city is only as connected as the spaces it creates for people to come together. That's not a design brief. It's something that came from actually living in Calgary and seeing how hard it is to find out what's happening, let alone show up with people you care about.

What I took away from this project professionally is that good information architecture isn't really about sitemaps. It's about understanding what a person needs to feel before they know what they need to do. The signed-in and signed-out flow, the three-pillar navigation, the decision to cut transit integration — all of those came from asking the same question: does this serve the user, or does it serve our idea of what the user wants?

If YYventC were to keep growing, the next steps would be building out those social nudge features, integrating real event data partnerships with local venues and creators, and exploring what a community partnership program with Calgary businesses could look like. The MVP was a beginning — and a strong one.

---

*Designed with Team Gatherly — Fall 2025 | Design Studio 1*
