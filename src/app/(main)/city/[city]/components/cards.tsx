import { ICityCategory } from "@/interfaces/ICity";
import Image from "next/image";
import Link from "next/link";

export function CityCards({
  category,
  cityId,
}: {
  category: ICityCategory;
  cityId: string;
}) {
  return (
    <Link
      href={`/category/${category.id}?cityId=${cityId}`}
      className="flex flex-col items-center justify-start gap-2 w-full max-w-[120px] sm:max-w-[140px] md:max-w-[240px] lg:max-w-[260px] transition-transform hover:scale-105"
    >
      <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-md bg-white">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs sm:text-sm font-bold uppercase text-center break-words leading-tight">
        {category.name}
      </p>
    </Link>
  );
}
