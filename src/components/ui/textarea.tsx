import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  helperText?: string
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, label, id, rows, ...props }, ref) => {
    const generatedId = React.useId()
    const textareaId = id || generatedId
    const helperId = helperText ? `${textareaId}-helper` : undefined
    const errorId = error ? `${textareaId}-error` : undefined

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="ds-label">
            {label}
            {props.required && (
              <span className="text-destructive ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        )}
        <textarea
          id={textareaId}
          rows={rows || 4}
          className={cn(
            "ds-input ds-input--textarea resize-y",
            error && "ds-input--error",
            className
          )}
          ref={ref}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId || helperId}
          {...props}
        />
        {error && (
          <p id={errorId} className="ds-error" role="alert">
            {helperText || "This field is required"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="ds-helper">{helperText}</p>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
