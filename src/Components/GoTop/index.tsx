import { FaArrowAltCircleUp } from 'react-icons/fa'

export function GoTop() {
  return (
    <a href="#introduction">
      <FaArrowAltCircleUp
        fontSize={54}
        className="hidden md:block fixed bottom-[85px] right-10 text-purple-100 bg-zinc-900 rounded-full cursor-pointer hover:scale-105 hover:brightness-75 transition-all "
      />
      <span className="sr-only">Para o topo</span>
    </a>
  )
}
