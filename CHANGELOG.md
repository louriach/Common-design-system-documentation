# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Semantic design tokens and brutalist black/white wireframe style with monospace typography
- Semantic color variants (destructive, success, warning) for alerts, badges, buttons, and progress
- Component doc template at `content/components/_template.md` for duplicating new component docs
- Changelog page at `/changelog/` that renders this file
- Proper accessibility checks: Playwright + axe-core on all component pages (see `npm run test:a11y`)

### Changed
- All UI components and layout now use semantic tokens from `globals.css` instead of raw Tailwind grays
- Template file is excluded from the sidebar (slug filter in `getAllComponentSlugs()`)
- GETTING_STARTED.md updated with "Add a New Component" steps using the template

## [0.1.0] - 2025-01-24

### Added
- Initial design system documentation site
- 25 components with Markdown docs and live demos
- Static export and GitHub Pages deployment
