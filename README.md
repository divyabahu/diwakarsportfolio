# Divya Bahu Diwakar — Cloud Portfolio

A React + Vite portfolio built around a cloud-console visual language: live "infra status" panel,
an animated AWS ↔ Azure architecture map, and content pulled from your resume (experience, stack,
certifications, education).

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to any static host — S3 + CloudFront,
Azure Static Web Apps, Vercel, or Netlify all work with zero config.

## Customize

All resume content lives in one place: `src/data.js`. Edit `profile`, `experience`,
`projects`, `certifications`, `education`, `skillGroups`, and `services` there —
the components render whatever is in that file, so you never need to touch JSX to
update text.

Visual tokens (colors, fonts, spacing) are defined once in `src/index.css` under `:root`.

## Structure

```
src/
  data.js              ← all resume content
  App.jsx              ← page assembly
  index.css            ← design tokens + base styles
  components/
    Navbar.jsx
    Hero.jsx           ← headline + live infra-status console
    ArchitectureMap.jsx← animated AWS/Azure topology (signature element)
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Certifications.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
```

## Suggested next steps

- Swap the placeholder LinkedIn/email links for final versions if they change.
- Add a resume PDF download link in `Contact.jsx` once hosted.
- If you want a project-specific case study page later (e.g. AWS WAR Tool or Sprintel.ai
  internal builds), add a route with `react-router-dom` — the current build is a single page.
