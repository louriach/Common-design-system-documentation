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
            "w-full rounded-md border border-gray-300 dark:border-gray-700 p-4 space-y-3",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error &&
              "border-red-500 dark:border-red-500",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId || helperId}
          {...props}
        >
          {legend && (
            <legend
              className={cn(
                "text-sm font-medium text-gray-700 dark:text-gray-300 px-1",
                error && "text-red-600 dark:text-red-400"
              )}
            >
              {legend}
              {required && (
                <span className="text-red-500 ml-1" aria-label="required">
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
            className="mt-1.5 text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {helperText || "Please correct the errors in this field group"}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Fieldset.displayName = "Fieldset"

export { Fieldset }
