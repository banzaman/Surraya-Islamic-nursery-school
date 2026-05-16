import { cn } from "@/lib/utils";

type Padding = "sm" | "md" | "lg";

interface CardProps {
  className?:  string;
  children:    React.ReactNode;
  hover?:      boolean;
  bordered?:   boolean;
  padding?:    Padding;
  as?:         React.ElementType;
}

const paddingMap: Record<Padding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  className,
  children,
  hover    = false,
  bordered = false,
  padding  = "md",
  as: Tag  = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl bg-white",
        paddingMap[padding],
        bordered && "border border-[var(--color-border)]",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer",
        "shadow-sm",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
