# Vignesh — a founder’s field notes

An actual Next.js App Router portfolio, not a static mockup. Editorial typography, original SVG architectural art, and the supplied founder story. No generated portrait, fabricated clients, testimonials, certifications, or completed case studies.

## Run

```bash
npm install
cp .env.example .env.local
npm run dev -- --hostname 0.0.0.0
```

Production: `npm run build && npm run start -- --hostname 0.0.0.0`.

## Main files

- `src/config/portfolio.ts`: editable founder information, biography, milestones, all eight capabilities, metrics, company text, vision, project schema, links and SEO.
- `src/app/page.tsx`: server-rendered single-page editorial composition and all ten sections.
- `src/app/globals.css`: design tokens, editorial compositions, mobile/tablet layouts, focus and reduced-motion rules.
- `src/components/editorial/`: original vector artwork, navigation, animation boundaries, validated contact form.
- `src/components/ui/`: installed and adapted Aceternity TextHoverEffect, FlipWords and Timeline. All three registry examples were installed and inspected. Timeline example is adapted to the real career data.
- `src/app/api/contact/route.ts`: server validation, honeypot, origin check, request size limit, delivery webhook and accurate failure states.
- `src/app/{layout,robots,sitemap,opengraph-image}.tsx` / `.ts`: metadata, verified structured data, crawler files and generated share image.
- `tests/portfolio.spec.ts`: browser and API checks.

## Configuration still needed

Set the public origin, real company website, LinkedIn profile and contact email in `.env.local` (see `.env.example`). Public environment values require a rebuild. Canonical and sitemap URLs are intentionally absent until a real origin is supplied. Never use a placeholder domain in production.

### Contact delivery

Set server-only `CONTACT_WEBHOOK_URL` to a trusted HTTPS endpoint that accepts a JSON POST with `name`, `email`, `company`, `category`, `message`. Optional `CONTACT_WEBHOOK_SECRET` is sent as a bearer token. The service must return **2xx only after accepting the enquiry**. No secret reaches the browser. When unconfigured the form returns 503 and explicitly says that nothing was sent. Delivery errors return 502, never a fake success. Configure provider-level rate limits / CAPTCHA for production traffic beyond the included honeypot and origin checks. No enquiry data is persisted locally or logged by this application.

### Publishing projects

`projects` begins empty deliberately. Add real records using the `Project` type and set `confirmed: true` only after review. The UI renders problem, approach, stack and outcome; a case-study URL is optional. The five supplied potential categories are clearly labeled conceptual directions, not completed cases. Add optimized screenshots with Next Image when real assets become available.

### Content integrity

2027 is future vision, never an accomplished program. Metrics are labeled founder-provided; onboarding waitlist is not equated with paying customers. Unconfigured external links appear as disclosure text or a working internal contact CTA, not empty anchors.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
# With production server listening on port 3000:
npx playwright install --with-deps chromium
npx playwright test --workers=1
```

Tested desktop, tablet and phone widths (1440, 768, 390), no horizontal document overflow, mobile menu, anchor navigation, client/server validation, spam trap, missing-service response and browser runtime errors. Production build passes. Fonts use next/font (Inter + Space Grotesk); original inline SVG visuals need no external image requests.

## Supabase contact storage

The contact API now prioritizes Supabase when server-only `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` are configured. It inserts into `public.portfolio_enquiries`
and confirms receipt only after a successful database response. RLS is enabled with
no public policies; anon/authenticated roles have no table privileges. The migration
is tracked in `supabase/migrations/`. Read enquiries using the Supabase dashboard's
Table Editor. This integration stores enquiries; it does not send email notifications.

Cloud setup completed for `vignesh-portfolio` in the connected Supabase organization
and Vercel team. Supabase credentials are stored only in Vercel environment settings,
not in source control. Production traffic should also use provider-level rate limiting
or CAPTCHA. The Git remote and deployment still require the actual repository owner/URL
and authenticated Git access.
