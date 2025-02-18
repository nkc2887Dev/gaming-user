"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <div
      className={cn(
        "z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

interface DialogComponentProps {
  children: React.ReactNode;
  className?: string;
}

export function DialogContent({ children, className }: DialogComponentProps) {
  return <div className={cn("p-6", className ?? "")}>{children}</div>;
}

export function DialogHeader({ children, className }: DialogComponentProps) {
  return (
    <div className={cn("border-b px-6 py-4", className ?? "")}>{children}</div>
  );
}

export function DialogTitle({ children, className }: DialogComponentProps) {
  return (
    <h2 className={cn("text-lg font-medium", className ?? "")}>{children}</h2>
  );
}
