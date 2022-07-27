import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "../../context/modalContext";
import { api } from "../../services/axios";
import { Loading } from "./Loading";
import { Input } from "./Input";
import { useFormResolver } from "../../hooks/useFormResolver";

type SendMessageData = {
  name: string;
  email: string;
  comment: string;
};

export function Form() {
  const { handleOpenModal } = useModal();
  const { resolver } = useFormResolver()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver });

  const handleSubmitMessage: SubmitHandler<SendMessageData> = async (
    values
  ) => {
    const { name, email, comment } = values;

    await api.post("message", {
      name,
      email,
      comment,
    });

    handleOpenModal();
    reset();
  };

  const messageField = watch('comment')

  const loadingWhileSubmitting = isSubmitting ? <Loading /> : "Enviar";
  const isSubmitDisabled = !messageField || isSubmitting;

  return (
    <form
      className="w-full max-w-[440px] px-5 py-14 flex flex-col "
      onSubmit={handleSubmit(handleSubmitMessage)}
    >
      <Input 
        label="Nome"
        type="name"
        error={errors?.name}
        {...register("name")}
      />

      <Input 
        label="Email"
        type="email"
        error={errors?.email}
        {...register("email")}
      />

      <label htmlFor="comment" className="text-sm md:text-base text-zinc-200 mb-1">
        Mensagem
      </label>
      <textarea
        id="comment"
        className="w-full min-h-[112px] p-3 text-sm placeholder:zinc-500 text-zinc-400 border-purple-100 bg-zinc-800 rounded-md focus:border-purple-100 focus:ring-purle-100 focus:ring-1 focus:outline-none resize-none "
        {...register("comment")}
      />

      <button
        type="submit"
        className="w-28 h-10 lg:w-40 mt-6 p-1 flex items-center justify-center text-base bg-purple-100 rounded hover:brightness-75 transition-all disabled:opacity-70 disabled:hover:brightness-100 disabled:cursor-not-allowed "
        disabled={isSubmitDisabled}
      >
        {loadingWhileSubmitting}
      </button>
    </form>
  );
}
