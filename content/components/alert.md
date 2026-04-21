---
title: Alert
description: Contextual feedback messages for communicating information, status updates, and important notices to users
category: Feedback
---

## Overview

Alerts show contextual feedback that needs attention — confirmations, warnings, errors, and informational messages. They don't interrupt the user's workflow but communicate clearly what happened or what to do next.

## Usage

### Info

Use for tips, notices, or non-critical context.

```tsx:live
<Alert type="info" title="New feature available">
  Check out our latest updates in the settings panel.
</Alert>
```

### Success

Confirm that an action completed successfully.

```tsx:live
<Alert type="success" title="Changes saved">
  Your changes have been saved successfully.
</Alert>
```

### Warning

Warn about potential issues or irreversible actions.

```tsx:live
<Alert type="warning" title="Unsaved changes">
  You have unsaved changes that will be lost if you navigate away.
</Alert>
```

### Error

Communicate failures that need user attention or action.

```tsx:live
<Alert type="error" title="Upload failed">
  The file could not be uploaded. Please try again.
</Alert>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| type | `"info" \| "success" \| "warning" \| "error"` | — | Alert severity |
| title | `string` | — | Short heading — state what happened |
| children | `ReactNode` | — | Body text with context or next steps |
| closable | `boolean` | `false` | Shows a dismiss button |
| onClose | `function` | — | Callback when alert is dismissed |

## Accessibility

- Info and success alerts use `aria-live="polite"`; warning and error alerts use `aria-live="assertive"`
- Don't rely on color alone — use both icon and text to convey severity
- Close button must be keyboard accessible (`Tab` to focus, `Enter`/`Space` to dismiss)
- `Escape` closes dismissible alerts

## When to use

**Use an alert when:**
- Providing feedback after a user action (save, submit, delete)
- Communicating system status changes
- Warning about potentially destructive or irreversible actions

**Don't use an alert when:**
- Information should be permanently visible — use a banner or callout
- The error is specific to a form field — use inline field validation
- The notification is non-urgent and time-sensitive — use a toast
