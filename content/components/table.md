---
title: Table
description: Structured data display component for organizing information in rows and columns
category: Data Display
---

## Overview

Tables organize data into rows and columns, making it easy to scan, compare, and find specific values. Use them for structured data sets where relationships between columns matter.

## Usage

### Basic table

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

### Striped rows

Alternating row colors improve readability for dense datasets.

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

### Bordered

Explicit borders help when columns contain similar data types.

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

## Props

### Table

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| striped | `boolean` | `false` | Applies alternating row colors |
| bordered | `boolean` | `false` | Adds borders around the table and cells |

### TableRow

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| striped | `boolean` | `false` | Applies background to this row |

## Accessibility

- Uses semantic `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` elements
- `<th>` cells are associated with their columns via `scope="col"` (or `scope="row"` for row headers)
- Always include a header row — screen readers use it to identify each column
- For tables with many columns, ensure horizontal scroll is available on small viewports

## When to use

**Use a table when:**
- Data has two or more attributes and comparing rows is the primary task
- Users need to scan, sort, or filter structured records

**Don't use a table when:**
- There's only one column — use a list
- The data is primarily visual — use cards
- The structure doesn't have a natural row/column relationship
