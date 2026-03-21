"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
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

const sizeClasses = {
  sm: "ds-dialog--sm",
  md: "ds-dialog--md",
  lg: "ds-dialog--lg",
  xl: "ds-dialog--xl",
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onOpenChange, title, description, children, size = "md", closable = true, ...props }, ref) => {
    const isControlled = open !== undefined
    const [openState, setOpenState] = React.useState(true)
    const isOpen = isControlled ? open ?? false : openState

    const handleOpenChange = React.useCallback(
      (next: boolean) => {
        if (!isControlled) setOpenState(next)
        onOpenChange?.(next)
      },
      [isControlled, onOpenChange]
    )

    return (
      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="ds-dialog-backdrop fixed inset-0 z-50" />
          <Dialog.Content
            ref={ref}
            className={cn("ds-dialog-content", sizeClasses[size])}
            aria-labelledby={title ? "modal-title" : undefined}
            aria-describedby={description ? "modal-description" : undefined}
            onClick={(e) => e.stopPropagation()}
            {...props}
          >
            {(title || closable) && (
              <div className="ds-dialog-header">
                <div className="flex flex-1 flex-col">
                  {title && (
                    <Dialog.Title id="modal-title" className="ds-dialog-title">
                      {title}
                    </Dialog.Title>
                  )}
                  {description && (
                    <Dialog.Description id="modal-description" className="ds-dialog-description">
                      {description}
                    </Dialog.Description>
                  )}
                </div>
                {closable && (
                  <Dialog.Close
                    className="ds-dialog-close inline-flex"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </Dialog.Close>
                )}
              </div>
            )}
            <div className="ds-dialog-body">{children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }
)
Modal.displayName = "Modal"

export { Modal }
