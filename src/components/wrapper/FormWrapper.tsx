"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

type FormWrapperProps = React.FormHTMLAttributes<HTMLFormElement> & {
  disabled?: boolean;
  formRef?: React.ForwardedRef<HTMLFormElement>;
};

export function FormWrapper({
  onSubmit,
  disabled = false,
  formRef,
  children,
  className,
  ...props
}: FormWrapperProps) {
  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className={cn(
        disabled && "opacity-50 pointer-events-none",
        "space-y-4",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
}
