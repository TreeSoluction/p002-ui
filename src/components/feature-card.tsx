import { FeatureCardProps } from "@/interfaces/IFeatureCard";
import Image from "next/image";

export function FeatureCard({ icon, label }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[100px] px-2">
      <div className="w-12 h-12 relative mb-2">
        <Image src={icon} alt={label} fill className="object-contain" />
      </div>
      <span className="text-sm text-center">{label}</span>
    </div>
  );
}
