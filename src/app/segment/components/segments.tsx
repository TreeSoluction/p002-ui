import { segments } from "@/utils/segments";
import { SegmentCard } from "./card";

export function Segments({ cityId }: { cityId?: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 px-4">
      {segments.map((segment, index) => (
        <SegmentCard segment={segment} key={index} cityId={cityId} />
      ))}
    </div>
  );
}
