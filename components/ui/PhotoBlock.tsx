import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface PhotoBlockProps {
  className?:  string;
  label?:      string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  rounded?:    boolean;
  imageSrc?:   string;
  imageAlt?:   string;
}

const aspectMap = {
  square:   "aspect-square",
  video:    "aspect-video",
  portrait: "aspect-[3/4]",
  wide:     "aspect-[16/7]",
};

export function PhotoBlock({
  className,
  label,
  aspectRatio = "video",
  rounded     = true,
  imageSrc,
  imageAlt,
}: PhotoBlockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden flex items-center justify-center",
        "bg-gradient-to-br from-[var(--color-forest-light)] to-[var(--color-sand)]",
        aspectMap[aspectRatio],
        rounded && "rounded-2xl",
        className,
      )}
      role="img"
      aria-label={label ?? "Photo placeholder"}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt ?? label ?? "Academic photo"}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-[var(--color-forest-mid)] opacity-50">
          <ImageIcon size={32} />
          {label && (
            <span className="text-xs font-medium font-sans uppercase tracking-wider">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
