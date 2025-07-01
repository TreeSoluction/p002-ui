import { getCities } from "@/services/cities";
import City from "./components/city";

export default async function Page() {
  const cities = await getCities();

  return (
    <>
      <City initialData={cities} />
    </>
  );
}
