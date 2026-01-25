---
title: Table
description: Structured data display component for organizing information in rows and columns
category: Data Display
---

## Overview

Table components organize information into rows and columns, making it easy to compare and scan data. They work well for displaying structured data like lists, comparisons, financial information, and any content that benefits from a grid layout. Tables help people find specific information quickly and understand relationships between data points.

## Usage

### Basic Table
```tsx:live
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Striped Table
```tsx:live
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Stock</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow striped>
      <TableCell>Widget A</TableCell>
      <TableCell>$29.99</TableCell>
      <TableCell>150</TableCell>
    </TableRow>
    <TableRow striped>
      <TableCell>Widget B</TableCell>
      <TableCell>$39.99</TableCell>
      <TableCell>75</TableCell>
    </TableRow>
    <TableRow striped>
      <TableCell>Widget C</TableCell>
      <TableCell>$49.99</TableCell>
      <TableCell>200</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Bordered Table
```tsx:live
<Table bordered>
  <TableHeader>
    <TableRow>
      <TableHead>Date</TableHead>
      <TableHead>Transaction</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>2024-01-15</TableCell>
      <TableCell>Purchase</TableCell>
      <TableCell>$125.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>2024-01-20</TableCell>
      <TableCell>Refund</TableCell>
      <TableCell>-$25.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props

### Table
- `striped`: boolean - Applies alternating row colors (default: false)
- `bordered`: boolean - Adds border around table (default: false)
- `className`: string - Additional CSS classes

### TableHeader
- `className`: string - Additional CSS classes

### TableBody
- `className`: string - Additional CSS classes

### TableRow
- `striped`: boolean - Applies background color to even rows
- `className`: string - Additional CSS classes

### TableHead
- `className`: string - Additional CSS classes

### TableCell
- `className`: string - Additional CSS classes

## States

### Default
The table appears in its normal state with all data visible.

**Visual characteristics:**
- Clear row and column structure
- Header row with distinct styling
- Data cells with readable text
- Hover effects on rows

### Hover
When hovering over a row, it provides visual feedback.

**Visual characteristics:**
- Row background color changes
- Cursor may change to pointer (if row is clickable)
- Visual indication of interactivity
- Smooth transition effect

### Striped
Alternating row colors improve readability for large datasets.

**Visual characteristics:**
- Even rows have background color
- Odd rows remain transparent
- Clear visual separation between rows
- Improves scanning of data

## Use Cases

### Data Lists
Use tables to display lists of items with multiple attributes.

**Example:**
- User lists
- Product catalogs
- Inventory lists
- Contact directories

### Comparisons
Use tables to compare multiple items across different attributes.

**Example:**
- Feature comparisons
- Pricing tables
- Specification sheets
- Performance metrics

### Financial Data
Use tables for displaying financial information and transactions.

**Example:**
- Transaction history
- Account statements
- Budget breakdowns
- Financial reports

### Structured Information
Use tables for any structured data that benefits from grid layout.

**Example:**
- Schedules
- Calendars
- Scoreboards
- Rankings

## Anatomy

Table components include these elements:

1. **Table Container** - Wrapper that enables horizontal scrolling
2. **Table Header** - Section containing column headers
3. **Table Body** - Section containing data rows
4. **Table Row** - Individual row containing cells
5. **Table Head** - Header cell defining column
6. **Table Cell** - Data cell containing content

## Accessibility

### Keyboard Navigation
- Tab key moves between interactive elements
- Arrow keys navigate cells (if table is interactive)
- Enter or Space activates row actions
- Focus indicators must be clearly visible
- Keyboard navigation works consistently

### Screen Reader Support
- Tables use semantic HTML (`<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`)
- Headers are properly associated with cells
- Table structure is announced clearly
- Row and column relationships are understood
- Complex tables may need additional ARIA attributes

### Visual Requirements
- Text must have at least 4.5:1 contrast with background
- Header cells must be visually distinct
- Row hover states must be clearly visible
- Borders must meet contrast requirements
- Focus indicators must meet contrast requirements

### Best Practices
- Always include header rows
- Use descriptive header text
- Keep tables scannable and organized
- Consider responsive behavior for mobile
- Use striped rows for large datasets
- Ensure sufficient spacing between cells

## Content Guidelines

### Headers
- Use clear, descriptive column headers
- Keep headers concise (1-3 words)
- Use consistent terminology
- Align headers with data content
- Consider sortable indicators when applicable

### Data
- Keep cell content concise
- Use consistent formatting within columns
- Align numbers to the right
- Align text to the left
- Use appropriate data types (dates, currency, etc.)

### Organization
- Group related columns together
- Order columns by importance
- Consider user scanning patterns
- Maintain logical data flow

## Best Practices

### When to Use
- For structured data with multiple attributes
- When comparing items across dimensions
- For financial or numerical data
- When data benefits from grid layout
- For lists with consistent structure

### When Not to Use
- For simple lists (use regular list)
- For single-column data (use list)
- When data is primarily visual (use cards)
- For navigation (use navigation menu)
- When space is extremely limited

### Design Considerations
- Ensure tables are responsive on mobile
- Consider horizontal scrolling for wide tables
- Use appropriate column widths
- Maintain consistent spacing
- Test with various data lengths

## Related Components

- **Card** - Alternative layout for less structured data
- **List** - For simple, single-column data
- **Badge** - Often used in table cells for status
- **Button** - For row actions in tables

## Technical Considerations

### Implementation
- Tables use semantic HTML for accessibility
- Horizontal scrolling wrapper for responsive behavior
- Striped rows use CSS nth-child selectors
- Hover states provide visual feedback
- Header styling distinguishes from data cells

### Browser Support
- Tables work across all modern browsers
- Semantic HTML is well-supported
- CSS styling is consistent
- Responsive behavior works reliably
- Screen reader support is built-in

### Performance
- Tables are lightweight and render quickly
- Large datasets may need virtualization
- Consider pagination for very large tables
- Lazy loading can improve initial render
- Memoization helps with re-renders

### Responsive Design
- Tables scroll horizontally on small screens
- Consider stacking layout for mobile
- Hide less important columns on mobile
- Ensure touch targets are adequate
- Test with various screen sizes

## Common Patterns

### User List
Common pattern for displaying user information.

```tsx:live
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow striped>
      <TableCell>Alice Johnson</TableCell>
      <TableCell>alice@example.com</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
    <TableRow striped>
      <TableCell>Bob Williams</TableCell>
      <TableCell>bob@example.com</TableCell>
      <TableCell>Inactive</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Product Comparison
For comparing products or features.

```tsx:live
<Table bordered>
  <TableHeader>
    <TableRow>
      <TableHead>Feature</TableHead>
      <TableHead>Basic</TableHead>
      <TableHead>Pro</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Storage</TableCell>
      <TableCell>10 GB</TableCell>
      <TableCell>100 GB</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Support</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>24/7</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Validation

### Visual Validation
- Table displays correctly with all rows and columns
- Headers are visually distinct
- Striped rows alternate properly
- Borders appear when specified
- Hover states work correctly

### Functional Validation
- Data displays correctly in cells
- Responsive scrolling works on mobile
- Interactive elements function properly
- Keyboard navigation works
- Focus indicators are visible

### Accessibility Validation
- Semantic HTML structure is correct
- Headers are properly associated
- Screen readers announce table structure
- Keyboard navigation works properly
- Focus indicators meet contrast requirements
