export function About() {
  return (
    <div id="about" className="w-full py-16 px-5 bg-zinc-800 ">
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
          <p>
            Sou Desenvolvedor Web com mais de dois anos de experiência com
            HTML5, CSS3, javascript. Tenho expertise em React.js(next, context
            API), typescript, SASS, Tailwind CSS, Consumo de API com Axios...
            Constumo resolver os problemas por conta própria, mesmo que isso me
            custe horas de pesquisa(vale o aprendizado que tal ato trás). Tenho
            algum conhecimento(e profundo interessem) em back-end, assim como em
            banco banco de dados. Tive experência na utilização de banco de
            dados como o FaunaDB e PostgreSQL. Desenvolvo aplicações utilizando
            essas tecnologias a mais de um ano. Possuo um nível de inglês
            intermediário/avançado. Excelente capacidade de comunicação e
            relacionamento interpessoal. Apesar de ter feito alguns freelas eu
            ainda não tive minha primeira oportunidade para trabalhar como
            desenvolvedor dentro de uma empresa. Espero mudar esse cenário em
            breve e mostrar todo o meu potencial.
          </p>

          <h3 className="mt-8 mb-2 text-lg md:text-2xl font-semibold before:w-[10px] before:h-[10px] before:mr-2 before:bg-purple-100 before:inline-flex before:rounded-full  " >Curiosidade</h3>
          <p>
            A maior parte do conhecimento que eu tenho em Desenvolvimento Web
            vem da <a className="text-purple-100 hover:underline underline-offset-2 " target="_blank" href="https://app.rocketseat.com.br">Rocketseat</a>. Eles
            possuem um bootcamp focado em Programação Web Front-end, e foi
            atravez desse programa(e mais horas de vários outros conteúdos), que
            eu me desenvolvi e cheguei até aqui. Sou formado no curso de
            front-end que eles proporcionam chamado Ignite.
          </p>
        </summary>
      </div>
    </div>
  );
}
