import { MenuBurger } from "../Sidebar/MenuBurger";
import { Navigation } from "./Navigation";
import { NavigationItem } from "./NavigationItem";

export function Header() {
  return (
    <div id="introduction" className="w-full h-20 bg-zinc-800">
      <header className="w-full h-full max-w-[1280px] m-auto px-4 md:px-8 flex items-center justify-between text-zinc-200 ">
        <MenuBurger />
        <div className="text-2xl font-semibold ">
          <span className="text-purple-100">&lt;</span>Elisio Wander{" "}
          <span className="text-purple-100">/&gt;</span>
        </div>
        <Navigation>
          <NavigationItem url="#about" name="Sobre" />
          <NavigationItem url="#projects" name="Projetos" />
          <NavigationItem url="#tech" name="Tecnologias" />
          <NavigationItem url="#contact" name="Contato" contactButton="w-[120px] h-11 ml-10 inline-flex items-center justify-center rounded border-2 border-solid border-purple-100 hover:brightness-75 transition-all bg-zinc-700 " />
        </Navigation>
      </header>
    </div>
  );
}
