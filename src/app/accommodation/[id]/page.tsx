import { BackButton } from "@/components/back-button";
import { getAccommodationById } from "@/services/accommodation";
import { AccommodationView } from "./components/accommodation";

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const id = (await props.params).id;

  const accommodation = await getAccommodationById(id);

  return (
    <main className="p-4">
      <div className="mb-2">
        <BackButton />
      </div>

      <AccommodationView accommodation={accommodation.data} />
    </main>
  );
}
