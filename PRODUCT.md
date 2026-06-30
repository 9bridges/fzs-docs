# Product

## Register

brand

## Users

Two distinct audiences land on the same pages:

- **IT directors and CTOs** at financial enterprises (securities, futures, fund management) and healthcare systems in China. They are evaluating vendors for critical infrastructure. They need confidence signals: years of experience, industry-specific client outcomes, compliance posture.
- **DBAs and system architects** doing technical due diligence. They need specifics: which databases are supported, what deployment topology fits their security constraints, what the actual sync latency looks like under production load.

Both must be served without one audience's needs burying the other's.

## Product Purpose

FZS is a real-time enterprise database synchronization platform developed by 北京九桥同步软件有限公司. It captures and replays database redo logs to deliver full + incremental heterogeneous sync across 30+ databases — Oracle, MySQL, SQL Server, PostgreSQL, and domestic systems including 达梦, 金仓, OceanBase — as well as domestic hardware platforms (龙芯, 飞腾, 鲲鹏, 海光, 兆芯).

Primary use cases:
- **Disaster recovery**: sub-second RPO, one-click source/standby role swap, RTO under 30 seconds in production deployments
- **Cross-system data integration**: multi-source fan-in to risk, analytics, and reporting systems
- **Domestic database migration (信创)**: online, non-disruptive migration with full DDL sync

Sectors served: securities, futures, fund management, healthcare. The company has been in this domain for 10+ years with a track record in critical financial infrastructure.

## Brand Personality

Reliable, professional, cutting-edge.

Voice is calm authority: specific and technical where it matters, never promotional. The brand earns trust through concrete evidence, not claims about trustworthiness. Tone does not shout; it demonstrates.

Emotional goals for a visitor after 30 seconds: confident (this company clearly understands enterprise data infrastructure), relieved (they know our compliance and risk context), reassured (10-year track record, real client outcomes).

## Anti-references

- **dsgdata.com** — cluttered layouts, low-information-density banner sliders, competing visual elements with no clear hierarchy, dated "enterprise software" visual language. The site reads as complex; FZS should read as precise.
- **info2soft.cn** — dense product-catalog landing page that buries differentiation under metric counters, carousel sections, and a sprawling product taxonomy. The "SaaS enterprise" reflex: blue accents, buzzword-heavy hero, competing CTA bands. FZS avoids this by leading with specific technical outcomes, not a feature catalog.
- Generic "enterprise data" websites that lead with large abstract diagrams and buzzword stacks rather than specific technical outcomes.

## Design Principles

1. **Specificity earns trust.** Every performance or compatibility claim should be backed by a concrete number or named system. "500ms sync latency" over "ultra-fast". "达梦、金仓、OceanBase" over "国产数据库". The target audience is technical; vague superlatives register as noise.

2. **Dual-audience structure.** The executive sees credibility (years, sectors, client outcomes); the engineer sees depth (database matrix, deployment topology, API coverage). Neither set of signals should be buried. Structure pages so both audiences find what they need without scrolling past irrelevant content.

3. **Let the track record speak.** 10+ years in critical financial infrastructure, securities disaster recovery with sub-second RPO, healthcare HIS sync across hospital groups. Name these outcomes explicitly rather than explaining how experienced the company is.

4. **Infrastructure-grade restraint.** FZS handles data for core trading systems and patient records. The interface should feel like it: clean, precise, deliberately paced. No visual excess. Fivetran-caliber polish — not a startup landing page, not a legacy enterprise portal.

5. **信创 with specifics.** Domestic database and hardware support is a genuine, named differentiator in the target market. Always list the specific systems: 达梦、金仓、OceanBase; 龙芯、飞腾、鲲鹏、海光、兆芯. "信创兼容" without names is the generic move; the named list is the proof.

## Accessibility & Inclusion

WCAG AA compliance. Reduced motion must be supported — all scroll-reveal and transition animations require `@media (prefers-reduced-motion: reduce)` alternatives. Color contrast at 4.5:1 minimum for body text, 3:1 for large text. The site is Chinese (zh-Hans); CJK line-breaking rules apply throughout.
