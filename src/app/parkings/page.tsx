import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllParkings } from "@/services/parkings";
import Image from "next/image";
import Parkings from "./components/parkings";

export default async function Page() {
  const parkings = await getAllParkings();

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/parking-2.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Estacionamentos</h1>
      </div>

      <CityCarousel />

      <Parkings initialData={parkings} />
    </>
  );
}
