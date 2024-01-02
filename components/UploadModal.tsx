import { useState } from "react";
import { Modal } from "./Modal";
import { useUploadModal } from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

export const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {onClose, isOpen} = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      beat: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const beatFile = values.beat?.[0];

      if (!beatFile || !user) {
        toast.error("Missing fields");
        return;
      }

      const uniqueID = uniqid();

      const {
        data: beatData,
        error: beatError,
      } = await supabaseClient.storage
        .from("beats")
        .upload(`beat-${values.title}-${uniqueID}`, beatFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (beatError) {
        setIsLoading(false);
        return toast.error("Failed beat upload");
      }

      const { error: supabaseError } = await supabaseClient
        .from("beats")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          beat_path: beatData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Beat upload");
      reset();
      onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Upload a Beat"
      description="Upload your beat to the platform"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Beat title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Beat author"
        />
        <div>
          <div className="pb-1">Select Beat file</div>
          <Input
            id="beat"
            type="file"
            accept="mp3"
            disabled={isLoading}
            {...register("beat", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};
