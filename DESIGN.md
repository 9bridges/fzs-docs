---
name: FZS 数据同步平台 Documentation & Marketing Site
description: Company website and product docs for FZS by 九桥同步 — precision branding for enterprise financial infrastructure.
colors:
  brand:        "oklch(40% 0.185 25)"
  brand-deep:   "oklch(30% 0.155 25)"
  brand-pale:   "oklch(95.5% 0.010 25)"
  ground:       "oklch(97.5% 0.005 50)"
  ink:          "oklch(18% 0.012 30)"
  muted:        "oklch(52% 0.010 35)"
  divider:      "oklch(91% 0.007 50)"
  surface:      "oklch(99.2% 0.003 50)"
  s-red:        "oklch(52% 0.20 25)"
  s-amber:      "oklch(70% 0.14 72)"
  s-blue:       "oklch(52% 0.14 245)"
  s-green:      "oklch(48% 0.13 155)"
  dark-ground:  "oklch(14% 0.010 30)"
  dark-surface: "oklch(19% 0.012 30)"
  dark-ink:     "oklch(93% 0.005 50)"
  dark-brand:   "oklch(67% 0.14 25)"
typography:
  display:
    fontFamily: "'PingFang SC', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'PingFang SC', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'PingFang SC', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'PingFang SC', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'PingFang SC', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace"
    fontSize: "0.9rem"
    fontWeight: 400
rounded:
  xs:   "4px"
  sm:   "6px"
  md:   "8px"
  lg:   "12px"
  pill: "999px"
spacing:
  xs:  "4px"
  sm:  "8px"
  md:  "16px"
  lg:  "24px"
  xl:  "40px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.brand-deep}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "10px 30px"
  nav-link-active:
    textColor: "{colors.brand}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  table-header:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.surface}"
    padding: "12px 16px"
---

# Design System: FZS 数据同步平台 Documentation & Marketing Site

## 1. Overview

**Creative North Star: "The Precision Platform"**

Where the fzs-slides deck is "The Instrument Panel" — a calibrated readout for a meeting-room projector — the website is the same instrument made browsable. A financial IT director evaluating data synchronization infrastructure opens this site at a desk, probably with two tabs open and a half-formed opinion about the vendor already. The design must clear that bar in under five seconds: technical depth is evident, claims are specific, and the visual system communicates the same precision as the product itself.

The color system, typographic rationale, and elevation philosophy are identical to fzs-slides. The palette derives from the 九桥同步 logo's brushstroke: a deep crimson at `oklch(40% 0.185 25)` (approximately `#8c1a20`) anchors every structural landmark — the navbar brand mark, hero section heading accent, primary buttons, table headers in the docs, and CTA bands. This is not a marketing-accent blue; it is the brand's actual color used with structural intent. The warm near-white ground (`oklch(97.5% 0.005 50)`) prevents clinical whiteness and reads as authoritative rather than sterile.

Typography uses PingFang SC (or the system sans stack) at every level — no Kaiti SC on web, where long-form prose and dense documentation favor legibility over calligraphic texture. The font weight range carries all hierarchy: 800 for hero display, 700 for section headlines, 600 for component titles, 400 for body. Fira Code is the single mono voice across both systems.

This design explicitly rejects: SaaS-startup sky blue (the current fzs-docs default was inherited from Docusaurus — it is not the brand); decorative gradients on backgrounds or hero text (`background-clip: text` is banned); border-left accent stripes on admonitions; the ghost-card pattern (1px border plus wide shadow); and the DSG Data aesthetic of cluttered banner sliders with no hierarchy.

**Key Characteristics:**
- Brand crimson as structural color: navbar, hero accent, primary CTA, table headers, active nav indicators
- Warm near-white ground: `oklch(97.5% 0.005 50)` throughout — never pure `#fff`, never sky-tinted
- Single sans stack: PingFang SC / system-ui, weight contrast as the hierarchy engine
- Flat elevation: surfaces are flat at rest; only product screenshots carry a light ambient shadow
- Chinese-first typesetting: CJK line-break rules, wrap-word handling for inline code, strict line-length for prose
- Full dark-mode: deep warm charcoal ground with a lightened brand crimson (`oklch(67% 0.14 25)`) as primary

## 2. Colors: The Logo Palette

A **Restrained** palette on the commitment axis: the brand crimson appears in structural roles (navbar, CTAs, table headers, active indicators) covering roughly 5–15% of any given page surface. The near-white ground and ink carry the rest. No second decorative accent is defined.

