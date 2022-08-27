import { createContext, ReactElement, useContext, useState } from 'react'

type SidebarContextData = {
  sidebarActive: boolean
  handleCloseSidebar: () => void
  handleOpenSidebar: () => void
}

interface SidebarContextProviderProps {
  children: ReactElement
}

export const SidebarContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [sidebarActive, setSidebarActive] = useState(false)

  function handleOpenSidebar() {
    const toggleSidebar = !sidebarActive
    document.body.style.overflow = 'hidden'

    setSidebarActive(toggleSidebar)
  }

  function handleCloseSidebar() {
    const closeSidebar = false
    document.body.style.overflow = 'initial'

    setSidebarActive(closeSidebar)
  }

  return (
    <SidebarContext.Provider
      value={{ handleOpenSidebar, handleCloseSidebar, sidebarActive }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)
