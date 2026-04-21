"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  closable?: boolean
}

const sizeClass: Record<string, string> = {
  sm: "ds-dialog--sm",
  md: "ds-dialog--md",
  lg: "ds-dialog--lg",
  xl: "ds-dialog--xl",
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  ({ open, onOpenChange, title, description, children, size = "md", closable = true }, ref) => {
    const internalRef = React.useRef<HTMLDialogElement>(null)
    const dialogRef = (ref as React.RefObject<HTMLDialogElement>) ?? internalRef

    React.useEffect(() => {
      const el = dialogRef.current
      if (!el) return
      if (open) {
        if (!el.open) el.showModal()
      } else {
        if (el.open) el.close()
      }
    }, [open, dialogRef])

    const handleClose = () => onOpenChange?.(false)

    // Close on backdrop click (native dialog renders backdrop outside the element)
    const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
      if (!closable) return
      const rect = e.currentTarget.getBoundingClientRect()
      const clickedOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      if (clickedOutside) handleClose()
    }

    return (
      <dialog
        ref={dialogRef}
        className={cn("ds-dialog-content", sizeClass[size])}
        onClose={handleClose}
        onClick={handleClick}
      >
        {(title || closable) && (
          <div className="ds-dialog-header">
            <div>
              {title && <h2 className="ds-dialog-title">{title}</h2>}
              {description && <p className="ds-dialog-description">{description}</p>}
            </div>
            {closable && (
              <button className="ds-dialog-close" onClick={handleClose} aria-label="Close modal">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="ds-dialog-body">{children}</div>
      </dialog>
    )
  }
)
Modal.displayName = "Modal"

export { Modal }
