import type { ComponentProps } from "react";
import { cn } from "./ui";

type Props = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] disabled:opacity-60 disabled:pointer-events-none active:scale-[0.98]",
        size === "sm" ? "px-4 py-2 text-sm" : "px-6 py-3 text-sm",
        variant === "primary" &&
          "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)]",
        variant === "secondary" &&
          "border border-white/10 text-gray-200 hover:border-white/20 hover:text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        variant === "ghost" && 
          "text-gray-300 hover:text-white hover:bg-white/5",
        className
      )}
      {...props}
    />
  );
}
