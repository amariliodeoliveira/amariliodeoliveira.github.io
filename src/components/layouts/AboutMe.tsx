import Image from "next/image";

import PersonalPhoto from "../../../public/img/avatar-photo.webp";

import { LowerBar } from "../ui/LowerBar";

export const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-6 max-w-4xl m-auto w-full min-h-screen bg-dutch-white pt-24">
      <h2 className="text-5xl font-russo text-transparent bg-clip-text bg-gradient-to-r from-[#184E77] to-[#34A0A4]">
        Dream big. Work harder.
      </h2>

      <div className="animate-fade-in-1 flex flex-row">
        <div className="flex shrink-0 w-96 relative items-start h-full">
          <Image
            className="object-contain overflow-hidden rounded-2xl"
            src={PersonalPhoto}
            width={500}
            height={500}
            alt=""
          />
        </div>

        <div className="flex shrink items-center w-auto h-full pl-10">
          <div className="flex flex-col">
            <p className="font-roboto text-base font-thin text-paynes-gray">
              Olá, tudo bem? Me chamo Amarilio de Oliveira e sou um
              Desenvolvedor Full Stack e UX/UI Designer apaixonado por melhorar
              e facilitar a experiência dos usuários.
              <br />
              <br />
              Tive meus primeiros contatos com computadores cedo, aos 5 anos de
              idade: um lindo iMac G3 na cor Azul Bondi. Me fascinava aquilo e
              quis entender como funcionava.
              <br />
              <br />
              Após poucos anos, editava e recriava sites, players de música e
              até navegadores web pegando dicas e conselhos em fóruns.
              Participava de clubes de informática e não perdia uma oficina de
              robótica.
              <br />
              <br />
              Atualmente, sou graduando do 6º semestre em Sistemas de Informação
              pela UniFanor - Wyden e concluinte do curso de Full Stack pela
              Digital College.
            </p>
          </div>
        </div>
      </div>

      <LowerBar />
    </section>
  );
};
