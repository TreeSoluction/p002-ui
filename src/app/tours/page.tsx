import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import Image from "next/image";

export default function Page() {
  const states = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
  ];

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/tours.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Excursões</h1>
      </div>

      <CityCarousel />

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-6">
        {states.map((state) => (
          <div
            key={state}
            className="bg-blue-900 text-white rounded-lg shadow text-center flex items-center justify-center p-2 cursor-pointer hover:brightness-110"
            style={{ height: "100px", width: "100%" }}
          >
            <span className="text-sm font-medium">{state}</span>
          </div>
        ))}
      </div>
    </>
  );
}
