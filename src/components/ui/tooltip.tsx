"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: string
  children: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
  delay?: number
  disabled?: boolean
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, placement = "top", delay = 200, disabled, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const timeoutRef = React.useRef<NodeJS.Timeout | undefined>(undefined)

    const handleMouseEnter = React.useCallback(() => {
      if (disabled) return
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, delay)
    }, [disabled, delay])

    const handleMouseLeave = React.useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      setIsVisible(false)
    }, [])

    React.useEffect(() => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [])

    const placementClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2"
    }

    const arrowClasses = {
      top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-gray-100 border-l-transparent border-r-transparent border-b-transparent",
      bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-gray-100 border-l-transparent border-r-transparent border-t-transparent",
      left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-gray-100 border-t-transparent border-b-transparent border-r-transparent",
      right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-gray-100 border-t-transparent border-b-transparent border-l-transparent"
    }

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        {isVisible && !disabled && (
          <div
            role="tooltip"
            className={cn(
              "absolute z-50 px-3 py-1.5 text-sm text-white dark:text-gray-900 bg-gray-900 dark:bg-gray-100 rounded-md shadow-lg whitespace-nowrap",
              placementClasses[placement],
              "animate-in fade-in-0 zoom-in-95 duration-200"
            )}
          >
            {content}
            <div
              className={cn(
                "absolute w-0 h-0 border-4",
                arrowClasses[placement]
              )}
            />
          </div>
        )}
      </div>
    )
  }
)
Tooltip.displayName = "Tooltip"

export { Tooltip }
