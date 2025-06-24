import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllRestaurants } from "@/services/restaurants";
import Image from "next/image";
import Restaurant from "./components/restaurant";

export default async function Page() {
  const restaurants = await getAllRestaurants();

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/restaurants.svg"}
          alt={"Restaurantes"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Restaurantes</h1>
      </div>

      <CityCarousel />

      <Restaurant initialData={restaurants} />
    </>
  );
}
