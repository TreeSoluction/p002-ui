import { Carousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import cities from "@/utils/cities";
import { CityCards } from "./components/cards";

type Params = Promise<{ city: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const city = cities.find(
    (c) =>
      c.name.toLowerCase() === params.city.replaceAll("-", " ").toLowerCase(),
  );

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
        {city.category?.map((category, index) => (
          <CityCards category={category} cityId={city.id} key={index} />
        ))}
      </div>
    </div>
  );
}
