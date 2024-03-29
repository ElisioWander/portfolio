import { CuriosityData } from '../../pages'
import { SectionTitle } from '../SectionTitle'

type Summary = {
  content: string
  curiosity: CuriosityData[]
}

interface AboutProps {
  summary: Summary
}

export function About({ summary }: AboutProps) {
  return (
    <div id="about" className="w-full py-20 px-5 bg-zinc-800 ">
      <SectionTitle title="Sobre mim" />
      <div className="lg:px-8 flex flex-col lg:flex-row lg:gap-20 items-center transition-all ">
        <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] mt-10 mb-10 lg:m-auto flex items-center justify-center lg:order-2 rounded-full border-4 border-zinc-200 hover:border-green-300 transition-all ">
          <img
            src="https://avatars.githubusercontent.com/u/27742439?v=4"
            alt="imagem de perfil"
            className="w-full h-full object-cover rounded-full "
          />
        </div>
        <summary className="lg:w-2/3 lg:mt-14 text-base text-zinc-200 font-firasans font-normal list-none transition-all ">
          <p>{summary.content}</p>

          <h3 className="mt-8 mb-2 text-lg md:text-2xl font-semibold before:w-[10px] before:h-[10px] before:mr-2 before:bg-purple-100 before:inline-flex before:rounded-full  ">
            Curiosidade
          </h3>
          <ul className="list-disc ml-5">
            {summary.curiosity.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        </summary>
      </div>
    </div>
  )
}
