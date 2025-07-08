import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllFreetters } from "@/services/freetter";
import Image from "next/image";
import Freetter from "./components/freetter";

export default async function Page() {
  const freetter = await getAllFreetters();

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/freetter.svg"}
          alt={"Freteiros"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Freteiros</h1>
      </div>

      <Freetter initialData={freetter} />
    </>
  );
}
