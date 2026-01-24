# 🧪 Testing Locally

## Quick Test (Recommended - Without BasePath)

For local testing, it's easier to test **without** basePath. The basePath is only needed for GitHub Pages deployment.

```bash
# 1. Build WITHOUT basePath (simpler for local testing)
npm run build

# 2. Serve the built site
npx serve out

# 3. Visit http://localhost:3000/
# Component pages at: http://localhost:3000/components/button/
```

**Note:** This tests the functionality. For testing the exact GitHub Pages setup with basePath, see "Testing With BasePath" below.

## Step-by-Step Guide

### Option 1: Testing Without BasePath (Easiest)

For local development, test without basePath - it's simpler and tests all functionality:

```bash
# Navigate to project directory
cd /Users/disco_lu/Github/Common-design-system-documentation

# Build WITHOUT basePath
npm run build

# Serve the static files
npx serve out

# Open browser to:
# http://localhost:3000/
# Component pages: http://localhost:3000/components/button/
```

This tests all functionality. The basePath is only needed for GitHub Pages deployment.

### Option 1b: Testing With BasePath (For Exact GitHub Pages Testing)

If you need to test the exact GitHub Pages setup:

```bash
# Build with basePath
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build

# Create a symlink or copy structure to match basePath
mkdir -p test-server/Common-design-system-documentation
cp -r out/* test-server/Common-design-system-documentation/
cd test-server
npx serve -l 3000

# Visit: http://localhost:3000/Common-design-system-documentation/
```

### Option 2: Using Python HTTP Server

```bash
# Build the site
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build

# Navigate to output directory
cd out

# Start Python server (Python 3)
python3 -m http.server 3000

# Or Python 2
python -m SimpleHTTPServer 3000

# Open browser to:
# http://localhost:3000/Common-design-system-documentation/
```

### Option 3: Using Node.js `http-server`

```bash
# Install globally (one time)
npm install -g http-server

# Build the site
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build

# Serve from out directory
cd out
http-server -p 3000

# Open browser to:
# http://localhost:3000/Common-design-system-documentation/
```

## Testing Without BasePath (Root Testing)

If you want to test without the basePath (as if deployed to root):

```bash
# Build without basePath
npm run build

# Serve
npx serve out

# Visit http://localhost:3000/
# Component pages at: http://localhost:3000/components/button/
```

## Verify Build Output

Before serving, check that pages were generated:

```bash
# After building, check component pages exist
ls -la out/components/

# Should show:
# badge/
# button/
# card/
# input/

# Count generated pages
find out/components -name "index.html" | wc -l
# Should output: 8
```

## Testing Checklist

- [ ] Build completes without errors
- [ ] `out/components/` directory contains 8 component folders
- [ ] Homepage loads at `http://localhost:3000/Common-design-system-documentation/`
- [ ] Component cards are visible on homepage
- [ ] Clicking a component card navigates to component page
- [ ] Component page shows title, description, and content
- [ ] Markdown content renders correctly
- [ ] Code blocks have syntax highlighting
- [ ] "Back to Components" button works
- [ ] All 8 components are accessible

## Common Issues

### "Cannot find module" errors during build
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build fails with permission errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Component pages show 404
- Make sure you're using the correct basePath in the URL
- Check that `out/components/` has the component folders
- Verify the build completed successfully

### Styles not loading
- Make sure you're serving from the `out/` directory
- Check browser console for 404 errors on CSS files
- Verify basePath matches in URL

## Quick Test Script

Create a test script for convenience:

```bash
# Create test script
cat > test-local.sh << 'EOF'
#!/bin/bash
echo "Building with basePath..."
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build

if [ $? -eq 0 ]; then
  echo "✓ Build successful!"
  echo "Component pages generated:"
  find out/components -name "index.html" | wc -l
  echo ""
  echo "Starting server..."
  echo "Visit: http://localhost:3000/Common-design-system-documentation/"
  npx serve out
else
  echo "✗ Build failed!"
  exit 1
fi
EOF

# Make executable
chmod +x test-local.sh

# Run it
./test-local.sh
```

## Testing Specific Components

To test a specific component:

```bash
# Build
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build

# Serve
npx serve out

# Visit specific component:
# http://localhost:3000/Common-design-system-documentation/components/button/
# http://localhost:3000/Common-design-system-documentation/components/input/
# etc.
```

## Debugging Build Issues

If components aren't generating:

```bash
# Check if markdown files exist
ls -la content/components/*.md

# Check build output for errors
NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build 2>&1 | tee build.log

# Look for "Generating static params" messages
grep -i "generating\|error\|undefined" build.log
```

## Package.json Script (Optional)

Add a test script to `package.json`:

```json
{
  "scripts": {
    "test:local": "NEXT_PUBLIC_BASE_PATH=/Common-design-system-documentation npm run build && npx serve out"
  }
}
```

Then run:
```bash
npm run test:local
```

---

**Remember:** With static export, you must build before testing. The dev server (`npm run dev`) won't work for dynamic routes.
