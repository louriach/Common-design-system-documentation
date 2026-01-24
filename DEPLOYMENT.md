# Deployment Guide

## 🚀 Setting Up GitHub Pages Deployment

Your Design System Knowledge Base is ready to deploy! Here's how to set it up:

### Step 1: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Build and deployment":
   - Set Source to: **GitHub Actions**
   - Leave Branch as default

### Step 2: Configure Repository Settings

1. Go to Settings → General
2. Under "Code and automation":
   - Ensure "GitHub Pages" is enabled
   - Note your Pages URL (usually `https://username.github.io/repo-name`)

### Step 3: BasePath Configuration (Automatic)

The GitHub Actions workflow automatically sets the `basePath` based on your repository name. No manual configuration needed!

The workflow sets:
```yaml
NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
```

This ensures all routes work correctly on GitHub Pages subdirectories (e.g., `https://username.github.io/repo-name/`).

### Step 4: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Design System Knowledge Base"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 5: Wait for Deployment

1. Go to your repository
2. Click "Actions" tab
3. Watch the "Deploy to GitHub Pages" workflow
4. Once complete (green checkmark), your site is live!
5. Visit the Pages URL to see your site

## 📋 Workflow Details

The deployment workflow (`.github/workflows/deploy.yml`):

- **Triggers**: On every push to `main` branch
- **Steps**:
  1. Checks out code
  2. Sets up Node.js
  3. Installs dependencies
  4. Builds the static site (`npm run build`)
  5. Uploads artifacts
  6. Deploys to GitHub Pages

## 🔧 Local Testing Before Deployment

```bash
# Build locally
npm run build

# Test the static build
npx serve out

# Visit http://localhost:3000
```

## 📝 Adding Components After Deployment

1. Create new markdown file in `content/components/`
2. Commit and push to `main`
3. GitHub Actions automatically rebuilds and deploys
4. Your new component is live in minutes!

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain
3. Add CNAME record to your DNS pointing to `username.github.io`
4. GitHub will verify and enable HTTPS

## ✅ Verification Checklist

- [ ] Repository is public
- [ ] GitHub Pages enabled in Settings
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] First push to `main` completes successfully
- [ ] GitHub Actions shows green checkmark
- [ ] Site is accessible at Pages URL
- [ ] Homepage loads with all 8 components
- [ ] Component pages render correctly with markdown
- [ ] Dark mode toggle works
- [ ] Responsive design looks good on mobile

## 🆘 Troubleshooting

### Build Fails

Check the Actions tab for error details. Common issues:
- Missing dependencies: Run `npm install`
- Node version mismatch: Update to Node 20+
- Port binding issues: Clear `.next` cache with `rm -rf .next`

### Site Not Updating After Push

1. Force refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R`)
2. Check Actions tab - workflow may be running
3. Wait 2-3 minutes for deployment to complete

### Styling Issues

- Clear browser cache
- Check `next.config.ts` for correct `basePath`
- Verify Tailwind CSS is building (check `out/` directory)

### 404 on Component Pages

- Ensure markdown files are in `content/components/`
- Check filename matches route (e.g., `button.md` → `/components/button/`)
- Rebuild with `npm run build`

## 📚 Next Steps

1. **Customize**: Edit content in `content/components/` markdown files
2. **Brand**: Update Header.tsx and Footer.tsx with your branding
3. **Extend**: Add more components following the same pattern
4. **Share**: Distribute the URL to your team

## 🎉 You're All Set!

Your Design System Knowledge Base is now live and auto-deploying. Every commit to `main` will automatically rebuild and redeploy your site!

---

For more help, see the main README.md or visit [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying)
