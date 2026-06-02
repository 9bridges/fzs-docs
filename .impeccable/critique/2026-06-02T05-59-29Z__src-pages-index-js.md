---
target: src/pages/index.js
total_score: 33
p0_count: 0
p1_count: 1
timestamp: 2026-06-02T05-59-29Z
slug: src-pages-index-js
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 4 | Static marketing page; no async states |
| 2 | Match System / Real World | 4 | Accurate technical language for the audience |
| 3 | User Control and Freedom | 3 | Clear CTAs; no forced flows |
| 4 | Consistency and Standards | 3 | Token-consistent throughout; #fff hard-coded once in CTA |
| 5 | Error Prevention | 4 | No form on homepage; n/a |
| 6 | Recognition Rather Than Recall | 3 | Section labels are clear; nav links rely on title alone |
| 7 | Flexibility and Efficiency | 3 | Two primary CTAs; power users have nothing extra |
| 8 | Aesthetic and Minimalist Design | 3 | Clean. Credentials line punches below weight |
| 9 | Error Recovery | 4 | n/a — static page |
| 10 | Help and Documentation | 2 | No inline context for non-expert visitors |
| **Total** | | **33/40** | **Good** |

## Audit Health Score

| # | Dimension | Score | Key Finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 3 | .credentials at 0.875rem may fail 4.5:1 in dark mode |
| 2 | Performance | 4 | content-visibility: auto on all sections; lean bundle |
| 3 | Responsive Design | 3 | Breakpoints solid; minor tightness on narrow viewports |
| 4 | Theming | 3 | Near-complete token use; #fff literal and dead sectionSubtitle class |
| 5 | Anti-Patterns | 3 | One advisory (numbered markers); credentials placement buries KPIs |
| **Total** | | **16/20** | **Good** |

## Anti-Patterns Verdict

Does this look AI-generated? Largely no, but two tells remain.

The layout has genuine structural variation — a row list (Capabilities), a table grid (Sectors), an arrow-link list (NextSteps). Hero is controlled: no glass, no gradient text, no exploding clamp sizes. Brand crimson is committed. Two tells: (1) 01/02/03 markers in Capabilities — ordered section scaffolding, not meaningful sequence; (2) credentials line reads as metadata not evidence — the page's strongest proof points are buried at 0.875rem gray.

Detector: one finding, advisory — numbered-section-markers in src/pages/index.js. Valid. The "10" in the snippet (Sequence: 01, 02, 03, 10) is a false positive from credentials text "10+ 年行业经验".

## Overall Impression

Structural bones are right — three distinct section treatments, clean hierarchy, no glass, no gradient slop. Single biggest missed opportunity: the credentials proof bar. The most persuasive content was demoted from a hero-weight visual to a caption. Restore with brand crimson.

## What's Working

1. Section type variety — Capabilities as row list, Sectors as table grid, NextSteps as arrow-link list. Three genuinely different structural approaches. Correct solution to the identical-card-grid ban.

2. Capabilities copy — specific numbers (30+, RTO < 30s, RPO ~ 0), specific product names (达梦 DM8, 金仓 KingbaseES, OceanBase), specific hardware contexts (龙芯, 鲲鹏). Anti-buzzword standard the rest of the site should match.

3. Performance posture — content-visibility: auto on all below-fold sections, contain-intrinsic-size defined, no layout-property animations, prefers-reduced-motion handled correctly.

## Priority Issues

**[P1] Credentials KPIs buried under the fold of attention**
The stats 30+, 10+, 亚秒级, 7×24 are the homepage's strongest proof points. At 0.875rem in emphasis-600 gray, below the CTA row, they vanish. The original design's dedicated metrics row was architecturally correct; only the sky-blue color was wrong.
Fix: Restore a slim horizontal metrics row between the CTAs and hero bottom. Drop gradient accent (the actual ban trigger). Use crimson for numbers, muted ink for labels. Numbers at clamp(1.6rem, 3vw, 2rem), bold, solid crimson — not gradient text.
Suggested command: $impeccable shape hero-stats-bar

**[P2] Numbered section markers (01/02/03) in Capabilities**
The three capabilities are not a meaningful sequence. The numbers add cognitive work without informational value. Flagged by the detector.
Fix: Remove capabilityNum span and 3rem column. Use typography contrast (title weight vs. desc weight) for hierarchy. A 1px top-rule above each title (2.5rem wide, brand crimson) is a clean alternative.
Suggested command: $impeccable typeset src/pages/index.js

**[P2] NextSteps icons unused — navigation scan cost**
NAVIGATIONS data has icon fields (rocket emoji etc.) not rendered. Four identical-looking links require full text scan before selection.
Fix: Render icon at 16px desaturated, or add 2-3 char category tags (产品, 文档, 案例, 联系) as small monochrome tags.
Suggested command: $impeccable delight src/pages/index.js

**[P2] .credentials dark-mode contrast risk**
emphasis-600 on dark background at 0.875rem may fail WCAG AA 4.5:1.
Fix: Override to emphasis-700 in dark mode. Moot if P1 stats bar is restored.
Suggested command: $impeccable audit src/pages/index.module.css

**[P3] #fff hard-coded in .ctaPrimary**
One literal in otherwise fully tokenized file.
Fix: Replace with Docusaurus white token.
Suggested command: $impeccable polish

## Persona Red Flags

Financial institution IT director: KPI evidence (30+ databases, <500ms) below CTA row in gray caption text — skipped on first scan. Most critical credibility evidence missed.

Technical evaluator (DBA): Keyboard nav clean. Tab order logical. Sector divs non-interactive (correct). NextLinks are anchors with focus rings. No traps.

## Minor Observations

- sectionSubtitle defined in CSS, used nowhere. Remove.
- NAVIGATIONS retains unused icon field. Remove or render.
- text-wrap: balance missing on sectionTitle and heroTitle.
- Two parallel animation systems (CSS animation on hero, useReveal hook below). Document or consolidate.
- capabilityDesc at 0.95rem/1.7 and sectorDesc at 0.9rem/1.65 are consistent enough.
