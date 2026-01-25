"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "success" | "warning" | "error"
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, showLabel = false, size = "md", variant = "default", ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizeClasses = {
      sm: "h-1",
      md: "h-2",
      lg: "h-3"
    }

    const variantClasses = {
      default: "bg-blue-600 dark:bg-blue-500",
      success: "bg-green-600 dark:bg-green-500",
      warning: "bg-yellow-600 dark:bg-yellow-500",
      error: "bg-red-600 dark:bg-red-500"
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {showLabel && (
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-700 dark:text-gray-300">Progress</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={cn(
            "w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden",
            sizeClasses[size]
          )}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={showLabel ? undefined : `Progress: ${Math.round(percentage)}%`}
        >
          <div
            className={cn(
              "h-full transition-all duration-300 ease-out rounded-full",
              variantClasses[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export { Progress }
