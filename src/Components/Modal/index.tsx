import { AiOutlineCheck } from "react-icons/ai";
import { useModal } from "../../context/modalContext";

export function Modal() {
  const { modal } = useModal();

  if (modal) {
    return (
      <div className="w-full h-screen flex items-center justify-center absolute right-0 left-0 z-50 bg-zinc-900 bg-opacity-80 ">
        <div className="w-72 h-56 md:w-96 flex flex-col items-center justify-center rounded-md bg-zinc-200">
          <AiOutlineCheck
            fontSize={38}
            className="mb-4 text-white-50 bg-green-300 rounded-sm "
          />

          <span className="text-zinc-700 text-xl text-center ">
            Mensagem enviada com sucesso
          </span>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}
