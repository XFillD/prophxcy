"use client";

import { useGetBeatById } from "@/hooks/useGetSongById";
import { useLoadBeatUrl } from "@/hooks/useLoadBeatUrl";
import { usePlayer } from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

export const Player = () => {
  const player = usePlayer();
  const { beat } = useGetBeatById(player.activeId);

  const beatUrl = useLoadBeatUrl(beat);

  const showPlayerHandler = () => {
    player.setShow(false);
  };

  if (!beat || !beatUrl || !player.activeId) return null;

  return (
    <>
      {player.show && (
        <div
          className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
        >
          <PlayerContent
            key={beatUrl}
            beat={beat}
            beatUrl={beatUrl}
            setShowPlayer={showPlayerHandler}
          />
        </div>
      )}
    </>
  );
};
