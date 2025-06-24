import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/knitting.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Malharias</h1>
      </div>

      <CityCarousel />
    </>
  );
}
