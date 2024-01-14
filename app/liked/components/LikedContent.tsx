"use client";
import { useUser } from "@/hooks/useUser";
import { Beat } from "@/types";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import MediaItem from "@/components/MediaItem";
import { LikeButton } from "@/components/LikeButton";
import { useOnPlay } from "@/hooks/useOnPlay";

interface LikedContentProps {
  beats: Beat[];
}

const LikedContent: React.FC<LikedContentProps> = ({ beats }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(beats);
  
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, router, user]);

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
    <div className="flex flex-col gap-y-2 w-full p-6">
      {beats.map((beat: any) => (
        <div key={beat.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={beat} />
          </div>
          <LikeButton beatId={beat.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
