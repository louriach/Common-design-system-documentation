# 🚀 Getting Started with Design System KB

## What You Have

A **production-ready static website** for design system component documentation, built with:
- Next.js 16 (static export)
- shadcn/ui & Radix UI (accessible components)
- Tailwind CSS (responsive styling)
- Markdown (easy content management)

## In 30 Seconds

```bash
# Navigate to your project
cd /Users/disco_lu/Github/Common-design-system-documentation

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

## Your First Deployment (5 minutes)

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit: Design System KB"
git push origin main
```

### 2. Enable GitHub Pages
- Go to repository Settings
- Navigate to Pages section
- Set source to "GitHub Actions"
- Save

### 3. Done! 🎉
Your site will be live at `https://username.github.io/repo-name` in 2-5 minutes.

## Project Structure

```
src/
├── app/                    # Pages
│   ├── page.tsx           # Homepage
│   ├── components/[slug]/ # Component detail pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ComponentGrid.tsx
│   ├── MarkdownRenderer.tsx
│   └── ui/               # shadcn/ui components
└── lib/
    └── markdown.ts        # Markdown utilities

content/components/       # 📝 Edit these to update docs!
├── button.md
├── input.md
├── card.md
├── menu.md
├── badge.md
├── modal.md
├── tooltip.md
└── pagination.md

.github/workflows/
└── deploy.yml            # Auto-deployment config

out/                      # Generated static site (ready to deploy)
```

## Add a New Component

Super easy - just add a markdown file!

1. Create `content/components/breadcrumb.md`:

```markdown
---
title: Breadcrumb
description: Navigation showing page hierarchy
category: Navigation
---

## Overview
Breadcrumb component for...

## Usage
\`\`\`tsx
<Breadcrumb />
\`\`\`

## Props
...

## Accessibility
...

## States
...

## Best Practices
...
```

2. Commit and push
3. GitHub Actions automatically rebuilds
4. Your new component is live at `/components/breadcrumb/`

## Customize Everything

### Change Colors
Edit `tailwind.config.ts` or modify `src/app/globals.css`

### Update Branding
Edit `src/components/Header.tsx` and `src/components/Footer.tsx`

### Change Theme
Modify Tailwind theme config or component CSS directly

### Add Navigation Items
Edit `src/components/Header.tsx`

## Build & Deploy

```bash
# Build static site (generates /out directory)
npm run build

# Test locally
npx serve out

# Push to GitHub
git push origin main

# GitHub Actions automatically:
# 1. Installs dependencies
# 2. Builds the site
# 3. Deploys to GitHub Pages
```

## What's Included

✅ **8 Component Guides**
- Button, Input, Card, Menu, Badge, Modal, Tooltip, Pagination

✅ **Features**
- Responsive design (mobile, tablet, desktop)
- Dark mode support
- WCAG 2.1 AA accessibility
- Syntax highlighting
- System fonts (no external dependencies)
- Auto-deployment

✅ **Documentation**
- README.md - Project overview
- DEPLOYMENT.md - Detailed deployment guide
- SUMMARY.md - Complete feature summary
- LAUNCH_CHECKLIST.md - Pre-launch verification

## Common Tasks

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
```

### Update Documentation
1. Edit markdown files in `content/components/`
2. Push to GitHub
3. Site updates automatically

### Add Navigation Link
Edit `src/components/Header.tsx` and add new Link

### Change Homepage
Edit `src/app/page.tsx`

## Troubleshooting

**Site won't build?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**GitHub Pages not updating?**
- Check Actions tab for workflow status
- Verify Pages is enabled in Settings
- Wait 2-3 minutes for deployment

**Styling looks wrong?**
- Clear browser cache (Ctrl+Shift+Del)
- Try incognito/private mode
- Check dark mode setting

## Key Features at a Glance

| Feature | Status | Details |
|---------|--------|---------|
| Responsive | ✅ | Mobile, tablet, desktop |
| Dark Mode | ✅ | Automatic via OS preference |
| Accessibility | ✅ | WCAG 2.1 AA compliant |
| Performance | ✅ | 1.8MB total, no external fonts |
| SEO | ✅ | Proper metadata and Open Graph |
| Mobile | ✅ | Optimized for touch |
| Keyboard | ✅ | Full keyboard navigation |
| Components | ✅ | 8 comprehensive guides |

## Next Steps

1. **Test locally**
   ```bash
   npm install
   npm run dev
   ```

2. **Push to GitHub**
   ```bash
   git push origin main
   ```

3. **Enable Pages** in repository settings

4. **Visit your site** at `https://username.github.io/repo-name`

5. **Add more components** by creating markdown files

6. **Customize** styling and branding

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **shadcn/ui Docs**: https://ui.shadcn.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Development
npm run dev          # localhost:3000
npm run build        # Build for production

# Testing
npx serve out        # Serve built site locally

# Git
git add .
git commit -m "message"
git push origin main
```

---

**That's it!** You're ready to launch your Design System KB. 🚀

Push to GitHub, enable Pages, and your site will be live in minutes!
