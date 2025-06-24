import { FeatureCard } from "@/components/feature-scroll/feature-card";
import { features } from "@/utils/features";

export function FeaturesScroll() {
  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent w-full">
      <div className="flex w-max gap-6 px-4 py-4 mx-auto">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            label={item.label}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
