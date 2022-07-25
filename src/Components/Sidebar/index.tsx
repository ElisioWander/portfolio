import { useSidebar } from "../../context/SidebarContext";
import { Navigation } from "./Navigation";
import { NavigationItem } from "./NavigationItem";

export function Sidebar() {
  const { sidebarActive } = useSidebar();

  if (sidebarActive) {
    return (
      <div className="w-full h-screen absolute top-0 right-0 bottom-0 left-0 bg-zinc-900 bg-opacity-80 animate-goVisible ">
        <div className="w-64 h-full pl-4 bg-zinc-800 animate-goAhead">
          <Navigation>
            <NavigationItem url="#about" name="Sobre" />
            <NavigationItem url="#projects" name="Projetos" />
            <NavigationItem url="#tech" name="Tecnologias" />
            <NavigationItem url="#contact" name="Contato" />
          </Navigation>
        </div>
      </div>
    );
  } else {
    return <></>
  };
}
