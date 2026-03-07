import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
  indeterminate?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      indeterminate,
      id,
      disabled,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId
    const helperId = helperText ? `${checkboxId}-helper` : undefined
    const errorId = error ? `${checkboxId}-error` : undefined

    const checkboxRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    // Combine refs
    React.useImperativeHandle(ref, () => checkboxRef.current as HTMLInputElement)

    // Handle indeterminate state (native property)
    // Indeterminate must be set after render and whenever it changes
    React.useEffect(() => {
      const checkbox = checkboxRef.current
      if (checkbox) {
        const isIndeterminate = indeterminate === true
        checkbox.indeterminate = isIndeterminate
        // When indeterminate, ensure checkbox is not checked
        if (isIndeterminate && checkbox.checked) {
          checkbox.checked = false
        }
        // Also set aria-checked for accessibility
        if (isIndeterminate) {
          checkbox.setAttribute('aria-checked', 'mixed')
        } else {
          checkbox.removeAttribute('aria-checked')
        }
      }
    }, [indeterminate])
    
    // Also set on mount and when indeterminate changes (useLayoutEffect runs synchronously)
    React.useLayoutEffect(() => {
      const checkbox = checkboxRef.current
      if (checkbox) {
        const isIndeterminate = indeterminate === true
        checkbox.indeterminate = isIndeterminate
        if (isIndeterminate) {
          checkbox.checked = false
          checkbox.setAttribute('aria-checked', 'mixed')
        } else {
          checkbox.removeAttribute('aria-checked')
        }
      }
    }, [indeterminate])

    // If checked is provided, it's controlled; otherwise use internal state
    const isControlled = checked !== undefined
    const actualChecked = isControlled ? checked : internalChecked

    // When indeterminate, don't allow checked state
    const shouldBeChecked = indeterminate ? false : actualChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // If indeterminate, prevent checking
      if (indeterminate) {
        e.preventDefault()
        return
      }
      if (!isControlled) {
        setInternalChecked(e.target.checked)
      }
      onChange?.(e)
    }

    return (
      <div className="w-full">
        <div className="flex items-start gap-2">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id={checkboxId}
              ref={checkboxRef}
              checked={isControlled ? shouldBeChecked : undefined}
              defaultChecked={!isControlled && !indeterminate ? defaultChecked : undefined}
              onChange={handleChange}
              disabled={disabled}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={errorId || helperId}
              aria-checked={indeterminate ? "mixed" : undefined}
              className={cn(
                "h-4 w-4 cursor-pointer",
                "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
                "focus:outline-none",
                "disabled:cursor-not-allowed disabled:opacity-50",
                error && "border-destructive",
                className
              )}
              {...props}
            />
          </div>
          {label && (
            <label
              htmlFor={checkboxId}
              className={cn(
                "text-sm font-medium text-foreground cursor-pointer",
                "select-none",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {label}
              {props.required && (
                <span className="text-destructive ml-1" aria-label="required">
                  *
                </span>
              )}
            </label>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-destructive ml-6"
            role="alert"
          >
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-muted-foreground ml-6">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
