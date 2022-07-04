import { createContext, ReactElement, useContext, useEffect, useState } from "react";

interface ModalContextProviderProps {
  children: ReactElement;
}

type ModalContextData = {
  handleOpenModal: () => void;
  modal: boolean;
}

export const ModalContext = createContext({} as ModalContextData )

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if(modal === false) {
      document.body.style.overflow = "initial"
    }
  }, [modal])

  async function handleOpenModal() {
    setModal(!modal)

    document.body.style.overflow = !modal ? "hidden" : "initial"

    await new Promise(resolve => setTimeout(resolve, 2000))
    setModal(false)
  }

  return (
    <ModalContext.Provider value={{ handleOpenModal, modal }}>
      { children }
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)