---
title: Pagination
description: Navigation component for moving between pages or sections
category: Navigation
---

## Overview
Pagination component enables users to navigate through large sets of content distributed across multiple pages. Provides clear navigation and current page indication.

## Usage
```tsx
<nav aria-label="Pagination">
  <ul class="pagination">
    <li><button>Previous</button></li>
    <li><button>1</button></li>
    <li><button aria-current="page">2</button></li>
    <li><button>3</button></li>
    <li><button>Next</button></li>
  </ul>
</nav>
```

## Props
- `currentPage`: number - Current active page
- `totalPages`: number - Total number of pages
- `onPageChange`: function - Callback for page changes
- `variant`: "default" | "minimal" | "compact"
- `showFirstLast`: boolean - Show first/last page buttons
- `siblingCount`: number - Pages to show around current page
- `disabled`: boolean - Disable pagination

## Accessibility
- Use `<nav>` with `aria-label="Pagination"`
- Mark current page with `aria-current="page"`
- Use descriptive button labels: "Go to page X"
- Provide previous/next buttons for easy navigation
- Keyboard navigable: Tab through pages, Enter to select
- Avoid pagination as the only navigation for mobile - provide alternatives
- Use sufficient color contrast for all interactive elements
- Consider page jumping feature for large page counts

## States
- Default
- Hover
- Focus
- Active (current page)
- Disabled
- Loading

## Best Practices
- Show current page clearly
- Provide previous/next navigation
- Limit visible page numbers (e.g., 5-7)
- Use ellipsis (...) for hidden pages
- Jump to specific page for large datasets
- Mobile: show minimal pagination, consider "load more"
- Provide keyboard shortcuts if appropriate
- Update URL/history when page changes
- Preserve scroll position or provide "back to top" option
- Consider infinite scroll for mobile experiences

