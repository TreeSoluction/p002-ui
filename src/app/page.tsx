import { Banner } from "@/components/banner";
import { CitiesCarousel } from "@/components/cities-scroll";
import { FeatureCard } from "@/components/feature-scroll/feature-card";
import { getAllCities } from "@/services/cities";
import { features } from "@/utils/features";

export default async function Home() {
  const cities = (await getAllCities()).data;

  const carouselImages = ["/anuncio.png", "/anuncio.png", "/anuncio.png"];

  return (
    <div className="">
      <div className="py-4">
        <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
          Selecione uma cidade
        </h2>
        <CitiesCarousel cities={cities} />
      </div>

      <div className="w-full my-4">
        <Banner
          images={carouselImages}
          autoPlay={true}
          autoPlayInterval={5000}
          className=""
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
