import { segments } from "@/utils/segments";
import { SegmentCard } from "./card";

export function Segments({ cityId }: { cityId?: string }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 mt-6 px-4">
      {segments.map((segment, index) => (
        <SegmentCard segment={segment} key={index} cityId={cityId} />
      ))}
    </div>
  );
}