### Primary
- **Brand Crimson** `oklch(40% 0.185 25)` / approx. `#8c1a20`: The identity anchor, taken from the 九桥同步 logo's brushstroke hue. Used in: navbar active indicator, hero heading accent text, primary buttons, doc table header backgrounds, CTA section backgrounds, the `--ifm-color-primary` Docusaurus token. Dark, authoritative, never aggressive.
- **Brand Deep** `oklch(30% 0.155 25)` / approx. `#5e0f13`: Hover and pressed state for brand-colored interactive elements. The same hue family, pushed toward near-black.
- **Brand Pale** `oklch(95.5% 0.010 25)` / approx. `#f9f3f3`: A barely-visible tint of the brand hue. Used as background for highlighted grid cells, hovered table rows, and tag/badge backgrounds.

### Neutral
- **Ground** `oklch(97.5% 0.005 50)` / approx. `#f7f4ef`: The page background for marketing pages. Warm near-white — hue 50 (slightly amber) prevents clinical white. Never pure `#fff`.
- **Ink** `oklch(18% 0.012 30)` / approx. `#2a2320`: Primary text. Near-black with a trace of warmth toward the brand hue.
- **Muted** `oklch(52% 0.010 35)` / approx. `#7d7472`: Secondary text, subtitles, supporting labels, placeholder text.
- **Divider** `oklch(91% 0.007 50)` / approx. `#e8e3dd`: Horizontal rules, table borders, sidebar item separators. Structural only.
- **Surface** `oklch(99.2% 0.003 50)` / approx. `#fcfbf9`: Slightly elevated surface. Card backgrounds, doc content area, callout panels.

### Dark Mode
- **Dark Ground** `oklch(14% 0.010 30)` / approx. `#1f1917`: Deep warm charcoal page background. Tinted toward brand hue.
- **Dark Surface** `oklch(19% 0.012 30)` / approx. `#2a2220`: Elevated surface in dark mode. Cards, sidebars, nav backgrounds.
- **Dark Ink** `oklch(93% 0.005 50)` / approx. `#edeae5`: Primary text in dark mode. Warm near-white.
- **Dark Brand** `oklch(67% 0.14 25)` / approx. `#d9716a`: Lightened brand crimson for dark mode. Maintains WCAG AA contrast on dark surfaces.

### Status Colors (functional only)
- **Status Red** `oklch(52% 0.20 25)`: Error, sync interrupted. Distinguishable from Brand Crimson (brighter, higher chroma).
- **Status Amber** `oklch(70% 0.14 72)`: Warning, delay threshold, degraded state.
- **Status Blue** `oklch(52% 0.14 245)`: Informational state, idle alert.
- **Status Green** `oklch(48% 0.13 155)`: Healthy, sync running, success.

### Named Rules
**The Logo Rule.** Brand Crimson is the 九桥同步 logo color, not a UX accent chosen for sky-blue "tech" associations. Any element that currently uses the Docusaurus sky blue (`#0284c7` / Sky 600) is using an inherited default, not a brand color. Migration target: replace with Brand Crimson in structural roles, Brand Pale in subtle backgrounds, and Ink/Muted in informational roles.

**The One Accent Rule.** There is no second decorative accent color. Status colors (green/amber/red/blue) are functional only — sync state, severity indicators, comparison results. Never use them for decoration or brand emphasis.

**The No Gradient Rule.** No `background-clip: text` gradient fills on headings. No decorative `linear-gradient` hero backgrounds. Background gradients may appear only as a very subtle structural layering tool (max two stops, same hue family, ≤10% lightness difference). The fzs-docs hero's current sky-blue gradient and gradient accent text are both banned.

## 3. Typography

**Body / UI Font:** PingFang SC (`'PingFang SC', system-ui, -apple-system, 'Segoe UI', Roboto, 'Noto Sans', sans-serif`). The system sans stack for Chinese + Latin. On macOS this renders as PingFang SC; on Windows as Segoe UI + system Chinese. Six weight variants on macOS enable genuine weight hierarchy with no network dependency.

**Mono Font:** Fira Code (`'Fira Code', 'Cascadia Code', 'Consolas', monospace`). Identical to fzs-slides. All code samples, database identifiers, configuration values, version strings, and CLI commands.

**Character:** A single humanist sans at multiple weights, not a paired multi-family system. Weight contrast alone (400/600/700/800) generates hierarchy clearly enough for this register. The mono font provides the only texture contrast — code samples feel technically distinct without a second display typeface.

