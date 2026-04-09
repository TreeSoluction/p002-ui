import Link from "../../../components/link";
import type { ICity } from "../../../interfaces/ICity";

interface CityCardProps {
  city: ICity;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <Link
      to={`segment?cityId=${city.id}`}
      className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg hover:scale-[1.02] duration-200 flex flex-col"
    >
      <div className="relative w-full h-32 sm:h-40 md:h-48">
        <img
          src={city.imagem || "/logo.png"}
          alt={city.nome}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
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
