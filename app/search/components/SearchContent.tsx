"use client";

import { Beat } from "@/types";
import MediaItem from "@/components/MediaItem";

interface SearchContentProps {
  beats: Beat[];
}

const SearchContent: React.FC<SearchContentProps> = ({ beats }) => {
  if (beats.length === 0) {
    return (
      <div
        className="
          flex 
          flex-col 
          gap-y-2 
          w-full 
          px-6 
          text-neutral-400
        "
      >
        No beats found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {beats.map((beat: Beat) => (
        <div key={beat.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={() => {}} data={beat} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
