import { BackButton } from "@/components/back-button";
import { getKnitwearById } from "@/services/knitwear";
import { KnitwearView } from "./components/knitwear";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const id = (await props.params).id;

  const knitwear = await getKnitwearById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <KnitwearView knitwear={knitwear.data} />
    </main>
  );
}
