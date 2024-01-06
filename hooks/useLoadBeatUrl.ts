import { Beat } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadBeatUrl = (beat: Beat | null) => {
  const supabaseClient = useSupabaseClient();

  if (!beat) {
    return null;
  }

  const { data: beatData } = supabaseClient.storage
    .from("beats")
    .getPublicUrl(beat.beat_path);

  return beatData.publicUrl;
};
