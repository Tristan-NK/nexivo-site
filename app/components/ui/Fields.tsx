import type { ComponentProps } from "react";
import { cn } from "./ui";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn("block text-sm font-medium text-gray-300 mb-2", className)}
      {...props}
    />
  );
}

export function Hint({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-xs text-gray-500 mt-2", className)} {...props} />
  );
}

const control =
  "w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-gray-100 placeholder:text-gray-600 shadow-inner backdrop-blur-sm transition-all focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 focus:bg-black/60";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return <input className={cn(control, className)} {...props} />;
}

export function Select({ className, ...props }: ComponentProps<"select">) {
  return <select className={cn(control, "pr-9 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat [&>option]:bg-[#0f172a]", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">) {
  return <textarea className={cn(control, "min-h-[120px] resize-y", className)} {...props} />;
}
