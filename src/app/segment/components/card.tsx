import Link from "@/components/link";
import { ISegment } from "@/interfaces/ISegment";
import Image from "next/image";

export function SegmentCard({
  segment,
  cityId,
}: {
  segment: ISegment;
  cityId?: string;
}) {
  return (
    <Link
      href={`/segment/${segment.nome}?cityId=${cityId ?? ""}`}
      className="flex flex-col items-center justify-start gap-1 sm:gap-2 w-full transition-transform hover:scale-105"
    >
      <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden shadow bg-white">
        <Image
          src={segment.imagem}
          alt={segment.nome}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-center leading-tight break-words">
        {segment.nome}
      </p>
    </Link>
  );
}
