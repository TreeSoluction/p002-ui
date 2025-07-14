import { BackButton } from "@/components/back-button";
import { getStoreById } from "@/services/store";
import { StoreView } from "./components/store";

type Params = Promise<{ store: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const id = (await props.searchParams).id;

  const store = await getStoreById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <StoreView store={store.data} />
    </main>
  );
}
