export function Footer() {
  return (
    <footer className="w-full h-28 bg-zinc-800 p-5 flex justify-center pt-9 gap-8 text-zinc-400 " >
      <details className="cursor-pointer text-sm md:text-lg " >
        <summary >
          Autor do projeto
        </summary>
        <a className="ml-4 text-sm text-zinc-200 hover:underline underline-offset-2 hover:text-purple-100 " >Elisio Wander</a>
      </details>
      <details className="cursor-pointer text-sm md:text-lg " >
        <summary>
          Autor do Layout
        </summary>
        <a className="ml-4 text-sm text-zinc-200 hover:underline underline-offset-2 hover:text-purple-100 " >Matheus Felipe</a>
      </details>
    </footer>
  )
}