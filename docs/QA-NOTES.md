# QA notes

Date: 2026-09-13. Local production server `next start` on port 4173.

## Desktop ~1440×900
- Header: logo, Work/Services/Process/Reviews/Estimate, phone, estimate CTA
- Hero: Laguna twilight job photo, headline, both CTAs, working `tel:` link
- Proof strip: CSLB #1071389, Orange CA, Free estimate, phone
- Service cards, work grid, difference, process, capabilities, reviews, service area, estimate form, footer all render
- No overflow; images load via `next/image`
- Console: favicon 404 only (fixed with `app/icon.png` after this pass)

## Mobile ~390×844
- Hamburger opens Work/Services/Process/Reviews/Estimate + phone
- Hero copy and CTAs wrap; tap targets ≥44px
- Cards stack; form usable; footer contact/license present

## Intermediate
- `md` breakpoint shows desktop nav; work grid 4-col at 1440

## /outreach
- Unlinked, `robots` disallow, layout `noindex`
- Previews five capture files after they land in `public/outreach/`

## Factual integrity
- Phone/email first-party; license CSLB; reviews attributed; no catalog/CRMLS as jobs
