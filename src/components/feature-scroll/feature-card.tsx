import Link from "@/components/link";
import { FeatureCardProps } from "@/interfaces/IFeatureCard";
import Image from "next/image";

export function FeatureCard({
  icon,
  label,
  url,
  className = "",
  textSize = "text-[10px]",
  ...rest
}: FeatureCardProps) {
  return (
    <Link
      href={url}
      className={`flex flex-col items-center justify-center px-1 py-2 ${className}`}
      {...rest}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 relative mb-1 shrink-0">
        <Image
          src={icon}
          alt={label}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 40px, 48px"
        />
      </div>
      <span
        className={`${textSize} font-semibold text-center uppercase text-[#0E2F4B] leading-tight`}
      >
        {label}
      </span>
    </Link>
  );
}
