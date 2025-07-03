import { ICity } from "@/interfaces/ICity";
import { getAllCities } from "@/services/cities";
import { SegmentPageClient } from "./components/cities";

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
    <SegmentPageClient
      cities={cities}
      initialCity={city}
      initialCityId={cityId}
    />
  );
}
