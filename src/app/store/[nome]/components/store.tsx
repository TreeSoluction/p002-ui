"use client";

import { IStore } from "@/interfaces/IStore";
import Image from "next/image";

interface StoreViewProps {
  store: IStore;
}

export function StoreView({ store }: StoreViewProps) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Image
            src={store.imagem}
            alt={store.nome}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{store.nome}</h2>
            <p className="text-sm text-gray-500">{store.categoria}</p>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-600 ml-4">{store.cidade}</div>
      <hr className="my-2" />

      <div className="grid grid-cols-2 gap-2 p-4">
        {store.produtos && store.produtos.length > 0 ? (
          store.produtos.map((base64, index) => (
            <Image
              key={index}
              src={base64}
              alt={`Produto ${index + 1}`}
              width={300}
              height={300}
              className="rounded-md object-cover"
            />
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            Nenhum produto disponível.
          </p>
        )}
      </div>
    </div>
  );
}
