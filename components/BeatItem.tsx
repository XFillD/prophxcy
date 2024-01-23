"use client";

import { Beat } from "@/types";
import PlayButton from "./PlayButton";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface BeatItemProps {
  data: Beat;
  onClick: (id: string) => void;
  audio: HTMLAudioElement;
}

export const BeatItem: React.FC<BeatItemProps> = ({ data, onClick, audio }) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start loading the audio file when the item becomes visible
          audioRef.current = new Audio(data.beat_path);
          audioRef.current.preload = "auto";
        }
      });
    });

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [data]);

  const handleClick = () => {
    onClick(data.id);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      onClick={handleClick}
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
        <Image
          src={"/musicFin.svg"}
          alt={data.title}
          layout="fixed"
          width={150}
          height={150}
          className="ml-7 mt-6"
        />
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
