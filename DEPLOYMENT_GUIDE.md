# Pollege Website - Deployment Guide for GitHub Pages

## Prerequisites

1. **Node.js** installed (version 18+)
2. **Git** installed
3. **GitHub repository** created for the project
4. **Logo file** placed in `/public/logo.png`

## Step 1: Add the Logo

**CRITICAL**: Before building, add your logo:

```
/public/logo.png
```

The logo must be:
- Transparent PNG format
- Named exactly `logo.png` (lowercase)
- The Pollege logo with the chicken character

## Step 2: Install Dependencies

```bash
npm install
```

Wait for all packages to install. This may take a few minutes.

## Step 3: Test Locally (Optional but Recommended)

```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`)

Verify:
- ✓ Logo displays correctly
- ✓ Language switcher works (IT/EN)
- ✓ All sections load properly
- ✓ Drag & drop setlist works
- ✓ Forms and buttons function correctly

Press `Ctrl+C` to stop the dev server.

## Step 4: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/dist` folder.

## Step 5: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

2. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   
3. Push your code:
```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

4. Wait for the GitHub Action to complete
5. Your site will be live at: `https://[your-username].github.io/[repo-name]`

### Option B: Manual Deployment

1. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Add base path to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/[your-repo-name]/',
  // ... rest of config
});
```

4. Deploy:
```bash
npm run deploy
```

5. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **Deploy from a branch**
     - Branch: **gh-pages** / (root)

6. Your site will be live at: `https://[your-username].github.io/[repo-name]`

## Step 6: Configure Custom Domain (Optional)

If you have a custom domain:

1. In your GitHub repository:
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   
2. Add a `CNAME` file in `/public/`:
```
yourdomain.com
```

3. Configure your domain's DNS:
   - Add an A record pointing to GitHub's IPs
   - Or add a CNAME record pointing to `[your-username].github.io`

## Troubleshooting

### Logo not showing
- Make sure `/public/logo.png` exists
- Check the filename is lowercase: `logo.png`
- Verify it's a PNG file

### Build fails
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Check Node.js version (needs 18+)

### 404 errors on GitHub Pages
- Make sure `base` is set correctly in `vite.config.ts`
- Verify the repository name matches the base path
- Wait a few minutes for GitHub Pages to update

### Styles not loading
- Clear your browser cache
- Check browser console for errors
- Verify all CSS files are in the build output

## Performance Tips

The website is already optimized with:
- ✓ Image lazy loading
- ✓ Code splitting
- ✓ Minified assets
- ✓ Optimized fonts
- ✓ Compressed images

For even better performance:
- Use a CDN (GitHub Pages already does this)
- Enable browser caching
- Consider using WebP images

## Support

For issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Make sure the logo file is in place
4. Test locally before deploying

---

🎸 Rock on! Your Pollege website is ready to go live!
