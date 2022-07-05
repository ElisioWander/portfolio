import { createContext, ReactElement, useContext, useState } from "react";

type SidebarContextData = {
  handleOpenSidebar: () => void;
  sidebarActive: boolean;
}

interface SidebarContextProviderProps {
  children: ReactElement;
}

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
  const [sidebarActive, setSidebarActive] = useState(false)

  function handleOpenSidebar() {
    !sidebarActive

    document.body.style.overflow = !sidebarActive ? "hidden" : "initial"

    setSidebarActive(!sidebarActive)
  }

  return (
    <SidebarContext.Provider value={{handleOpenSidebar, sidebarActive}} >
      { children }
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)