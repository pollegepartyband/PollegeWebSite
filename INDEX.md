# Pollege Website - Documentation Index

Welcome to the Pollege rock band website! This index will guide you through all the documentation files.

## 🚀 Quick Start

**FIRST TIME SETUP:**
1. Read → [`HOW_TO_ADD_LOGO.md`](/HOW_TO_ADD_LOGO.md) ⚠️ **START HERE**
2. Read → [`README.md`](/README.md)
3. Run → `npm install`
4. Run → `npm run dev`
5. Deploy → Follow [`DEPLOYMENT_GUIDE.md`](/DEPLOYMENT_GUIDE.md)

## 📚 Documentation Files

### Essential (Read These First)

1. **[HOW_TO_ADD_LOGO.md](/HOW_TO_ADD_LOGO.md)** ⭐ **MOST IMPORTANT**
   - Step-by-step instructions to add the logo file
   - This is REQUIRED before the site will work
   - Explains where to place `/public/logo.png`

2. **[README.md](/README.md)**
   - Project overview
   - Features list
   - Tech stack
   - Basic setup instructions

3. **[DEPLOYMENT_GUIDE.md](/DEPLOYMENT_GUIDE.md)**
   - Complete deployment instructions for GitHub Pages
   - GitHub Actions workflow
   - Manual deployment option
   - Custom domain setup
   - Troubleshooting tips

### Reference Documentation

4. **[CHANGES_SUMMARY.md](/CHANGES_SUMMARY.md)**
   - Complete list of all modifications made
   - Before/after comparisons
   - Color scheme changes
   - Feature enhancements
   - Files created/modified

5. **[LOGO_SETUP.txt](/LOGO_SETUP.txt)**
   - Quick reference for logo setup
   - Simple text file with essential info

6. **[/public/PLACE_LOGO_HERE.txt](/public/PLACE_LOGO_HERE.txt)**
   - Reminder file in the public folder
   - Marks where the logo should go

## 🎯 Common Tasks

### I want to...

#### ...get started
→ Read [`HOW_TO_ADD_LOGO.md`](/HOW_TO_ADD_LOGO.md) then [`README.md`](/README.md)

#### ...add the logo
→ Read [`HOW_TO_ADD_LOGO.md`](/HOW_TO_ADD_LOGO.md)

#### ...deploy to GitHub Pages
→ Read [`DEPLOYMENT_GUIDE.md`](/DEPLOYMENT_GUIDE.md)

#### ...see what was changed
→ Read [`CHANGES_SUMMARY.md`](/CHANGES_SUMMARY.md)

#### ...understand the project
→ Read [`README.md`](/README.md)

## ✅ Checklist

Before you deploy, make sure you've:

- [ ] Added `/public/logo.png` file
- [ ] Ran `npm install`
- [ ] Tested locally with `npm run dev`
- [ ] Verified logo displays correctly
- [ ] Tested language switcher (IT/EN)
- [ ] Tested setlist builder drag & drop
- [ ] Built the project with `npm run build`
- [ ] Followed deployment guide

## 🎨 Key Features

- ✅ **Bilingual** (Italian/English) with language switcher
- ✅ **Orange/Amber color scheme** matching the logo
- ✅ **Interactive setlist builder** with drag & drop + custom songs
- ✅ **Video links** instead of embedded videos (less dispersive)
- ✅ **Optimized logo display** with glow effects
- ✅ **Band members showcase** (Andrea first)
- ✅ **GitHub Pages ready** (no Figma dependencies)

## 📱 Support

### Having Issues?

**Logo not showing:**
- Did you add `/public/logo.png`?
- Is it named exactly `logo.png` (lowercase)?
- Is it a PNG file with transparency?
→ See [`HOW_TO_ADD_LOGO.md`](/HOW_TO_ADD_LOGO.md)

**Build failing:**
- Did you run `npm install`?
- Do you have Node.js 18+ installed?
- Try deleting `node_modules` and running `npm install` again

**Deployment issues:**
- Check the troubleshooting section in [`DEPLOYMENT_GUIDE.md`](/DEPLOYMENT_GUIDE.md)
- Verify GitHub Pages settings
- Wait a few minutes for changes to propagate

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **React DND** for drag & drop
- **React Slick** for carousels
- **Vite** for building
- **Sonner** for notifications

## 📄 Project Structure

```
/
├── public/
│   ├── logo.png                    ← ADD YOUR LOGO HERE
│   └── PLACE_LOGO_HERE.txt
├── src/
│   ├── app/
│   │   ├── components/             ← All React components
│   │   ├── contexts/               ← Language context
│   │   └── App.tsx                 ← Main app
│   └── styles/                     ← CSS files
├── HOW_TO_ADD_LOGO.md              ← START HERE
├── README.md
├── DEPLOYMENT_GUIDE.md
├── CHANGES_SUMMARY.md
├── INDEX.md                        ← You are here
└── package.json
```

## 🎸 Ready to Rock!

Once you've added the logo and tested locally, you're ready to deploy and share your website with the world!

**Next Steps:**
1. Add logo → [`HOW_TO_ADD_LOGO.md`](/HOW_TO_ADD_LOGO.md)
2. Test locally → `npm run dev`
3. Deploy → [`DEPLOYMENT_GUIDE.md`](/DEPLOYMENT_GUIDE.md)

---

© 2026 Pollege. All rights reserved.

**Questions?** Check the relevant documentation file above or review the troubleshooting sections.
