"use client";

import { Beat } from "@/types";
import PlayButton from "./PlayButton";
import Image from "next/image";

interface BeatItemProps {
  data: Beat;
  onClick: (id: string) => void;
}

export const BeatItem: React.FC<BeatItemProps> = ({ data, onClick }) => {
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        relative 
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10
        hover:shadow-2xl
        hover:scale-105
        hover:shadow-white
        transition 
        p-3
        border
        border-purple-300
      "
    >
      <div
        className="
          relative 
          aspect-square 
          w-full
          h-full 
          rounded-md 
          overflow-hidden
        "
      >
        <Image src={"/musicFin.svg"} alt={data.title} layout="fixed" width={150} height={150} className="ml-7 mt-6" />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p
          className="
            text-neutral-400 
            text-sm 
            pb-4 
            w-full 
            truncate
          "
        >
          By {data.author}
        </p>
      </div>
      <div
        className="
          absolute 
          bottom-24 
          right-5
        "
      >
        <PlayButton />
      </div>
    </div>
  );
};
