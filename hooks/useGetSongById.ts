import { Beat } from "@/types";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

export const useGetBeatById = (id?: string) => {
  const [beat, setBeat] = useState<Beat | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { supabaseClient } = useSessionContext();
  useEffect(() => {
    if (!id) {
      return;
    }
    setIsLoading(true);

    const getBeatById = async () => {
      const { data, error } = await supabaseClient
        .from("beats")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setIsLoading(false);
        return toast.error(error.message);
      }

      setBeat(data as Beat);
      setIsLoading(false);
    };

    getBeatById();
  }, [id, supabaseClient]);

  return useMemo(() => ({ beat, isLoading }), [beat, isLoading]);
};
