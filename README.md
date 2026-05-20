# Sheel Advisory Services

Professional owner representative services for BC's public sector - providing project and risk management expertise to municipalities, regional districts, school districts, and non-profits.

## Copyright & License

© 2026 Sheel Advisory Services. All rights reserved.

This repository contains proprietary code for the Sheel Advisory Services website. The code is made publicly available for transparency and portfolio purposes only. Viewing and reviewing the code is permitted, but **copying, modification, distribution, or commercial use is strictly prohibited** without explicit written permission from Sheel Advisory Services.

For inquiries regarding code use or licensing, please contact us through [sheeladvisory.ca](https://sheeladvisory.ca).

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Bootstrap Icons, Heroicons
- **Forms:** EmailJS
- **Deployment:** Vercel

## Project Structure
```
sheel-advisory/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── municipalities/          # Client detail pages
│   ├── regional-districts/
│   ├── school-districts/
│   └── non-profits/
├── components/                   # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── TargetClients.tsx
│   ├── About.tsx
│   ├── Props.tsx                # Podcast & Props section
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── BackToTop.tsx
├── public/                       # Static assets
└── .env.local                   # Environment variables (not in git)
```

## Environment Variables

Create a `.env.local` file with:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Development
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deployed on Vercel with automatic deployments from the main branch.

Environment variables are configured in Vercel dashboard.

## Features

- Dark/light theme toggle with localStorage persistence
- Responsive design (mobile-first)
- EmailJS contact form integration
- Individual client detail pages
- Professional certifications with external links
- Podcast & recognition section
- Back-to-top button
- LinkedIn integration