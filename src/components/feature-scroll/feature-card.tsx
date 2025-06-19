import { FeatureCardProps } from "@/interfaces/IFeatureCard";
import Image from "next/image";
import Link from "next/link";

export function FeatureCard({ icon, label, url }: FeatureCardProps) {
  return (
    <Link
      href={url}
      className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[100px] px-2"
    >
      <div className="w-12 h-12 relative mb-2">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      <span className="text-sm text-center">{label}</span>
    </Link>
  );
}
