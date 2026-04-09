import { BackButton } from "../../../components/back-button";
import { getAccommodationById } from "../../../services/accommodation";
import { AccommodationView } from "./components/accommodation";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [accommodation, setAccommodation] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getAccommodationById(id).then((res) => setAccommodation(res.data));
    }
  }, [id]);

  if (!accommodation) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <AccommodationView accommodation={accommodation} />
    </main>
  );
}
