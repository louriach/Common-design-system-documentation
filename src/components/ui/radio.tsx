import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      id,
      disabled,
      checked,
      defaultChecked,
      onChange,
      name,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const radioId = id || generatedId
    const helperId = helperText ? `${radioId}-helper` : undefined
    const errorId = error ? `${radioId}-error` : undefined

    const radioRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    // Combine refs
    React.useImperativeHandle(ref, () => radioRef.current as HTMLInputElement)

    // If checked is provided, it's controlled; otherwise use internal state
    const isControlled = checked !== undefined
    const actualChecked = isControlled ? checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
              type="radio"
              id={radioId}
              ref={radioRef}
              name={name}
              value={value}
              checked={isControlled ? checked : undefined}
              defaultChecked={!isControlled ? defaultChecked : undefined}
              onChange={handleChange}
              disabled={disabled}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={errorId || helperId}
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
              htmlFor={radioId}
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
Radio.displayName = "Radio"

export { Radio }
