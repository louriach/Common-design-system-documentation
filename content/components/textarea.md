---
title: Textarea
description: Multi-line text input component for collecting longer form entries
category: Forms
---

## Overview

Textarea components let people enter multiple lines of text. They're ideal for longer content like comments, descriptions, messages, or any information that needs more space than a single-line input. Textareas provide a flexible way to capture extended text entries with automatic resizing and scroll capabilities.

## Usage

### Basic Textarea
```tsx:live
<Textarea placeholder="Enter your message" />
```

### Textarea with Label
```tsx:live
<Textarea label="Description" placeholder="Describe your project" />
```

### Required Textarea
```tsx:live
<Textarea label="Comments" required placeholder="Share your thoughts" />
```

### Textarea with Helper Text
```tsx:live
<Textarea label="Feedback" helperText="Please provide detailed feedback about your experience" placeholder="Your feedback here" />
```

### Error State
```tsx:live
<Textarea label="Message" error helperText="Message must be at least 10 characters" placeholder="Enter your message" />
```

### Disabled Textarea
```tsx:live
<Textarea label="Notes" disabled value="This field cannot be edited" />
```

### Read-only Textarea
```tsx:live
<Textarea label="Terms and Conditions" readOnly value="These are the terms and conditions that apply to your use of this service." />
```

## Props

- `label`: string - Label text shown above the textarea
- `placeholder`: string - Placeholder text when textarea is empty
- `value`: string - Controlled textarea value
- `defaultValue`: string - Uncontrolled default value
- `rows`: number - Number of visible text lines (default: 4)
- `cols`: number - Number of visible character columns (rarely used)
- `onChange`: function - Change event handler
- `onBlur`: function - Blur event handler
- `onFocus`: function - Focus event handler
- `disabled`: boolean - Disables the textarea (default: false)
- `readOnly`: boolean - Makes the textarea read-only (default: false)
- `required`: boolean - Marks the textarea as required (default: false)
- `error`: boolean - Shows error state styling and message (default: false)
- `helperText`: string - Helper text or error message shown below textarea
- `maxLength`: number - Maximum character limit
- `minLength`: number - Minimum character limit
- `name`: string - Name attribute for form submission
- `id`: string - Unique identifier (auto-generated if not provided)
- `aria-label`: string - Accessible label for screen readers
- `aria-describedby`: string - ID of element describing the textarea

## States

### Default
The textarea appears in its normal, interactive state ready for input.

**Visual characteristics:**
- Multi-line input area with visible border
- Placeholder text shown when empty
- Vertical resize handle visible
- Cursor changes to text input on hover

### Focus
When the textarea receives keyboard or mouse focus, it shows a visible focus indicator.

**Visual characteristics:**
- Focus ring appears around the textarea
- Cursor positioned at click location
- Ready for text input
- Keyboard navigation enabled

### Disabled
A disabled textarea cannot be interacted with and appears visually muted.

**Visual characteristics:**
- Reduced opacity
- Cursor changes to not-allowed
- No interaction possible
- Current value remains visible

### Error
An error state indicates validation failure or required field not completed.

**Visual characteristics:**
- Border color changes to red
- Error message appears below
- Focus ring uses error color
- Helper text shows error message

### Read-only
A read-only textarea shows content that cannot be edited but can be selected and copied.

**Visual characteristics:**
- Background color indicates read-only state
- Text can be selected and copied
- No editing possible
- Cursor appears as default, not text input

## Use Cases

### Comments and Feedback
Textareas work well for gathering comments, feedback, or reviews where people need space to write longer responses.

**Example:**
- Product reviews
- Support tickets
- Feedback forms
- Comment sections

### Descriptions
Textareas suit detailed descriptions that span multiple sentences or paragraphs.

**Example:**
- Product descriptions
- Project descriptions
- Bio or about sections
- Instructions or notes

### Messages
Textareas fit composing messages, emails, or other communication content.

**Example:**
- Contact forms
- Email composition
- Chat messages
- Support requests

### Notes and Documentation
Textareas handle capturing notes, documentation, or any extended text content.

**Example:**
- Meeting notes
- Documentation
- Code comments
- Research notes

## Anatomy

Textarea components include these elements:

