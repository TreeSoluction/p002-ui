import { BackButton } from "@/components/back-button";
import { getTransporterById } from "@/services/transporters";
import { TransportView } from "./components/transport";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const id = (await props.params).id;

  const transport = await getTransporterById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <TransportView transport={transport.data} />
    </main>
  );
}
