interface AboutProps {
  summary: {
    content: string;
    curiosity: string;
  }
}

export function About({ summary }: AboutProps) {
  return (
    <div id="about" className="w-full py-20 px-5 bg-zinc-800 ">
      <h2 className="lg:px-12 lg:text-start transition-all ">
        <span className="text-purple-100">&lt;</span>Sobre min
        <span className="text-purple-100"> /&gt;</span>
      </h2>
      <div className="lg:px-8 flex flex-col lg:flex-row lg:gap-20 items-center transition-all " >
        <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] mt-10 mb-10 lg:m-auto flex items-center justify-center lg:order-2 rounded-full border-4 border-zinc-200 hover:border-green-300 transition-all ">
          <img
            src="https://avatars.githubusercontent.com/u/27742439?v=4"
            alt="imagem de perfil"
            className="w-full h-full object-cover rounded-full "
          />
        </div>
        <summary className="lg:w-2/3 lg:mt-14 text-base text-zinc-200 font-firasans font-normal list-none transition-all " >
          <p>{summary.content}</p>

          <h3 className="mt-8 mb-2 text-lg md:text-2xl font-semibold before:w-[10px] before:h-[10px] before:mr-2 before:bg-purple-100 before:inline-flex before:rounded-full  " >Curiosidade</h3>
          <p>
            {summary.curiosity}
          </p>
        </summary>
      </div>
    </div>
  );
}

{/* <a className="text-purple-100 hover:underline underline-offset-2 " target="_blank" href="https://app.rocketseat.com.br">Rocketseat</a> */}
