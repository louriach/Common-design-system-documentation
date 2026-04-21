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
        className={cn("ds-breadcrumb", className)}
        {...props}
      >
        <ol className="ds-breadcrumb__list">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return (
                <li key={index} className="ds-breadcrumb__item-inner">
                  {React.cloneElement(child as React.ReactElement<any>, {
                    isLast: index === React.Children.count(children) - 1,
                    separator: separator,
                  })}
                  {index < React.Children.count(children) - 1 && (
                    <span className="ds-breadcrumb__separator">
                      {separator || <ChevronRight style={{ width: '1rem', height: '1rem' }} />}
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
            ? "text-foreground font-medium"
            : "text-muted-foreground hover:text-foreground"
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
          className={cn("ds-breadcrumb__item-link", className)}
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
        className={cn("ds-breadcrumb__item-link hover:underline", className)}
        {...props}
      >
        {content}
      </Link>
    )
  }
)
BreadcrumbItem.displayName = "BreadcrumbItem"

export { Breadcrumb, BreadcrumbItem }
