# Nutriora Website

A modern, responsive landing page for Nutriora built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI with smooth animations
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React
- 🎭 Framer Motion animations
- 🌈 Tailwind CSS for styling
- ♿ Accessible and SEO-friendly

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features section
│   ├── About.tsx        # About section
│   ├── Testimonials.tsx # Testimonials section
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Customization

The content from the Google Doc can be easily updated in the respective component files:
- Update hero section in `components/Hero.tsx`
- Modify features in `components/Features.tsx`
- Adjust about section in `components/About.tsx`
- Update testimonials in `components/Testimonials.tsx`

## Build for Production

```bash
npm run build
npm run start
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
