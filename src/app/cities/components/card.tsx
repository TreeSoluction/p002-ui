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
      className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.01] duration-200"
    >
      <div className="relative h-48 w-full">
        <Image
          src={city.imagem}
          alt={city.nome}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{city.nome}</h2>
      </div>
    </Link>
  );
}
