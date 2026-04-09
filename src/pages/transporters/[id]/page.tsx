import { BackButton } from "@/components/back-button";
import { getTransporterById } from "@/services/transporters";
import { TransportView } from "./components/transport";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [transport, setTransport] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getTransporterById(id).then((res) => setTransport(res.data));
    }
  }, [id]);

  if (!transport) return <div className="p-4">Carregando...</div>;

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>
      <TransportView transport={transport} />
    </main>
  );
}
