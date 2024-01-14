"use client";

import { useAuthModal } from "@/hooks/useAuthModal";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import toast from "react-hot-toast";

interface LikeButtonProps {
  beatId: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ beatId }) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();

  const authModal = useAuthModal();
  const { user } = useUser();

  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) return;

    const fetchLiked = async () => {
      const { data, error } = await supabaseClient
        .from("liked_beats")
        .select("*")
        .eq("user_id", user.id)
        .eq("beat_id", beatId)
        .single();

      if (error) {
        console.log(error);
      }

      if (data) {
        setLiked(true);
      }
    };

    fetchLiked();
  }, [beatId, supabaseClient, user?.id]);

  const Icon = liked ? AiFillHeart : AiOutlineHeart;

  const handleLike = async () => {
    if (!user?.id) {
      authModal.onOpen();
      return;
    }

    if (liked) {
      const { error } = await supabaseClient
        .from("liked_beats")
        .delete()
        .eq("user_id", user.id)
        .eq("beat_id", beatId);

      if (error) {
        toast.error(error.message);
      } else {
        setLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from("liked_beats")
        .insert([{ user_id: user.id, beat_id: beatId }]);

      if (error) {
        toast.error(error.message);
      } else {
        setLiked(true);
        toast.success("Success");
      }
    }
    router.refresh();
  };

  return (
    <button
      onClick={handleLike}
      className="
        hover:opacity-75
        transition
    "
    >
      <Icon color={liked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};
