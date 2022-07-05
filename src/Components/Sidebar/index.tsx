import { useSidebar } from "../../context/SidebarContext";
import { Navigation } from "./navigation";

export function Sidebar() {
  const { sidebarActive } = useSidebar();

  return (
    <>
      {sidebarActive && (
        <div className="w-full h-screen absolute top-0 right-0 bottom-0 left-0 bg-zinc-900 bg-opacity-80 animate-goVisible ">
          <div className="w-64 h-full pl-4 bg-zinc-800 animate-goAhead">
            <Navigation />
          </div>
        </div>
      )}
    </>
  );
}
