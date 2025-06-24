type Params = Promise<{ city: string }>;
type SearchParams = Promise<{ id: string }>;

export default function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  console.log(props);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">
        Segmento não encontrado
      </h1>
    </div>
  );
}
