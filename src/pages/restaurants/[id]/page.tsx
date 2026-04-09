import { BackButton } from "@/components/back-button";
import { getRestaurantById } from "@/services/restaurants";
import { RestaurantView } from "./components/restaurant";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getRestaurantById(id).then((res) => setRestaurant(res.data));
    }
  }, [id]);

  if (!restaurant) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <RestaurantView restaurant={restaurant} />
    </main>
  );
}
