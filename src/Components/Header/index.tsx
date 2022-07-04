import { FiMenu } from "react-icons/fi";

export function Header() {
  const navigationStyle = `text-base ml-10 hover:brightness-75 transition-all `

  return (
    <div className="w-full h-20 bg-zinc-800">
      <header className="w-full h-full max-w-[1280px] m-auto px-4 md:px-8 flex items-center justify-between text-zinc-200 ">
        <FiMenu fontSize={32} className="md:hidden" />
        <div className="text-2xl font-semibold ">
          <span className="text-purple-100">&lt;</span>Elisio Wander{" "}
          <span className="text-purple-100">/&gt;</span>
        </div>
        <nav className="hidden md:flex items-center ">
          <a className={`${navigationStyle}`}  href="#about">Sobre</a>
          <a className={`${navigationStyle}`}  href="#projects">Projetos</a>
          <a className={`${navigationStyle}`}  href="#tech">Tecnologias</a>
          <a className="w-[120px] h-11 ml-10 inline-flex items-center justify-center rounded border-2 border-solid border-purple-100 hover:brightness-75 transition-all bg-zinc-700 " href="#contact">Contato</a>
        </nav>
      </header>
    </div>
  );
}
