import Link from "@/components/link";
import { FeatureCardProps } from "@/interfaces/IFeatureCard";
import Image from "next/image";

export function FeatureCard({
  icon,
  label,
  url,
  className,
  iconSize = "w-12 h-12",
  textSize = "text-lg",
  ...rest
}: FeatureCardProps) {
  return (
    <Link
      href={url}
      className={`${
        className
          ? className
          : "flex flex-col items-center justify-center min-w-[100px] px-2"
      }`}
      {...rest}
    >
      <div className={`relative mb-2 ${iconSize}`}>
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      <span
        className={`${textSize} font-bold text-center tracking-wide uppercase text-[#0E2F4B]`}
      >
        {label}
      </span>
    </Link>
  );
}
