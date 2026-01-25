"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  closable?: boolean
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onOpenChange, title, description, children, size = "md", closable = true, ...props }, ref) => {
    // Use the open prop directly, defaulting to true for live demos
    // This ensures consistent server/client rendering
    const isOpen = open !== undefined ? open : true
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])

    const handleClose = React.useCallback(() => {
      onOpenChange?.(false)
    }, [onOpenChange])

    const handleBackdropClick = React.useCallback((e: React.MouseEvent) => {
      if (e.target === e.currentTarget && closable) {
        handleClose()
      }
    }, [closable, handleClose])

    React.useEffect(() => {
      if (mounted && isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [mounted, isOpen])

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
      return null
    }

    if (!isOpen) return null

    const sizeClasses = {
      sm: "max-w-md",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl"
    }

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        aria-describedby={description ? "modal-description" : undefined}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70" />
        
        {/* Modal Content */}
        <div
          ref={ref}
          className={cn(
            "relative z-50 w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg",
            "border border-gray-200 dark:border-gray-800",
            sizeClasses[size],
            "max-h-[90vh] overflow-y-auto"
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          {/* Header */}
          {(title || closable) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex-1">
                {title && (
                  <h2 id="modal-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                  </h2>
                )}
                {description && (
                  <p id="modal-description" className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {description}
                  </p>
                )}
              </div>
              {closable && (
                <button
                  onClick={handleClose}
                  className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Modal.displayName = "Modal"

export { Modal }
