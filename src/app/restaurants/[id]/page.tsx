import { BackButton } from "@/components/back-button";
import { getRestaurantById } from "@/services/restaurants";
import { RestaurantView } from "./components/restaurant";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const id = (await props.params).id;

  const restaurant = await getRestaurantById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <RestaurantView restaurant={restaurant.data} />
    </main>
  );
}
