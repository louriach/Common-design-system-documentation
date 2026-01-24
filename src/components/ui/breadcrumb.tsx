import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-1 text-sm", className)}
        {...props}
      >
        <ol className="flex items-center space-x-1">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return (
                <li key={index} className="flex items-center">
                  {React.cloneElement(child as React.ReactElement<any>, {
                    isLast: index === React.Children.count(children) - 1,
                    separator: separator,
                  })}
                  {index < React.Children.count(children) - 1 && (
                    <span className="mx-2 text-gray-400 dark:text-gray-500">
                      {separator || <ChevronRight className="h-4 w-4" />}
                    </span>
                  )}
                </li>
              )
            }
            return child
          })}
        </ol>
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export interface BreadcrumbItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  isLast?: boolean
  separator?: React.ReactNode
}

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ className, href, isLast, children, ...props }, ref) => {
    const content = (
      <span
        className={cn(
          "transition-colors",
          isLast
            ? "text-gray-900 dark:text-gray-100 font-medium"
            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        )}
      >
        {children}
      </span>
    )

    if (isLast || !href) {
      return (
        <span
          ref={ref as any}
          aria-current="page"
          className={cn("flex items-center", className)}
          {...(props as any)}
        >
          {content}
        </span>
      )
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={cn("flex items-center hover:underline", className)}
        {...props}
      >
        {content}
      </Link>
    )
  }
)
BreadcrumbItem.displayName = "BreadcrumbItem"

export { Breadcrumb, BreadcrumbItem }
