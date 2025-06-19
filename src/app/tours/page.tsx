import { CityCarousel } from "@/components/carousel";
import { FeaturesScroll } from "@/components/feature-scroll";
import { QueryProvider } from "@/providers/query-client-provider";
import { fetchTours } from "@/services/tours";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Tours from "./components/tours";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: fetchTours,
  });

  return (
    <QueryProvider dehydratedState={dehydrate(queryClient)}>
      <FeaturesScroll />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <Image
          src={"/icon/tours.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Excursões</h1>
      </div>

      <CityCarousel />

      <Tours />
    </QueryProvider>
  );
}
