import { BackButton } from "@/components/back-button";
import { getKnitwearById } from "@/services/knitwear";
import { KnitwearView } from "./components/knitwear";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [knitwear, setKnitwear] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getKnitwearById(id).then((res) => setKnitwear(res.data));
    }
  }, [id]);

  if (!knitwear) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <KnitwearView knitwear={knitwear} />
    </main>
  );
}
