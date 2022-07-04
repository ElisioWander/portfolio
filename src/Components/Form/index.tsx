import { useState } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form"
import { useModal } from "../../context/modalContext";
import { api } from "../../services/axios";
import { Loading } from "./Loading";

type SendMessageData = {
  name: string;
  email: string;
  comment: string;
}

const resolver: Resolver<SendMessageData> = async (values) => {
  return {
    values: values.name || values.email ? values : {},
    errors: !values.name || !values.email ? {
      name: {
        type: "required",
        message: "Nome obrigatório"
      },
      email: {
        type: "required",
        message: "Email obrigatório"
      }
    }: {}
  }
}

export function Form() {
  const [comment, setComment] = useState("")

  const { handleOpenModal } = useModal()

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({resolver})

  const handleSubmitMessage: SubmitHandler<SendMessageData> = async (values) => {
    const { name, email, comment } = values

    await api.post("message", {
      name,
      email,
      comment
    })

    handleOpenModal()
    //form fields reset
    reset()
    //textarea comment reset to be disabled again
    setComment("")
  }

  const labelStyles = `text-sm md:text-base text-zinc-200 mb-1`

  return (
    <form 
      className="w-full max-w-[440px] px-5 py-14 flex flex-col "
      onSubmit={handleSubmit(handleSubmitMessage)}
    >
      <label className={`${labelStyles}`} >Nome</label>
      <input 
        type="text"
        className="mb-5 py-2 px-4 text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-100 rounded-md placeholder:text-sm bg-zinc-800 "
        {...register("name")}
      />
      { errors?.name && (
        <span className="-mt-3 mb-5 ml-3 text-xs text-red-500" > 
          {errors.name.message}
        </span>
      ) }
      <label className={`${labelStyles}`} >Email</label>
      <input 
        type="email"
        className="mb-5 py-2 px-4 text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-100 rounded-md placeholder:text-sm bg-zinc-800"
        {...register("email")}
      />
      { errors?.email && (
        <span className="-mt-3 mb-5 ml-3 text-xs text-red-500" > 
          {errors.email.message}
        </span>
      ) }
      <label className={`${labelStyles}`} >Mensagem</label>
      <textarea 
        className="w-full min-h-[112px] p-3 text-sm placeholder:zinc-500 text-zinc-400 border-purple-100 bg-zinc-800 rounded-md focus:border-purple-100 focus:ring-purle-100 focus:ring-1 focus:outline-none resize-none "
        {...register("comment")}
        onChange={e => setComment(e.target.value)}
      />

      <button
        type="submit" 
        className="w-28 h-10 lg:w-40 mt-6 p-1 flex items-center justify-center text-base bg-purple-100 rounded hover:brightness-75 transition-all disabled:opacity-70 disabled:hover:brightness-100 disabled:cursor-not-allowed "
        disabled={comment.length === 0 || isSubmitting}
        >
        { isSubmitting ? <Loading /> : "Enviar" }
      </button>
    </form>
  )
}