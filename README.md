# Design System Knowledge Base

A public static website providing a shared knowledge base for design system component documentation. Designed to reduce the need for every team to write essentially the same documentation.

## 🎯 Features

- **📚 25 Components**: Comprehensive documentation across Actions, Forms, Data Display, Feedback, Navigation, and Layouts (Button, Input, Card, Badge, Checkbox, Radio, Select, Textarea, Toggle, Combobox, Date Picker, Fieldset, Button Group, Icon Button, Alert, Avatar, Breadcrumb, Tabs, Accordion, Link, Modal, Progress, Spinner, Table, Tooltip)
- **🖼 Live Demos**: Interactive component examples with `tsx:live` code blocks rendered in the browser
- **♿ Accessibility First**: Built on Radix UI and shadcn/ui with WCAG 2.1 AA compliance
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **🌙 Dark Mode**: Full dark mode support out of the box
- **⚡ Fast Performance**: Static site generation with Next.js for instant load times
- **🔗 Version Controlled**: All documentation in Git-friendly Markdown files
- **🚀 Auto-Deployed**: GitHub Actions automatically deploys on push to main
- **🤖 llms.txt**: Machine-readable site description for LLMs at `/llms.txt`

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
│   ├── accordion.md, alert.md, avatar.md, badge.md, breadcrumb.md
│   ├── button.md, button-group.md, card.md, checkbox.md, combobox.md
│   ├── date-picker.md, fieldset.md, icon-button.md, input.md, link.md
│   ├── modal.md, progress.md, radio.md, select.md, spinner.md
│   ├── table.md, tabs.md, textarea.md, toggle.md, tooltip.md
├── public/
│   └── llms.txt               # Site description for LLMs
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage with component grid
│   │   ├── components/[slug]/ # Dynamic component detail pages
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Sidebar.tsx        # Sticky sidebar with component list by category
│   │   ├── ComponentGrid.tsx   # Grid display of components on homepage
│   │   ├── ComponentDemo.tsx  # Wrapper for live demos with code + preview
│   │   ├── MarkdownRenderer.tsx # Renders markdown + tsx:live code blocks
│   │   └── ui/                # shadcn/ui and custom components (25 components)
│   └── lib/
│       ├── markdown.ts        # Utilities for parsing markdown files
│       └── componentMapper.tsx # Parses and renders live component demos
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions deployment workflow
├── next.config.ts             # Next.js configuration (static export)
└── package.json                # Project dependencies
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

1. Create the UI component in `src/components/ui/` (e.g., `alert.tsx`) if it doesn't exist.
2. Create a Markdown file in `content/components/` (e.g., `alert.md`) with frontmatter:

```markdown
---
title: Alert
description: Contextual feedback messages for users
category: Feedback
---

## Overview
Your content here...

## Usage
```tsx:live
<Alert>Message</Alert>
```

## Props
## Accessibility
## States
## Best Practices
```

3. For **live demos** to work, register the component in `src/lib/componentMapper.tsx` (import, add to `componentMap`, and add a render handler in `renderComponent` if needed).
4. Run `npm run build` — the component page will be generated at `/components/alert/`.

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
- Component grid grouped by category (Actions, Forms, Data Display, Feedback, Navigation, Layouts)
- Links to each component’s documentation page

### Component Pages
- Sticky sidebar navigation with components grouped by category
- Breadcrumb navigation
- Metadata display (title, category, description)
- Live interactive demos: code blocks with `tsx:live` are rendered as real components
- Full markdown content with syntax highlighting
- Props, accessibility, states, and best practices per component
- Copy code button on each demo

### Responsive Design
- Mobile: 1 column layout
- Tablet: 2 column layouts
- Desktop: 3 column component grid
- Touch-friendly navigation
- Optimized typography scaling

## 🎨 Customization

### Styling
All styling uses Tailwind CSS (v4). Customize theme and tokens in `src/app/globals.css` and component files.

### Theme
Light/dark mode via the header toggle (next-themes). Class-based dark mode in `globals.css`.

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
