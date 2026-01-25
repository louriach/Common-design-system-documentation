---
title: Link
description: Navigation component for linking to other pages or external resources
category: Navigation
---

## Overview

Link components let people navigate to other pages, sections, or external websites. They provide clear visual cues that content is clickable and indicate where the link will take users. Links are essential for site navigation, cross-referencing content, and connecting to external resources.

## Usage

### Basic Link
```tsx:live
<Link href="/components">View Components</Link>
```

### Link with Underline
```tsx:live
<Link href="/docs" variant="underline">Documentation</Link>
```

### Subtle Link
```tsx:live
<Link href="/about" variant="subtle">Learn More</Link>
```

### External Link
```tsx:live
<Link href="https://example.com" external>Visit Example</Link>
```

### Link in Text
```tsx:live
<p>Read our <Link href="/blog">blog posts</Link> for the latest updates.</p>
```

## Props

- `href`: string - Destination URL or path
- `variant`: "default" | "underline" | "subtle" - Visual style variant (default: "default")
- `external`: boolean - Marks link as external (opens in new tab with security attributes)
- `className`: string - Additional CSS classes
- `target`: string - Link target (auto-set for external links)
- `rel`: string - Link relationship (auto-set for external links)
- `aria-label`: string - Accessible label for screen readers
- `onClick`: function - Click event handler

## States

### Default
The link appears in its normal, interactive state.

**Visual characteristics:**
- Blue color indicating clickability
- No underline (unless variant="underline")
- Cursor changes to pointer on hover
- Standard text color for subtle variant

### Hover
When hovering over the link, it provides visual feedback.

**Visual characteristics:**
- Color darkens slightly
- Underline appears (if variant="underline")
- Cursor remains pointer
- Smooth color transition

### Focus
When the link receives keyboard focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the link
- Ring uses blue color
- Clear visual indication of focus
- Keyboard navigation is supported

### Visited
Browsers may change link color for visited links (browser default behavior).

**Visual characteristics:**
- Color may change to indicate visited state
- Helps users track navigation history
- Browser-dependent styling

## Use Cases

### Navigation
Use links for primary site navigation, moving between pages and sections.

**Example:**
- Main navigation menu
- Footer links
- Breadcrumb navigation
- Sidebar navigation

### Inline Links
Use links within text content to reference related information.

**Example:**
- Article references
- Documentation cross-links
- Related content links
- Citation links

### External Resources
Use links to connect to external websites and resources.

**Example:**
- Social media profiles
- Partner websites
- Documentation sites
- External tools

### Actions
Use links for actions that navigate rather than trigger immediate changes.

**Example:**
- "Learn more" links
- "Read full article" links
- "View details" links
- Download links

## Anatomy

Link components include these elements:

1. **Text Content** - The visible link text that describes the destination
2. **Underline** - Optional visual indicator (variant="underline")
3. **Focus Ring** - Visible indicator when link receives keyboard focus
4. **Icon** - Optional icon indicating external links or link type

## Accessibility

### Keyboard Navigation
- Tab key moves focus to links
- Enter or Space activates the link
- Focus indicators must be clearly visible
- Keyboard navigation works consistently
- Focus order follows logical reading order

### Screen Reader Support
- Links are announced as "link" by screen readers
- Link text should be descriptive and indicate destination
- External links should be clearly identified
- Avoid generic text like "click here" or "read more"
- Use aria-label for icon-only links

### Visual Requirements
- Links must have at least 4.5:1 contrast with surrounding text
- Focus indicators must meet contrast requirements
- Hover states must be clearly visible
- Links must be distinguishable from regular text
- Minimum touch target size of 44×44 pixels on mobile

### Best Practices
- Use descriptive link text that indicates destination
- Clearly identify external links
- Ensure links are visually distinct from regular text
- Provide focus indicators for keyboard users
- Use underline variant sparingly to avoid visual clutter
- Group related links together logically

## Content Guidelines

### Link Text
- Use clear, descriptive text
- Indicate what will happen when clicked
- Avoid generic phrases like "click here"
- Match link text to destination page title when possible
- Keep link text concise but informative

### External Links
- Clearly indicate external destinations
- Use external prop for automatic new tab behavior
- Consider adding visual indicator (icon) for external links
- Warn users about external navigation when appropriate

### Context
- Place links in logical locations
- Group related links together
- Use consistent styling throughout site
- Consider link density to avoid overwhelming users

## Best Practices

### When to Use
- For navigation between pages
- For referencing related content
- For connecting to external resources
- For actions that navigate rather than trigger
- For cross-referencing documentation

### When Not to Use
- For actions that trigger immediate changes (use Button)
- For form submissions (use Button with type="submit")
- For destructive actions (use Button)
- For primary call-to-action buttons (use Button)
- When link text is not descriptive

### Design Considerations
- Use consistent link styling throughout site
- Balance link density to avoid overwhelming users
- Make external links clearly identifiable
- Ensure sufficient contrast for readability
- Test link appearance in both light and dark modes

## Related Components

- **Button** - For actions that trigger immediate changes
- **Breadcrumb** - Uses links for navigation hierarchy
- **Tabs** - Uses links for tab navigation
- **Card** - Often contains links to detail pages

## Technical Considerations

### Implementation
- Links use semantic HTML `<a>` elements
- Next.js Link component for internal navigation
- External links use native `<a>` with security attributes
- Focus management ensures keyboard accessibility
- Variants provide visual flexibility

### Browser Support
- Links work across all modern browsers
- Focus indicators are well-supported
- Keyboard navigation is consistent
- External link security attributes are standard
- Visited state styling is browser-dependent

### Performance
- Links are lightweight and render quickly
- Next.js Link provides client-side navigation
- External links use standard navigation
- No additional JavaScript required for basic functionality
- Prefetching can improve perceived performance

### Security
- External links use `rel="noopener noreferrer"` for security
- Prevents window.opener vulnerabilities
- Protects user privacy with noreferrer
- Standard practice for external navigation

## Common Patterns

### Navigation Menu
Common pattern for site navigation.

```tsx:live
<nav className="flex gap-4">
  <Link href="/">Home</Link>
  <Link href="/components">Components</Link>
  <Link href="/docs">Documentation</Link>
</nav>
```

### Inline Reference
For linking within text content.

```tsx:live
<p>
  Check out our <Link href="/components/button">Button component</Link> for more details.
</p>
```

### External Resource
For linking to external websites.

```tsx:live
<Link href="https://github.com" external>View on GitHub</Link>
```

## Validation

### Visual Validation
- Links display correctly with appropriate styling
- Variants are visually distinct
- Hover states provide clear feedback
- Focus indicators are visible
- External links are clearly identified

### Functional Validation
- Links navigate to correct destinations
- External links open in new tabs
- Keyboard navigation works properly
- Focus indicators appear on focus
- Click events fire correctly

### Accessibility Validation
- Links are announced correctly by screen readers
- Keyboard navigation works properly
- Focus indicators meet contrast requirements
- Link text is descriptive
- External links are properly identified
