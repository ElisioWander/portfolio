import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { Form } from "../Form";
import { Modal } from "../Modal";
import { SectionTitle } from "../SectionTitle";
import { SocialMediaLink } from "../SocialMediaLink";

export function Contact() {
  return (
    <div
      id="contact"
      className="w-full py-14 flex flex-col items-center relative "
    >
      <SectionTitle title="Contato" style="md:hidden lg:px-12 transition-all" />

      <section className="max-w-[1024px] md:grid md:grid-cols-2 md:items-center ">
        <div className="md:order-2 ">
          <Form />
        </div>
        <div className="w-full max-w-[440px] md:py-14 text-center transition-all ">
          <SectionTitle
            title="Contato"
            style="hidden md:block md:mb-14 lg:px-12 transition-all"
          />

          <p className="mb-6 text-base text-zinc-200 p-2 md:px-8 ">
            Entre em <span className="text-purple-100 ">contato</span> comigo
            pelos links abaixo ou envie uma mensagem através do formuário
          </p>
          <div className="flex gap-2 items-center justify-center transition-all ">
            <SocialMediaLink
              url="https://www.linkedin.com/in/elisio-wander-b88b69136/"
              icon={<FaLinkedinIn fontSize={28} />}
            />
            <SocialMediaLink
              url="https://github.com/ElisioWander"
              icon={<FaGithub fontSize={28} />}
            />
            <SocialMediaLink
              url="https://api.whatsapp.com/send?phone=5532999924818"
              icon={<FaWhatsapp fontSize={28} />}
            />
            <SocialMediaLink
              url="https://www.instagram.com/elisio_wander/"
              icon={<FaInstagram fontSize={28} />}
            />
          </div>
        </div>
      </section>

      <Modal />
    </div>
  );
}
