import type { FeatureCardProps } from "../../interfaces/IFeatureCard";
import Link from "../link";

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
      to={url}
      className={`flex flex-col items-center justify-center px-1 py-2 ${className}`}
      {...rest}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 mb-1 shrink-0 relative">
        <img src={icon} alt={label} className="object-contain w-full h-full" />
      </div>
      <span
        className={`${textSize} font-semibold text-center uppercase text-[#0E2F4B] leading-tight`}
      >
        {label}
      </span>
    </Link>
  );
}
