---
title: Menu
description: Navigation menu component for displaying lists of actions or links
category: Navigation
---

## Overview
Menu component for displaying lists of actions, navigation links, or options. Supports hierarchical structures with submenus and various trigger mechanisms.

## Usage
```tsx
<nav class="menu">
  <ul class="menu-list">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

## Props
- `orientation`: "vertical" | "horizontal"
- `trigger`: "click" | "hover"
- `closeOnClick`: boolean - Auto-close on item selection
- `disabled`: boolean - Disables the entire menu

## Accessibility
- Use semantic `<nav>` and `<ul>/<li>` elements
- Implement keyboard navigation:
  - Arrow keys: navigate items
  - Enter/Space: select item
  - Escape: close menu
- Use `aria-expanded` to indicate menu state
- Use `aria-haspopup="menu"` for menu buttons
- Ensure focus management - focus menu button when menu closes
- Support screen readers with proper ARIA roles

## States
- Default
- Open/Closed
- Hover
- Focus
- Disabled
- Active (current page indicator)

## Best Practices
- Keep menu items concise
- Use keyboard shortcuts for power users
- Provide visual feedback for current selection
- Organize items logically
- Avoid deep nesting (max 2-3 levels)
- Mobile: consider alternative navigation patterns (hamburger, drawer)
- Close menu when clicking outside
- Support both keyboard and mouse interaction

