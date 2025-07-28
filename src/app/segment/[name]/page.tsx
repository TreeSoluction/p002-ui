import { BackButton } from "@/components/back-button";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllCities, getCityById } from "@/services/cities";
import { getAllStores } from "@/services/store";
import Store from "./components/stores";

type Params = Promise<{ name: string }>;
type SearchParams = Promise<{ cityId: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const cities = (await getAllCities(10000, 0)).data;
  const cityId = searchParams.cityId;

  const cityResponse = await getCityById(cityId);
  const city = cityResponse.data;

  const segment = city.categorias?.find(
    (cat) => cat.nome === decodeURIComponent(params.name),
  );

  const stores = await getAllStores({
    size: 10,
    page: 0,
    nome: params.name,
    cidade: city?.nome,
  });

  if (!segment) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          Segmento não encontrado
        </h1>
      </div>
    );
  }

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="px-4 mb-2">
        <BackButton />
      </div>

      <div className="px-4 mb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">{segment.nome}</h1>
      </div>

      <Store
        initialData={stores}
        segment={segment}
        cityId={cityId}
        cities={cities}
      />
    </>
  );
}
