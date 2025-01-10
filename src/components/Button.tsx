import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "absolute flex size-10 items-center justify-center rounded border border-accent-3 bg-accent-2",
        props.className,
      )}
      type={"button"}
      {...props}
    >
      {children}
    </button>
  );
}
