"use client";

import {
  SelectContentProps,
  SelectItemProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectProps,
} from "@/@types/common";
import { Listbox } from "@headlessui/react";

export function Select<T>({
  children,
  value,
  onChange,
  className,
}: SelectProps<T>) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className={`${className} relative left-0 w-1/2`}>{children}</div>
    </Listbox>
  );
}

export function SelectTrigger({
  children,
  className = "",
  ...props
}: SelectTriggerProps) {
  return (
    <Listbox.Button
      className={`w-full p-2 border border-gray-300 rounded bg-white ${className}`}
      {...props}
    >
      {children}
    </Listbox.Button>
  );
}

export function SelectContent({
  children,
  className = "",
}: SelectContentProps) {
  return (
    <Listbox.Options
      className={`absolute mt-1 w-full bg-white shadow-lg rounded z-10 ${className}`}
    >
      {children}
    </Listbox.Options>
  );
}

export function SelectItem<T>({
  value,
  children,
  className = "",
}: SelectItemProps<T>) {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) =>
        `cursor-pointer select-none p-2 ${active ? "bg-gray-200" : ""} ${className}`
      }
    >
      {children}
    </Listbox.Option>
  );
}

export function SelectValue({ placeholder }: SelectValueProps) {
  return <span>{placeholder}</span>;
}
