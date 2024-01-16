"use client";

import { Beat } from "@/types";
import { BeatItem } from "@/components/BeatItem";
import { useOnPlay } from "@/hooks/useOnPlay";

interface PageContentProps {
  beats: Beat[];
}

export const PageContent: React.FC<PageContentProps> = ({ beats }) => {
  const onPlay = useOnPlay(beats);

  if (beats.length === 0) {
    return <div className="mt-4 text-neutral-400">No beats available.</div>;
  }

  return (
    <div
      className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-8 
        mt-4
      "
    >
      {beats.map((item) => (
        <BeatItem
          onClick={(id: string) => onPlay(id)}
          key={item.id}
          data={item}
        />
      ))}
    </div>
  );
};
