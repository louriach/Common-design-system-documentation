# 🔧 Troubleshooting Guide

## Component Pages Show 404

### Issue
Clicking on component cards on the homepage results in a 404 error.

### Root Cause
Next.js with `output: "export"` (static export) **does not support dynamic routes in development mode** (`npm run dev`). The dynamic routes only work after building the static site.

### Solution

#### Option 1: Build and Serve (Recommended for Testing)

```bash
# Build the static site
npm run build

# Serve the built site locally
npx serve out

# Or use Python's built-in server
cd out && python3 -m http.server 3000

# Visit http://localhost:3000
```

#### Option 2: Test in Production Build

The routes work correctly in the built static site. After building:

1. The `out/` directory contains all static HTML files
2. Component pages are at `out/components/[slug]/index.html`
3. These work correctly when served as static files

#### Option 3: Temporary Dev Mode (Not Recommended)

If you need dynamic routes in dev mode, temporarily remove static export:

```typescript
// next.config.ts - TEMPORARY CHANGE
const nextConfig: NextConfig = {
  // output: "export",  // Comment this out
  trailingSlash: true,
};
```

**⚠️ Remember to uncomment `output: "export"` before deploying!**

### Verification

After building, verify routes exist:

```bash
# Check that component directories exist
ls -la out/components/

# Should show:
# badge/
# button/
# card/
# input/
# menu/
# modal/
# pagination/
# tooltip/
```

### Why This Happens

- **Static Export** generates all pages at build time
- **Dynamic Routes** need `generateStaticParams()` to pre-generate pages
- **Dev Server** doesn't run static generation, so dynamic routes return 404
- **Production Build** generates all pages correctly

### Expected Behavior

✅ **After `npm run build`** → Routes work correctly  
✅ **After `npx serve out`** → All component pages accessible  
❌ **During `npm run dev`** → Dynamic routes show 404 (expected)

---

## Other Common Issues

### Build Fails with Turbopack Errors

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Component Pages Not Generated

**Check:**
1. Markdown files exist in `content/components/`
2. Files have `.md` extension
3. Files have valid frontmatter

**Verify:**
```bash
# Check markdown files
ls -la content/components/*.md

# Should show 8 files:
# badge.md, button.md, card.md, input.md, menu.md, modal.md, pagination.md, tooltip.md
```

### Links Point to Wrong Paths

**Check:**
- Links use trailing slashes: `/components/button/` (not `/components/button`)
- `next.config.ts` has `trailingSlash: true`
- ComponentGrid uses correct path format

### Styling Not Working

**Check:**
1. `globals.css` exists and is imported in `layout.tsx`
2. Tailwind CSS is configured correctly
3. Build completed successfully

---

## Quick Fixes

### Reset Everything
```bash
# Clean install
rm -rf node_modules package-lock.json .next out
npm install
npm run build
```

### Check Route Generation
```bash
# After build, verify routes
find out/components -name "index.html" | wc -l
# Should output: 8
```

### Test Locally
```bash
# Build
npm run build

# Serve
npx serve out

# Visit http://localhost:3000
# All component links should work!
```

---

## Still Having Issues?

1. **Check the build output** - Look for errors during `npm run build`
2. **Verify markdown files** - Ensure they exist and have valid frontmatter
3. **Check route structure** - Ensure `src/app/components/[slug]/page.tsx` exists
4. **Review console** - Check browser console for errors
5. **Test static build** - Use `npx serve out` to test the actual production build

---

**Remember:** With static export, always test using the built static files (`out/` directory), not the dev server!
