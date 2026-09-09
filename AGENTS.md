# AGENTS.md — Router

Speculative redesign of Orange County Interlocking Paving Co. (theocip.com).

## Canonical docs
- [README.md](README.md) — disclosure, setup
- [docs/RESEARCH.md](docs/RESEARCH.md) — facts, conflicts, agency check
- [docs/ASSET-INVENTORY.md](docs/ASSET-INVENTORY.md) — acquired files
- [docs/ASSET-PLAN.md](docs/ASSET-PLAN.md) — section mapping
- [docs/QA.md](docs/QA.md) — responsive QA notes
- [CHANGELOG.md](CHANGELOG.md) — decisions
- `/outreach` — operator brief + captures

## Architecture
- Next.js App Router + TypeScript + Tailwind
- Routes: `/` customer homepage, `/outreach` operator-only (`robots` disallow)
- First-party images in `public/images/` (local) and Wayback first-party uploads on the deployed homepage
- Capture set in `public/outreach/`

## Fact rules
Current first-party > official/regulatory > reputable third-party > omit.
Do not invent review totals, ROI, or CSLB status not loaded in-session.
