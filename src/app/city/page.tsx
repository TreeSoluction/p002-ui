import { Carousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getCityById } from "@/services/cities";
import { segments } from "@/utils/segments";
import { CityCards } from "./components/cards";

type Params = Promise<{ city: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const city = (await getCityById(searchParams.id)).data;

  if (city === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          Cidade não encontrada
        </h1>
      </div>
    );
  }

  return (
    <div>
      <FeaturesScroll />

      <Carousel initialCityName={params.city.replaceAll("-", " ")} />

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 px-4">
        {segments.map((segment, index) => (
          <CityCards segment={segment} cityId={city.id} key={index} />
        ))}
      </div>
    </div>
  );
}
