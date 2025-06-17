import { FeatureCard } from "@/components/feature-card";

const features = [
  { icon: "/icon/tours.svg", label: "Excursões" },
  { icon: "/icon/transporters.svg", label: "Transportadoras" },
  { icon: "/icon/accommodation.svg", label: "Hospedagem" },
  { icon: "/icon/restaurants.svg", label: "Restaurantes" },
  { icon: "/icon/kiosk.svg", label: "Quiosques" },
  { icon: "/icon/parking-2.svg", label: "Estacionamentos" },
];

export function FeaturesScroll() {
  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-transparent">
      <div className="w-full flex justify-center gap-6 px-4 py-4">
        {features.map((item, index) => (
          <FeatureCard key={index} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
}
