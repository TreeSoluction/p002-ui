import { FeatureCard } from "@/components/feature-scroll/feature-card";

const features = [
  { icon: "/icon/tours.svg", label: "Excursões", url: "/tours" },
  {
    icon: "/icon/transporters.svg",
    label: "Transportadoras",
    url: "/transporters",
  },
  {
    icon: "/icon/accommodation.svg",
    label: "Hospedagem",
    url: "/accommodation",
  },
  { icon: "/icon/restaurants.svg", label: "Restaurantes", url: "/restaurants" },
  { icon: "/icon/kiosk.svg", label: "Quiosques", url: "/kiosks" },
  { icon: "/icon/parking-2.svg", label: "Estacionamentos", url: "/parkings" },
];

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
