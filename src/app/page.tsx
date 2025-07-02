import { FeatureCard } from "@/components/feature-scroll/feature-card";
import { features } from "@/utils/features";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="w-full my-4">
        <Image
          src="/anuncio.png"
          alt="Imagem de Anúncio"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-4xl"
          priority
        />
      </div>

      <div className="py-6">
        <div className="grid grid-cols-4 gap-x-1 gap-y-3 place-items-center">
          {features.slice(0, 8).map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              label={item.label}
              url={item.url}
              textSize="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]"
            />
          ))}
        </div>
      </div>

      <div className="text-center py-6 my-4 rounded-bl-4xl rounded-tr-4xl text-white bg-green-bg text-sm sm:text-base md:text-base px-4">
        CONFIRA O CALENDÁRIO DAS FERIAS
      </div>
    </div>
  );
}
