import { FeaturesScroll } from "@/components/feature-scroll";
import { ICity } from "@/interfaces/ICity";
import { getAllCities } from "@/services/cities";
import Image from "next/image";
import ParkingWithCityFilter from "./components/parkingsFilters";

type Params = Promise<{ city: string }>;
type SearchParams = Promise<{ cityId: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  let city: ICity | undefined;
  let cityId: string | undefined;
  const cities = (await getAllCities()).data;
  const searchParams = await props.searchParams;

  if (searchParams.cityId) {
    cityId = searchParams.cityId;
    city = cities.find((c) => c.id === +searchParams.cityId);
  }

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/parking-2.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Estacionamentos</h1>
      </div>

      <ParkingWithCityFilter city={city} />
    </>
  );
}