1. **Label** - Text that describes what the textarea is for
2. **Textarea Element** - The multi-line text input area
3. **Placeholder** - Optional hint text shown when empty
4. **Resize Handle** - Visual indicator for resizing (typically bottom-right corner)
5. **Helper Text** - Optional guidance or error messages
6. **Scrollbar** - Appears when content exceeds visible area

## Accessibility

### Keyboard Navigation
- Tab key moves focus to the textarea
- Focus indicators must be clearly visible
- All standard text editing keyboard shortcuts work
- Arrow keys navigate within the text
- Enter creates new lines

### Screen Reader Support
- Label is associated with the textarea using `htmlFor` and `id`
- Required state is announced
- Error state is announced with `aria-invalid`
- Helper text is associated with `aria-describedby`
- Placeholder text may be announced (but shouldn't replace labels)

### Visual Requirements
- Interactive area must be at least 44×44 pixels on mobile
- Text must have at least 4.5:1 contrast with background
- Text must be readable when zoomed to 200%
- Focus indicators must meet contrast requirements
- Resize handle must be clearly visible

### Best Practices
- Always provide a label for the textarea
- Use placeholder text to guide input, not as a replacement for labels
- Set appropriate `rows` based on expected content length
- Provide `maxLength` when character limits apply
- Use helper text to explain requirements or provide examples
- Consider character count indicators for long entries

## Content Guidelines

### Labels
- Use clear, descriptive labels
- Match the label to the type of content expected
- Keep labels concise (1-4 words typically)
- Use consistent terminology across forms

### Placeholders
- Use placeholders to show example content or format
- Keep placeholder text concise and scannable
- Don't use placeholders as a replacement for labels
- Make placeholders descriptive but not overwhelming

### Helper Text
- Explain what kind of information is expected
- Provide format examples when helpful
- Show character limits or requirements
- Keep helper text concise and actionable

## Best Practices

### When to Use
- Gathering multi-line text entries
- Content longer than a few words
- Comments, descriptions, or messages
- Content that benefits from visible context
- When people need to see what they've written

### When Not to Use
- Single-line entries (use Input instead)
- Very short responses (use Input instead)
- Structured data entry (use appropriate form controls)
- When space is extremely limited
- For content that doesn't need editing (use read-only display instead)

### Design Considerations
- Set appropriate default `rows` (typically 3-6)
- Allow vertical resizing for flexibility
- Consider character count indicators for long entries
- Provide adequate width for readability
- Test with various content lengths
- Ensure scrollbars work correctly

## Related Components

- **Input** - For single-line text entry
- **Select** - For choosing from predefined options
- **Checkbox** - For boolean selections
- **Radio** - For single-choice selections

## Technical Considerations

### Implementation
- Textareas use native HTML `<textarea>` elements for best accessibility
- Custom styling maintains native keyboard and screen reader support
- Resize behavior can be controlled with CSS
- Scrollbars appear automatically when content exceeds visible area

### Browser Support
- Native textareas work across all modern browsers
- Custom styling may vary slightly between browsers
- Resize behavior is consistent across platforms
- Keyboard navigation is consistent across browsers

### Performance
- Native textareas have minimal performance impact
- Very long content (10,000+ characters) may benefit from virtualization
- Character counting can be done efficiently with onChange handlers
- Auto-resize features may have slight performance overhead

## Common Patterns

### Contact Form
Common pattern for contact and feedback forms.

```tsx:live
<Textarea label="Message" required placeholder="Enter your message" helperText="Please provide as much detail as possible" />
```

### Description Field
For product or project descriptions.

```tsx:live
<Textarea label="Description" rows={6} placeholder="Describe your project in detail" maxLength={500} />
```

### Notes Field
For capturing notes or additional information.

```tsx:live
<Textarea label="Additional Notes" placeholder="Any additional information..." rows={3} />
```

## Validation

### Visual Validation
- Textarea has clear visual state (default, focus, error, disabled, read-only)
- Error state is immediately obvious
- Helper text is clearly associated with the textarea
- Resize handle is always visible when resizing is enabled

### Functional Validation
- Required textareas prevent form submission when empty
- Error messages appear when validation fails
- Disabled state prevents interaction
- Character limits are enforced when `maxLength` is set
- Read-only state prevents editing

### Accessibility Validation
- Label is properly associated with the textarea
- Keyboard navigation works correctly
- Screen readers announce the textarea and its state
- Focus indicators meet contrast requirements
- Helper text is announced to screen readers
- Character count (if shown) is accessible
