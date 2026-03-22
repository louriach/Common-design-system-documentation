---
title: Fieldset
description: Semantic container component for grouping related form controls together
category: Forms
---

## Overview

Fieldsets group related form controls under a shared label, creating both a visual and semantic relationship. They are the correct way to wrap radio groups, checkbox groups, and multi-field sections like address or payment blocks.

## Usage

### Contact information

```tsx:live
<Fieldset legend="Contact Information">
  <Input label="Name" placeholder="Enter your name" />
  <Input label="Email" type="email" placeholder="you@example.com" />
  <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
</Fieldset>
```

### Radio group

Fieldsets are required for radio groups to associate the group label with its options.

```tsx:live
<Fieldset legend="Payment Method" required>
  <Radio name="payment" label="Credit Card" value="card" required defaultChecked />
  <Radio name="payment" label="PayPal" value="paypal" required />
  <Radio name="payment" label="Bank Transfer" value="bank" required />
</Fieldset>
```

### Checkbox group

```tsx:live
<Fieldset legend="Notification Preferences">
  <Checkbox label="Email notifications" />
  <Checkbox label="SMS notifications" />
  <Checkbox label="Push notifications" />
</Fieldset>
```

### Error state

```tsx:live
<Fieldset legend="Billing Information" error helperText="Please correct the errors below">
  <Input label="Card Number" error helperText="Invalid card number" />
  <Input label="Expiration Date" error helperText="Date has expired" />
</Fieldset>
```

### Disabled

Setting `disabled` on the fieldset disables all child controls.

```tsx:live
<Fieldset legend="Account Settings" disabled>
  <Input label="Username" value="john_doe" disabled />
  <Input label="Email" value="john@example.com" disabled />
</Fieldset>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| legend | `string` | — | Group label rendered as `<legend>` |
| disabled | `boolean` | `false` | Disables all child controls |
| required | `boolean` | `false` | Marks the group as required |
| error | `boolean` | `false` | Error styling on the group |
| helperText | `string` | — | Helper or error message below the group |

## Accessibility

- Uses native `<fieldset>` and `<legend>` — screen readers announce the legend when entering the group
- Setting `disabled` on the fieldset natively disables all descendant form controls
- Radio buttons must be inside a fieldset with a legend; this is required for screen readers to announce the group question
- Helper text is associated with `aria-describedby`

## When to use

**Use a fieldset when:**
- Grouping radio buttons or checkboxes that share a question or category
- A form section has a clear group name (address, payment info, preferences)

**Don't use a fieldset when:**
- There's only one form control — use a label directly
- The grouping is purely visual with no semantic relationship
