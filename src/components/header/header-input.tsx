"use client";

import { getAllStores } from "@/services/store";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderInput() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stores", debouncedValue],
    queryFn: () =>
      getAllStores({
        page: 0,
        size: 10,
        nome: debouncedValue,
      }),
    enabled: !!debouncedValue.trim(),
    staleTime: 0,
  });

  return (
    <div className="w-full px-4 max-w-md mx-auto relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar lojas..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-full px-5 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-10"
        />
        <Search
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          size={18}
        />
      </div>

      {isLoading && (
        <pre className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow text-sm p-2 text-gray-500">
          Buscando lojas...
        </pre>
      )}

      {isError && (
        <pre className="absolute z-10 left-0 right-0 mt-1 bg-white border border-red-300 rounded shadow text-sm p-2 text-red-500">
          Erro ao buscar lojas.
        </pre>
      )}

      {data && data.data.length > 0 && (
        <ul className="absolute z-10 left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded shadow">
          {data.data.map((store) => (
            <li
              key={store.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <Link
                href={`/store/${encodeURIComponent(store.nome)}?id=${store.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {store.nome}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {data && data.data.length === 0 && !isLoading && (
        <pre className="absolute z-10 left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow text-sm p-2 text-gray-500">
          Nenhuma loja encontrada.
        </pre>
      )}
    </div>
  );
}
