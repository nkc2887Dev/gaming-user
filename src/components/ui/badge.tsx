"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg shadow-xl border px-1 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-50",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        sports: "border-red-100 bg-white !text-black min-w-[1.25rem] justify-center",
      },
      position: {
        topRight: "absolute top-[-10] right-[-25] ",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "topRight",
      shadow: "red",
    },
    shadow: {
        red: "shadow-xl shadow-[rgba(255,0,0,0.5)]", // Red shadow with some transparency
      },
  },
)

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className ?? "")} {...props} />
}

export { Badge, badgeVariants }

