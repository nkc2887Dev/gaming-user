"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // "inline-flex items-center rounded-lg shadow-xl border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-50",
  "inline-flex items-center px-1 py-0.5 z-50",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        sports: "border-red-100",
      },
      position: {
        topRight: "absolute -top-2.5 right-0",
        right: "absolute top-0 -right-3",
      },
      shadow: {
         red: "shadow-xs shadow-[#FF0000]", 
      },
    },
    defaultVariants: {
      // variant: "default",
      position: "topRight",
      shadow: "red",
    },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, position, shadow, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, position, shadow }), className ?? "")} {...props} />
}

export { Badge, badgeVariants }

