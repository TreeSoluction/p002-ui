import { ISegment } from "@/interfaces/ISegment";
import Image from "next/image";
import Link from "next/link";

export function CityCards({
  segment,
  cityId,
}: {
  segment: ISegment;
  cityId: string;
}) {
  return (
    <Link
      href={`/segment/${segment.name}?cityId=${cityId}`}
      className="flex flex-col items-center justify-start gap-2 w-full max-w-[120px] sm:max-w-[140px] md:max-w-[240px] lg:max-w-[260px] transition-transform hover:scale-105"
    >
      <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-md bg-white">
        <Image
          src={segment.image}
          alt={segment.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-xs sm:text-sm font-bold uppercase text-center break-words leading-tight">
        {segment.name}
      </p>
    </Link>
  );
}
