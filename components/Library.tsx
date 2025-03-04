"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useUploadModal } from "@/hooks/useUploadModal";
import { Beat } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  beats: Beat[];
}

export const Library: React.FC<LibraryProps> = ({ beats }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      authModal.onOpen();
    }

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Beats</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 hover:text-neutral-300 cursor-pointer transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {beats.map((beat) => (
          <MediaItem 
          onClick={() => {}}
          key={beat.id}
          data={beat}
          />
        ))}
      </div>
    </div>
  );
};
