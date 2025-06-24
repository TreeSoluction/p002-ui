import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllTransporters } from "@/services/transporters";
import Image from "next/image";
import { TransportCard } from "./components/card";

export default async function Page() {
  const transporters = await getAllTransporters();

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/transporters.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Transportadoras</h1>
      </div>

      <CityCarousel />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        {transporters.data.map((transporter) => (
          <TransportCard key={transporter.id} data={transporter} />
        ))}
      </div>
    </>
  );
}