### Hierarchy
- **Display** (weight 800, `clamp(2.4rem, 5vw, 3.8rem)`, line-height 1.15, letter-spacing −0.03em): Hero H1 on marketing pages only. One per page. `text-wrap: balance` to prevent orphaned words on narrow viewports.
- **Headline** (weight 700, `clamp(1.75rem, 3.5vw, 2.4rem)`, line-height 1.2, letter-spacing −0.02em): Section headings (H2). `text-wrap: balance`.
- **Title** (weight 600, 1.25rem, line-height 1.35, letter-spacing −0.01em): Sub-section headings (H3), card titles, nav section headers.
- **Body** (weight 400, 1rem, line-height 1.7): Marketing page prose and all documentation body text. Max line length 65–75ch. `text-wrap: pretty` on long-form blocks to reduce orphans.
- **Label** (weight 400, 0.875rem, line-height 1.5): Supporting annotations, stat labels, captions, sidebar nav items, badge text.
- **Mono** (Fira Code, weight 400, 0.9rem): All code contexts — inline `<code>`, `<pre>`, API parameter names, version strings.

### Named Rules
**The Chinese-First Rule.** Font sizing, line-height, and weight decisions are calibrated for Simplified Chinese glyphs, then verified for Latin fallback. No typeface chosen for Latin appeal and treating Chinese as an afterthought.

**The Weight-Contrast Rule.** Hierarchy is expressed through weight jumps of ≥100 between adjacent levels. A 700→600 step (Headline → Title) is the minimum acceptable drop. 800→700→600→400 for the full marketing stack.

## 4. Elevation

This system is **flat by default**, identical to fzs-slides. Depth is conveyed through:

1. **Background tinting**: Surface (`oklch(99.2% 0.003 50)`) reads as elevated against Ground (`oklch(97.5% 0.005 50)`) through a ~2.5L lightness difference — subtle but effective.
2. **Type scale contrast**: Large display text draws the eye before smaller body text.
3. **Divider lines**: 1px borders in Divider color (`oklch(91% 0.007 50)`) for cards, table cells, sidebar separators.
4. **Dark mode inversion**: Dark Surface (`oklch(19% 0.012 30)`) reads as elevated against Dark Ground (`oklch(14% 0.010 30)`).

