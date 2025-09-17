import { BackButton } from "@/components/back-button";
import { getAllCities } from "@/services/cities";
import City from "./components/city";

export const dynamic = "force-dynamic";

export default async function Page() {
  const cities = await getAllCities();

  return (
    <>
      <div className="px-4 m-2">
        <BackButton />
      </div>

      <City initialData={cities} />
    </>
  );
}
