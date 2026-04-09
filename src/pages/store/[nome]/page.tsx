import { BackButton } from "@/components/back-button";
import { getStoreById } from "@/services/store";
import { StoreView } from "./components/store";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [store, setStore] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getStoreById(id).then((res) => setStore(res.data));
    }
  }, [id]);

  if (!store) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <StoreView store={store} />
    </main>
  );
}
