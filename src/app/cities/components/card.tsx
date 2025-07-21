import Link from "@/components/link";
import { ICity } from "@/interfaces/ICity";
import Image from "next/image";

interface CityCardProps {
  city: ICity;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link
      href={`segment?cityId=${city.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.02] duration-200 flex flex-col"
    >
      <div className="relative w-full h-32 sm:h-40 md:h-48">
        <Image
          src={city.imagem || "/logo.png"}
          alt={city.nome}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="p-4 text-center flex-1 flex items-center justify-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 truncate">
          {city.nome}
        </h2>
      </div>
    </Link>
  );
}
