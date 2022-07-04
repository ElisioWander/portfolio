export function Form() {
  const labelStyles = `text-sm md:text-base text-zinc-200 mb-1`

  return (
    <form className="w-full max-w-[440px] px-5 py-14 flex flex-col " >
      <label className={`${labelStyles}`} >Nome</label>
      <input 
        type="text"
        className="mb-5 py-2 px-4 text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-100 rounded-md placeholder:text-sm bg-zinc-800 "
      />
      <label className={`${labelStyles}`} >Email</label>
      <input 
        type="email"
        className="mb-5 py-2 px-4 text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-purple-100 rounded-md placeholder:text-sm bg-zinc-800"
      />
      <label className={`${labelStyles}`} >Mensagem</label>
      <textarea className="w-full min-h-[112px] p-3 text-sm placeholder:zinc-500 text-zinc-400 border-purple-100 bg-zinc-800 rounded-md focus:border-purple-100 focus:ring-purle-100 focus:ring-1 focus:outline-none resize-none " />

      <button className="w-28 h-10 lg:w-40 mt-6 p-1 text-base bg-purple-100 rounded hover:brightness-75 transition-all" >
        Enviar
      </button>
    </form>
  )
}