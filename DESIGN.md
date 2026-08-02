# Design System Strategy: The Celestial Architect

This design system is built to transform 'Stellaris Dev Solutions' from a standard service provider into a premium digital foundry. The aesthetic direction, **The Celestial Architect**, moves away from flat, "webby" templates and toward a deep, atmospheric, editorial experience. It leverages the vastness of space—not through literal star clip-art, but through infinite depth, luminosity, and high-contrast technical precision.

---

## 1. Creative North Star: The Celestial Architect
The goal is to evoke the feeling of a high-tech command center looking out into a nebula. We achieve this by breaking the traditional box-model grid. Instead of stacking blocks, we layer "data-surfaces" over "atmospheric voids." 

**Core Principles:**
*   **Infinite Depth:** Use tonal layering to create a sense of Z-axis movement.
*   **Luminous Precision:** Content should feel like it is projected or glowing, not printed.
*   **Intentional Asymmetry:** Break the grid with overlapping elements and extreme typographic scales to signal high-end curation.

---

## 2. Color & Atmospheric Depth

### The "No-Line" Rule
To maintain a premium, futuristic feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background shifts or tonal transitions.
*   Use `surface-container-low` for the main page body.
*   Use `surface-container-high` or `surface-container-highest` to define card regions.
*   The transition from `#ffffff` (surface) to `#f4f6f9` (container) is your primary tool for visual separation.

### Surface Hierarchy & Nesting
Treat the UI as a series of floating glass panes. 
1.  **Base Layer:** `surface` (#ffffff)
2.  **Sectional Layer:** `surface-container-low` (#f4f6f9)
3.  **Interaction Layer (Cards/Modals):** `surface-container-highest` (#e3e7ec)

### The "Glass & Gradient" Rule
Flat colors are for utilities; gradients are for soul. 
*   **CTAs:** Use a linear gradient from `primary` (#8ff5ff) to `primary-container` (#00eefc) at a 135-degree angle.
*   **Glow Effects:** Apply a `secondary` (#ac89ff) drop shadow with a 40px–80px blur at 10% opacity behind key feature blocks to create a "nebula" backlight.

---

## 3. Typography: Technical Elegance

This design system utilizes a high-contrast pairing to balance "Human" (Manrope) with "Machine" (Space Grotesk).

*   **Display & Headlines (Space Grotesk):** These are your "Statement" pieces. The sharp, geometric terminals of Space Grotesk convey innovation. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero sections to create an editorial, high-impact feel.
*   **Body & Titles (Manrope):** Use Manrope for all functional reading. It provides the "Professional" counterweight to the futuristic headlines. 
*   **Labeling (Space Grotesk):** Small labels (e.g., "PROJECT_01") should always be in Space Grotesk, uppercase, with +0.1em letter spacing to mimic technical schematics.

---

## 4. Elevation & Depth

### Tonal Layering
Depth is achieved by "stacking" the surface-container tiers. For example:
*   Place a `surface-container-highest` card inside a `surface-container-low` section. The contrast in value provides enough "lift" that shadows are often unnecessary.

### Ambient Shadows
When an element must float (like a dropdown or a primary modal), use "Celestial Shadows":
*   **Color:** Use a tinted version of `secondary` or `primary` (depending on the context) at 5% opacity.
*   **Spread:** High blur (30px+), zero spread. This mimics the way light diffuses in a gas cloud.

### The "Ghost Border" Fallback
If a container lacks sufficient contrast against its background, use a **Ghost Border**:
*   **Token:** `outline-variant` (#c3c7cf).
*   **Opacity:** Set to 15%. It should be felt, not seen.

### Glassmorphism
For navigation bars and floating action menus:
*   **Background:** `surface-container-high` at 60% opacity.
*   **Effect:** `backdrop-filter: blur(12px)`.
*   **Border:** A top-edge-only Ghost Border to simulate a light-catch on the edge of glass.

---

## 5. Components

### Buttons: The Kinetic Trigger
*   **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text. Use `md` (0.375rem) corner radius, which aligns with the Moderate roundedness of the system. Add a subtle outer glow of `primary` on hover.
*   **Secondary:** Ghost style. No fill. 1px Ghost Border (20% opacity). On hover, fill with `surface-bright` and increase border opacity.
*   **Tertiary:** Text-only in `secondary` (#ac89ff) with a custom "arrow" icon that shifts 4px to the right on hover.

### Cards: The Data Module
*   **Structure:** No dividers. Use `title-lg` (Manrope) for headers and `body-md` (Manrope) for descriptions.
*   **Separation:** Use `surface-container-highest` background. Use 24px–32px of internal padding (referencing the Spacing Scale) to create a "premium" sense of room.

### Input Fields: The Command Line
*   **Default:** `surface-container-lowest` background with a bottom-only Ghost Border. 
*   **Active:** Border becomes 100% opaque `primary` (#8ff5ff) with a 2px glow.
*   **Typography:** All input text should be `body-md` (Manrope).

### Chips: Technical Metadata
*   **Style:** Pill-shaped (`full` roundedness). 
*   **Color:** `secondary-container` fill with `on-secondary-container` text. Keep these small and tight (`label-md`).

---

## 6. Do’s and Don'ts

### Do:
*   **Embrace Negative Space:** Allow headlines to "breathe" by surrounding them with `surface` space.
*   **Use Tonal Shifts:** Change the background color slightly when moving from a "Service" section to a "Testimonial" section.
*   **Animate Transitions:** Use slow, 400ms "Ease-Out" transitions for glass elements to simulate weight.

### Don’t:
*   **Don't use 100% White:** Use `on-surface` (#1a1c1e) for text. Pure white is too harsh against the light background and looks unrefined.
*   **Don't use Box Shadows on everything:** Let the background color shifts do the heavy lifting for hierarchy.
*   **Don't use standard icons:** Use thin-stroke (1px or 1.5px) icons to match the "Sharp" typography. Avoid filled, chunky icons.
*   **Don't use Default Grids:** Try offsetting images so they bleed off the edge of the container or overlap with text modules.