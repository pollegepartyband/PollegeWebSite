# Pollege Rock Band Website

High-energy rock party band website featuring:
- Bilingual support (Italian/English)
- Interactive drag & drop setlist builder
- Band member showcase
- Music & video links
- Gigs/Events calendar
- Contact & booking forms

## Setup Instructions

### Logo Setup
**IMPORTANT**: The logo file needs to be manually added to the project.

1. Save the Pollege logo (transparent PNG) to `/public/logo.png`
2. The logo should be the transparent version with the chicken character

### Development
```bash
npm install
npm run dev
```

### Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The build output will be in the `dist` folder

3. Deploy the `dist` folder to GitHub Pages

### Configuration

- All colors use an orange/amber palette (#f97316) that matches the logo
- The site defaults to Italian language
- Language can be switched using the button in the navigation

### Features

- **Hero Section**: Large logo with glowing effects and stage lighting animations
- **Band Members**: 5 members with hover effects (Andrea Calabrese first as vocalist)
- **Music & Videos**: Video links (not embedded) + Spotify playlist
- **Setlist Builder**: Drag & drop interface with custom song addition feature
- **Gigs & Events**: Upcoming shows + past gigs carousel
- **Contact**: Booking form and social media links

### Tech Stack

- React + TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- React DND (drag & drop)
- React Slick (carousel)
- Sonner (toast notifications)

---

© 2026 Pollege. All rights reserved.
