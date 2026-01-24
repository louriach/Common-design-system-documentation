# Design System Knowledge Base

A public static website providing a shared knowledge base for design system component documentation. Designed to reduce the need for every team to write essentially the same documentation.

## 🎯 Features

- **📚 8 Core Components**: Comprehensive documentation for Button, Input, Card, Menu, Badge, Modal, Tooltip, and Pagination
- **♿ Accessibility First**: Built on Radix UI and shadcn/ui with WCAG 2.1 AA compliance
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **🌙 Dark Mode**: Full dark mode support out of the box
- **⚡ Fast Performance**: Static site generation with Next.js for instant load times
- **🔗 Version Controlled**: All documentation in Git-friendly Markdown files
- **🚀 Auto-Deployed**: GitHub Actions automatically deploys on push to main

## 🛠 Tech Stack

- **Framework**: Next.js 16 (static export)
- **UI Components**: shadcn/ui (built on Radix UI)
- **Styling**: Tailwind CSS v4
- **Content**: Markdown with frontmatter
- **Parsing**: gray-matter, remark, react-markdown
- **Syntax Highlighting**: highlight.js
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
.
├── content/components/        # Markdown documentation for each component
│   ├── button.md
│   ├── input.md
│   ├── card.md
│   ├── menu.md
│   ├── badge.md
│   ├── modal.md
│   ├── tooltip.md
│   └── pagination.md
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage with component grid
│   │   ├── components/[slug]/ # Dynamic component detail pages
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ComponentGrid.tsx  # Grid display of components
│   │   ├── MarkdownRenderer.tsx # Renders markdown with syntax highlighting
│   │   └── ui/               # shadcn/ui components (Button, Card, etc.)
│   └── lib/
│       └── markdown.ts       # Utilities for parsing markdown files
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment workflow
├── next.config.ts            # Next.js configuration (static export)
├── tailwind.config.ts        # Tailwind CSS configuration
└── package.json              # Project dependencies
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
```

Static output is generated in the `out/` directory.

## 📝 Adding New Components

To add a new component:

1. Create a new Markdown file in `content/components/` (e.g., `tooltip.md`)
2. Add frontmatter with metadata:

```markdown
---
title: Tooltip
description: Informational popup component for displaying contextual help
category: Overlays
---

## Overview
Your content here...

## Usage
## Props
## Accessibility
## States
## Best Practices
```

3. Run `npm run build` - the component page will be automatically generated at `/components/tooltip/`

## ♿ Accessibility Features

- **Semantic HTML**: Proper use of nav, button, article, etc.
- **ARIA Attributes**: Full ARIA support from shadcn/ui and Radix UI
- **Keyboard Navigation**: All interactive elements fully keyboard accessible
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Focus Management**: Visible focus indicators and proper focus handling
- **Screen Reader Support**: Proper labels and descriptions for assistive technologies

## 🌍 Deployment

### Deploy to GitHub Pages

1. Push to `main` branch
2. GitHub Actions automatically builds and deploys to GitHub Pages
3. The workflow is defined in `.github/workflows/deploy.yml`

### Manual Deployment

```bash
# Build the static site
npm run build

# The 'out' directory contains the static HTML/CSS/JS ready to deploy
# Upload to any static hosting: GitHub Pages, Vercel, Netlify, etc.
```

## 📊 Built-In Features

### Homepage
- Hero section with project description
- Statistics section (component count, accessibility standard, license)
- Component grid grouped by category with search capability

### Component Pages
- Breadcrumb navigation
- Metadata display (title, category, description)
- Full markdown content with syntax highlighting
- Table of contents (automatic from markdown headers)
- Links to edit on GitHub
- Back to components navigation

### Responsive Design
- Mobile: 1 column layout
- Tablet: 2 column layouts
- Desktop: 3 column component grid
- Touch-friendly navigation
- Optimized typography scaling

## 🎨 Customization

### Styling
All styling uses Tailwind CSS classes. Modify `tailwind.config.ts` to customize colors, spacing, etc.

### Theme
Dark/light mode is automatic based on OS preference. Configure theme in Tailwind config.

### Components
shadcn/ui components are copied into `src/components/ui/`. Customize them directly.

## 📦 Dependencies

- **next**: React framework with static generation
- **react & react-dom**: UI library
- **shadcn/ui**: Pre-built component library
- **tailwindcss**: Utility-first CSS framework
- **gray-matter**: Parse markdown frontmatter
- **react-markdown**: Render markdown to React components
- **remark-gfm**: GitHub Flavored Markdown support
- **highlight.js**: Code syntax highlighting

## 📄 License

MIT - Free for commercial and personal use

## 🤝 Contributing

Contributions welcome! To add components or improve documentation:

1. Fork the repository
2. Create a feature branch
3. Add your component or improvements
4. Submit a pull request

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

Built with ❤️ for the design systems community. Making documentation simple and accessible for everyone.
