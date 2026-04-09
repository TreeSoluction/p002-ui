import { useEffect, useState } from "react";
import { BackButton } from "../../components/back-button";
import type { ICity } from "../../interfaces/ICity";
import type { IResponse } from "../../interfaces/IResponse";
import { getAllCities } from "../../services/cities";
import City from "./components/city";

export default function CitiesPage() {
  const [cities, setCities] = useState<IResponse<ICity[]> | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const request = await getAllCities();
        setCities(request);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <>
      <div className="px-4 m-2">
        <BackButton />
      </div>

      {cities && <City initialData={cities} />}
    </>
  );
}
