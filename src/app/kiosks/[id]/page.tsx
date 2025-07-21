import { BackButton } from "@/components/back-button";
import { getKioskById } from "@/services/kiosk";
import { KioskView } from "./components/kiosk";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const id = (await props.params).id;

  const kiosk = await getKioskById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <KioskView kiosk={kiosk.data} />
    </main>
  );
}
