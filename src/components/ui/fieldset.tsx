"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend?: string
  error?: boolean
  helperText?: string
  required?: boolean
}

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ className, legend, error, helperText, required, disabled, children, id, ...props }, ref) => {
    const generatedId = React.useId()
    const fieldsetId = id || generatedId
    const helperId = helperText ? `${fieldsetId}-helper` : undefined
    const errorId = error ? `${fieldsetId}-error` : undefined

    return (
      <div className="w-full">
        <fieldset
          id={fieldsetId}
          ref={ref}
          disabled={disabled}
          className={cn(
            "w-full rounded border border-input p-4 space-y-3",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-destructive",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId || helperId}
          {...props}
        >
          {legend && (
            <legend
              className={cn(
                "text-sm font-medium text-foreground px-1",
                error && "text-destructive"
              )}
            >
              {legend}
              {required && (
                <span className="text-destructive ml-1" aria-label="required">
                  *
                </span>
              )}
            </legend>
          )}
          {children}
        </fieldset>
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-destructive"
            role="alert"
          >
            {helperText || "Please correct the errors in this field group"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Fieldset.displayName = "Fieldset"

export { Fieldset }
