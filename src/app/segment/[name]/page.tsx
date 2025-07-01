import { getAllStores } from "@/services/store";
import { segments } from "@/utils/segments";
import Store from "./components/stores";

type Params = Promise<{ name: string }>;
type SearchParams = Promise<{ cityId: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const segment = segments.find(
    (segment) => segment.name === decodeURIComponent(params.name),
  );

  const stores = await getAllStores(10, 0, params.name, searchParams.cityId);

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
      <Store
        initialData={stores}
        segment={segment}
        cityId={searchParams.cityId}
      />
    </>
  );
}
