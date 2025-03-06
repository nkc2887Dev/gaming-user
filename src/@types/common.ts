import { Dispatch, SetStateAction } from "react";

export interface ISportsMenu {
  isMobile?: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isMenuOpen?: boolean;
}

export interface MasterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClose?: () => void;
}

export interface DialogComponentProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export interface IGradientButton {
  label: string;
  redirect?: string;
  className?: string;
  size?: "lg" | "default" | "sm" | "icon";
  onclick?: () => void;
}

export interface SelectProps<T> {
  value: T;
  onChange: (value: T) => void;
  children: React.ReactNode;
  className?: string;
}
export interface SelectTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export interface SelectContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface SelectItemProps<T> {
  value: T;
  children: React.ReactNode;
  className?: string;
}

export interface SelectValueProps {
  placeholder: string;
}
