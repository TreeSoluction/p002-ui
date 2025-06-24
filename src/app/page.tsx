import { Carousel } from "@/components/carousel";
import { FeatureCard } from "@/components/feature-scroll/feature-card";
import { features } from "@/utils/features";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Carousel />

      <div className="w-full px-4">
        <Image
          src="/anuncio.png"
          alt="Imagem de Anúncio"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-4xl"
          priority
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-8 px-4 py-6 place-items-center">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            label={item.label}
            url={item.url}
            iconSize="w-16 h-16"
            textSize="text-lg"
          />
        ))}
      </div>

      <div className="w-full text-2xl text-center py-8 my-4 rounded-bl-4xl rounded-tr-4xl text-white bg-green-bg">
        CONFIRA O CALENDÁRIO DAS FERIAS
      </div>

      <div></div>
    </div>
  );
}
