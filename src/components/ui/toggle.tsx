import * as React from "react"
import { cn } from "@/lib/utils"

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string
  helperText?: string
  error?: boolean
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
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
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const toggleId = id || generatedId
    const helperId = helperText ? `${toggleId}-helper` : undefined
    const errorId = error ? `${toggleId}-error` : undefined

    const toggleRef = React.useRef<HTMLInputElement>(null)
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false)

    React.useImperativeHandle(ref, () => toggleRef.current as HTMLInputElement)

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
          <div className="relative flex items-center pt-0.5">
            <input
              type="checkbox"
              id={toggleId}
              ref={toggleRef}
              role="switch"
              checked={isControlled ? actualChecked : undefined}
              defaultChecked={!isControlled ? defaultChecked : undefined}
              onChange={handleChange}
              disabled={disabled}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={errorId || helperId}
              aria-checked={actualChecked}
              className="sr-only"
              {...props}
            />
            <label
              htmlFor={toggleId}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer",
                "focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 focus-within:ring-offset-2",
                actualChecked
                  ? "bg-blue-600 dark:bg-blue-500"
                  : "bg-gray-300 dark:bg-gray-700",
                disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <span
                className={cn(
                  "inline-block h-5 w-5 transform rounded-full bg-white transition-transform",
                  actualChecked ? "translate-x-6" : "translate-x-0.5"
                )}
              />
            </label>
          </div>
          {label && (
            <label
              htmlFor={toggleId}
              className={cn(
                "text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer flex-1",
                "select-none",
                disabled && "cursor-not-allowed opacity-50"
              )}
            >
              {label}
              {props.required && (
                <span className="text-red-500 ml-1" aria-label="required">
                  *
                </span>
              )}
            </label>
          )}
        </div>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-red-600 dark:text-red-400 ml-13"
            role="alert"
          >
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-gray-600 dark:text-gray-400 ml-13">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Toggle.displayName = "Toggle"

export { Toggle }