**Shadows are prohibited except for product screenshots.** Documentation screenshots embedded in articles may carry a light ambient shadow (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`) to distinguish them from the page surface. This is functional, not decorative. Buttons and cards must not use wide shadows (blur ≥ 16px).

### Shadow Vocabulary
- **Screenshot ambient** (`box-shadow: 0 4px 12px rgba(0,0,0,0.08)`): Product screenshots in documentation articles only.
- **Hover lift on interactive cards** (`box-shadow: 0 2px 8px rgba(0,0,0,0.06)`): Cards that are links (nav cards, etc.) may use a tight 8px-max shadow on hover only — not at rest.

### Named Rules
**The Flat-By-Default Rule.** All surfaces are flat at rest. Shadows appear only on product screenshots (functional distinction) and as hover state on link-cards (affordance). Any resting shadow on a card or button is a design error.

**The Ghost-Card Ban.** `border: 1px solid X` and `box-shadow` with blur ≥ 16px on the same element is prohibited. Pick one: a single solid border at Brand Crimson or Divider, OR a defined shadow at max 8px blur. Never both.

## 5. Components

### Navigation
- **Character:** Clean, flat, identity-bearing. The brand mark and active link state are the only uses of Brand Crimson in the navbar.
- **Background:** Surface (`#fcfbf9` light / dark surface in dark mode). Thin 1px Divider border-bottom.
- **Logo:** 九桥同步 brand.png, 28px height. Inverted to white in dark mode via `filter: brightness(0) invert(1)`.
- **Active link:** Brand Crimson text. No background pill, no underline, color alone signals active state.
- **Hover link:** Brand Crimson at reduced opacity (or Brand Crimson with `opacity: 0.8`).

### Buttons
- **Shape:** 6px radius (`{rounded.sm}`). Not pill, not square. Small functional radius only.
- **Primary:** Background `{colors.brand}`, text `{colors.surface}`, padding 12px 32px. Hover: `{colors.brand-deep}`, `translateY(-1px)`. Active: `translateY(0)`. No wide drop shadow.
- **Secondary:** Transparent background, `{colors.ink}` text, 2px solid `{colors.divider}` border. Hover: border-color shifts to `{colors.brand}`, text shifts to `{colors.brand}`.
- **Focus ring:** `outline: 2px solid {colors.brand}`, `outline-offset: 3px`. Always visible on `:focus-visible`.

### Cards
- **Shape:** 8px radius (`{rounded.md}`). Maximum. No 12px+, no pill-shaped cards.
- **Rest state:** Background `{colors.surface}`, 1px solid `{colors.divider}` border. No resting shadow.
- **Hover state (link cards only):** `translateY(-2px)`, shadow max 8px blur.
- **Padding:** `{spacing.xl}` (40px) on desktop, `{spacing.lg}` (24px) on mobile.
- **No nested cards.** A card inside a card is always wrong.

### Data Tables (Documentation)
- **Header row:** Background `{colors.brand}`, text `{colors.surface}`, Fira Code or PingFang SC Semibold, 12px padding. Consistent with fzs-slides table headers.
- **Body rows:** `{colors.surface}` background, 1px `{colors.divider}` border-bottom on each row.
- **Hover row:** `{colors.brand-pale}` background tint.
- **No `border-left` accent stripes on any row or cell.** Border treatment is full (all sides or none).

### Admonitions (Doc Callouts)
- **No `border-left: 5px solid` accent stripe.** Replace with: a light background tint in the relevant status color family, full border (1px all sides) in a darker tint of that color, or a leading icon. The side-stripe is banned.
- **Note:** `{colors.s-blue}` at 10% opacity background, 1px solid at 30% opacity.
- **Warning:** `{colors.s-amber}` at 10% opacity background, 1px solid at 30% opacity.
- **Danger:** `{colors.s-red}` at 10% opacity background, 1px solid at 30% opacity.
- **Tip:** `{colors.s-green}` at 10% opacity background, 1px solid at 30% opacity.

### Statistics / Metrics Display
- **No hero-metric template** (big number + small label + gradient accent). If showing stats (30+ databases, 10+ years, etc.), use a text-level row or inline callout integrated into prose — not a standalone stats bar with isolated big numbers.

### Code Blocks
- Background: `{colors.surface}` light / Dark Surface in dark mode. 1px `{colors.divider}` border.
- Font: `{typography.mono}` — Fira Code at 0.9rem.
- Inline code: same font, `{colors.brand-pale}` background tint, 4px radius (`{rounded.xs}`).

## 6. Do's and Don'ts

### Do:
- **Do** use Brand Crimson in structural roles: navbar active link, hero section heading accent, primary buttons, doc table header rows, and CTA band backgrounds. Its presence is earned and structural.
- **Do** use the warm near-white Ground (`oklch(97.5% 0.005 50)`) as the page background on marketing pages. The slight warmth matches the logo's hue family and distinguishes the site from generic "white" enterprise pages.
- **Do** match fzs-slides: table headers in Brand Crimson, status colors (green/amber/red) for functional indicators only, no decorative gradients. A user who has seen the slides should recognize the same brand instantly on the site.
- **Do** verify contrast at every step. Body text (Ink on Ground) must clear 4.5:1. Brand Crimson on Ground: check and compensate — deep crimson on warm near-white needs verification. The dark-mode brand (`oklch(67% 0.14 25)`) on dark ground must also clear 4.5:1.
- **Do** keep all borders 1px. Table cells, card outlines, admonition boxes: 1px in Divider color.
- **Do** use Fira Code for all code contexts — same as fzs-slides. Consistency across both surfaces.
- **Do** keep marketing page headings at `text-wrap: balance` and body text at `text-wrap: pretty`.

### Don't:
- **Don't** use sky blue (`#0284c7` or any Docusaurus Sky palette value) as a brand color. It is Docusaurus' default, not 九桥同步's identity. Replace with Brand Crimson in interactive/structural roles.
- **Don't** use `background-clip: text` with a gradient on headings. The hero accent text is currently banned. Use a solid Brand Crimson for emphasis instead.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on any card, alert, admonition, or list item. The current custom.css admonition style (`border-left: 5px solid`) is explicitly banned. Rewrite with tinted backgrounds and full borders.
- **Don't** use wide drop shadows (blur ≥ 16px) on buttons or cards at rest. The ghost-card pattern (1px border + wide shadow) is banned.
- **Don't** use `border-radius` greater than 12px on cards. The system tops out at 8px (`{rounded.md}`) for cards. Pill shapes are reserved for tags and badges only.
- **Don't** use SaaS startup aesthetics: no pastel-tinted panel sections (soft blue background sections), no hero-metric stat grids, no identical icon-heading-text card grids repeated section after section.
- **Don't** use pure `#ffffff` or `#000000`. Every neutral is warm-tinted toward the brand hue. Ground is `oklch(97.5% 0.005 50)`, not `#fff`. Ink is `oklch(18% 0.012 30)`, not `#000`.
