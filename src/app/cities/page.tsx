import { getAllCities } from "@/services/cities";
import City from "./components/city";

export default async function Page() {
  const cities = await getAllCities();

  return (
    <>
      <City initialData={cities} />
    </>
  );
}
