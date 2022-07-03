import { Introduction } from "../Components/Introduction";

export default function Home() {
  return (
    <div className="w-full text-zinc-200 ">
      <Introduction />

      <div className="w-full h-screen bg-zinc-800 ">
        <h2 className="text-3xl font-firasans font-semibold ">
          <span className="text-purple-100">&lt;</span>Sobre min
          <span className="text-purple-100"> /&gt;</span>
        </h2>

        <div>
          <div className="w-[220px] h-[220px] rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/27742439?v=4"
              alt="imagem de perfil"
              className="w-full h-full object-cover rounded-full "
            />
          </div>
          <summary>
            <p>
              Sou Desenvolvedor Web com mais de dois anos de experiência com HTML5,
              CSS3, javascript. Tenho expertise em React.js(next, context API), typescript, SASS, Tailwind CSS, Consumo de API com Axios...
              Constumo resolver os problemas por conta própria, mesmo que isso me custe horas de pesquisa(vale o aprendizado que tal ato trás).
              Tenho algum conhecimento(e profundo interessem) em back-end, assim como em banco banco de dados. Tive experência na utilização de 
              banco de dados como o FaunaDB e PostgreSQL.
              Desenvolvo aplicações utilizando essas tecnologias a mais de um ano.
              Possuo um nível de inglês intermediário/avançado. Excelente
              capacidade de comunicação e relacionamento interpessoal. Apesar de ter feito alguns freelas
              eu ainda não tive minha primeira oportunidade para trabalhar como desenvolvedor dentro
              de uma empresa. Espero mudar esse cenário em breve e mostrar todo o meu potencial.
            </p>

            <h3>Curiosidade</h3>
            <p>
              A maior parte do conhecimento que eu tenho em Desenvolvimento Web vem da <a href="https://app.rocketseat.com.br">Rocketseat</a>.
              Eles possuem um bootcamp focado em Programação Web Front-end, e foi atravez desse programa(e mais horas de vários outros conteúdos), que 
              eu me desenvolvi e cheguei até aqui. Sou formado no curso de front-end que eles proporcionam chamado Ignite.
            </p>
          </summary>
        </div>
      </div>
    </div>
  );
}
