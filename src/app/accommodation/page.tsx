import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllAccommodations } from "@/services/accommodation";
import Image from "next/image";
import Accommodation from "./components/accommodation";

export default async function Page() {
  const accommodation = await getAllAccommodations();

  return (
    <>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/accommodation.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Hospedagens</h1>
      </div>

      <Accommodation initialData={accommodation} />
    </>
  );
}
