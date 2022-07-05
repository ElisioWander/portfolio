export function Introduction() {
  return (
    <div className="w-full max-w-[1080px] h-[calc(100vh-5rem)] py-8 md:px-5 md:m-auto flex flex-col md:grid md:grid-cols-2 md:gap-28 items-center ">
      <img
        src="/images/desenho.svg"
        alt="desenho de programador"
        className="w-40 h-40 md:w-[380px] md:h-[350px] lg:w-[487px] lg:h-[424px] md:order-2 transition-all md:animate-goBack "
      />
      <div className="w-full py-5 text-center transition-all animate-goAhead ">
        <span className="text-xl md:text-2xl lg:text-3xl font-firasans font-normal ">
          Olá, meu nome é
        </span>
        <div className="mt-2 mb-1 text-4xl md:text-5xl lg:text-7xl font-firasans font-semibold transition-all ">
          Elisio <span className="text-purple-100">Wander</span>
        </div>
        <span className="text-xl font-medium ">
          Desenvolvedor Web <strong className="font-semibold">Front-End</strong>
        </span>

        <div className="mt-12 flex items-center justify-center gap-3 ">
          <a 
            className="w-28 h-10 lg:w-40 p-1 text-base inline-flex items-center justify-center bg-purple-100 rounded hover:brightness-75 transition-all "
            href="/images/resume-elisio-wander.pdf" download
          >
            Download CV
          </a>
          <a
            className="w-28 h-10 lg:w-40 p-1 text-base inline-flex items-center justify-center border-2 border-solid border-zinc-200 rounded hover:brightness-75 transition-all "
            href="#contact"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  );
}
