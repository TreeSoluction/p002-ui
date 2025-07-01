import { Segments } from "./components/segments";

type Params = Promise<{ city: string }>;
type SearchParams = Promise<{ cityId: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  return (
    <>
      <Segments cityId={searchParams.cityId} />
    </>
  );
}
