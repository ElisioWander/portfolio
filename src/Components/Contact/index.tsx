import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Form } from "../Form";

export function Contact() {
  const linkStyle = `w-12 h-12 bg-purple-100 flex items-center justify-center rounded-md hover:brightness-90 hover:scale-95 transition-all `;

  return (
    <div id="contact" className="w-full py-14 flex flex-col items-center ">
      <h2 className="md:hidden lg:px-12 transition-all ">
        <span className="text-purple-100">&lt;</span>Contato
        <span className="text-purple-100"> /&gt;</span>
      </h2>

      <section className="max-w-[1024px] md:grid md:grid-cols-2 md:items-center ">
        <div className="md:order-2 ">
          <Form />
        </div>
        <div className="w-full max-w-[440px] md:py-14 text-center transition-all ">
          <h2 className="hidden md:block md:mb-14 lg:px-12 transition-all ">
            <span className="text-purple-100">&lt;</span>Contato
            <span className="text-purple-100"> /&gt;</span>
          </h2>

          <p className="mb-6 text-base text-zinc-200 p-2 md:px-8 ">
            Entre em <span className="text-purple-100 ">contato</span> comigo
            pelos links abaixo ou envie uma mensagem através do formuário
          </p>
          <div className="flex gap-2 items-center justify-center transition-all ">
            <a className={`${linkStyle}`} href="#">
              <FaLinkedinIn fontSize={28} />
            </a>
            <a className={`${linkStyle}`} href="#">
              <FaGithub fontSize={28} />
            </a>
            <a className={`${linkStyle}`} href="#">
              <FaWhatsapp fontSize={28} />
            </a>
            <a className={`${linkStyle}`} href="#">
              <FaInstagram fontSize={28} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
