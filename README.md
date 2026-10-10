# Rajat Mishra — Next.js Portfolio

A modern, editorial-style developer portfolio built with Next.js, React, TypeScript and Tailwind CSS.

## Highlights

- Responsive desktop/tablet/mobile layout
- Premium cream / charcoal / terracotta visual system
- Hero section with image and CTA
- About, services, projects, skills, experience and contact sections
- Interactive project slider
- Mobile navigation
- SEO metadata
- Accessible buttons and links
- Clean TypeScript setup
- Easy-to-customize content

## Run locally

Requirements:
- Node.js 18.18+ recommended
- npm

Install:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Customize

Main portfolio content:
`components/Portfolio.tsx`

Global design:
`app/globals.css`

SEO:
`app/layout.tsx`

Project images are currently loaded from Unsplash. For a production deployment, you can replace them with your own images in `public/`.

## Suggested next improvements

1. Add your professional profile photo.
2. Add a downloadable `/public/Rajat-Mishra-Resume.pdf`.
3. Add your LinkedIn URL.
4. Add a real contact form using your preferred email/API provider.
5. Add project-specific detail pages if the portfolio grows.
