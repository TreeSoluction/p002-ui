import { BackButton } from "@/components/back-button";
import { getKioskById } from "@/services/kiosk";
import { KioskView } from "./components/kiosk";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [kiosk, setKiosk] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getKioskById(id).then((res) => setKiosk(res.data));
    }
  }, [id]);

  if (!kiosk) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <KioskView kiosk={kiosk} />
    </main>
  );
}
