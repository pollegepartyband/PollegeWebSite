# How to Add the Pollege Logo

## ⚠️ CRITICAL: This step is REQUIRED before the website will work properly

The website is configured to use a logo file, but the actual image file needs to be added manually because it's a binary file that cannot be created through code.

## What You Need

The **transparent PNG version** of the Pollege logo that was provided (the one with the chicken character playing guitar with colorful "POLLEGE" text and orange/yellow flames).

## Where to Place It

```
/public/logo.png
```

## Step-by-Step Instructions

### Method 1: Using File Explorer/Finder

1. **Locate your project folder** on your computer
2. **Open the `/public/` folder**
3. **Copy or save** the Pollege logo PNG file into this folder
4. **Rename it** to exactly: `logo.png` (all lowercase)

### Method 2: Using Command Line

If you have the logo file saved somewhere:

```bash
# Navigate to your project directory
cd /path/to/your/pollege-website

# Copy the logo file to public folder and rename it
cp /path/to/your/logo-file.png public/logo.png
```

### Method 3: Using VS Code (or any code editor)

1. **Open the project** in VS Code
2. **Locate the `/public/` folder** in the sidebar
3. **Drag and drop** the logo PNG file into the `/public/` folder
4. **Right-click** the file and **Rename** it to `logo.png`

## Verify It's Correct

After adding the logo, your `/public/` folder should look like this:

```
/public/
  ├── logo.png  ← Your logo file
  └── PLACE_LOGO_HERE.txt
```

## File Requirements

- **Format**: PNG (Portable Network Graphics)
- **Transparency**: Yes (transparent background)
- **Filename**: Exactly `logo.png` (lowercase)
- **Recommended size**: At least 1000px wide for best quality
- **Color**: Full color (the orange, yellow, and cyan from the logo will be visible)

## What Happens If You Don't Add It?

If you don't add the logo file:
- ❌ The navigation bar will have a broken image
- ❌ The hero section will have a broken image
- ❌ The footer will have a broken image
- ❌ The website will look incomplete

## What Happens After You Add It?

Once you add the logo file correctly:
- ✅ The logo will appear in the navigation bar (48px height)
- ✅ The logo will appear large in the hero section with glowing effects (700px on desktop)
- ✅ The logo will appear in the footer (64px height)
- ✅ The logo will have an orange glow effect matching the website theme
- ✅ The website will look complete and professional

## Testing

After adding the logo, test it:

```bash
npm run dev
```

Then open your browser and check:
1. **Navigation bar** - Logo should appear top-left
2. **Hero section** - Large logo should be centered with glow effect
3. **Footer** - Logo should appear with contact info

## Need Help?

If you don't have the transparent logo file:
1. Check the original files/assets provided
2. Use an image editor to remove the background from the logo
3. Save it as PNG format with transparency
4. Make sure it's high resolution (at least 1000px wide)

---

Once you've added the logo, you're ready to build and deploy! See DEPLOYMENT_GUIDE.md for next steps.
