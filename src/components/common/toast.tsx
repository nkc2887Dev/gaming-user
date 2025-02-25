import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClose?: () => void;
}

const bgColors: Record<string, string> = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};
const positions: Record<string, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  position = "top-right",
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed z-50 flex items-center gap-3 px-4 py-2 text-white rounded shadow-md transition-opacity",
        "min-w-[250px] max-w-sm",
        bgColors[type],
        positions[position]
      )}
    >
      <span>{message}</span>
      <button onClick={() => setVisible(false)}>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
