import { BackButton } from "@/components/back-button";
import { FeaturesScroll } from "@/components/feature-scroll";
import { getAllCities, getCityById } from "@/services/cities";
import { getAllStores } from "@/services/store";
import Store from "./components/stores";

import type { ISegment } from "@/interfaces/ISegment";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const [searchParams] = useSearchParams();
  const cityId = searchParams.get("cityId") ?? undefined;

  const [cities, setCities] = useState<any[]>([]);
  const [segment, setSegment] = useState<ISegment | null>(null);
  const [stores, setStores] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const citiesRes = await getAllCities(10000, 0);
        setCities(citiesRes.data);

        if (cityId) {
          const cityRes = await getCityById(cityId);
          const cityData = cityRes.data;

          if (name && cityData.categorias) {
            const foundSegment = cityData.categorias.find(
              (cat: ISegment) => cat.nome === decodeURIComponent(name),
            );
            setSegment(foundSegment || null);
          }

          const storesRes = await getAllStores({
            size: 10,
            page: 0,
            nome: name ? decodeURIComponent(name) : undefined,
            cidade: cityData.nome,
          });
          setStores(storesRes);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [name, cityId]);

  if (loading) return <div className="p-4">Carregando...</div>;

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
