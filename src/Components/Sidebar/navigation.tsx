import { useSidebar } from "../../context/SidebarContext";

export function Navigation() {
  const { handleOpenSidebar } = useSidebar()

  const genericNavigationStyle = `w-full p-3 text-lg text-zinc-200 hover:text-zinc-50 font-poppins cursor-pointer transition-all hover:text-xl`
  
  return (
    <nav className="w-full h-full py-20">
      <ul className="w-full mt-5 flex flex-col items-center">
        <li className={`${genericNavigationStyle}`}>
          <a onClick={handleOpenSidebar} href="#about">Sobre</a>
        </li>
        <li className={`${genericNavigationStyle}`}>
          <a onClick={handleOpenSidebar} href="#projects">Projetos</a>
        </li>
        <li className={`${genericNavigationStyle}`}>
          <a onClick={handleOpenSidebar} href="#tech">Tecnologias</a>
        </li>
        <li className={`${genericNavigationStyle}`}>
          <a onClick={handleOpenSidebar} href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
