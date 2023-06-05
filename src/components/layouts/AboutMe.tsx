import Image from "next/image";
import Link from "next/link";

import PersonalPhoto from "../../../public/img/avatar-photo.webp";
import GithubMark from "../../../public/svg/github-mark.svg";
import LinkedInMark from "../../../public/svg/linkedin-mark.svg";

import { LowerBar } from "../ui/LowerBar";

export const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col gap-y-6 max-w-4xl m-auto w-full min-h-screen bg-dutch-white pt-24">
      <h2 className="text-4xl">Dream big. Work harder.</h2>

      <div className="flex flex-row">
        <div className="flex shrink-0 w-96 relative items-start h-full">
          <Image
            className="object-contain overflow-hidden rounded-3xl"
            src={PersonalPhoto}
            width={500}
            height={500}
            alt=""
          />
        </div>

        <div className="flex shrink items-center w-auto h-full pl-10">
          <div className="flex flex-col">
            <p className="font-roboto text-base text-paynes-gray">
              Entusiasta apaixonado por todos os tipos de tecnologias.
              Atualmente em transição profissional para retornar a área que
              tanto amo: desenvolvimento web. Possuo experiência em aplicações
              React.js com Next.js, Javascript & Typescript, Vue.js, Nuxt.js,
              Firebase, MongoDB, Tailwind CSS, Formik, Axios, dentre outros
              frameworks e bibliotecas. Sei trabalhar seguindo metodologias
              ágeis como o Scrum e com controle de versionamento de códigos com
              GIT (GitHub). Também possuo experiência em ferramentas de design e
              prototipagem de interfaces (UI), como o Figma, e em gerenciadores
              de conteúdos (CMS) como o WordPress. Estou em busca de
              oportunidades desafiadoras em ambientes colaborativos e que
              valorizem a inovação e o aprendizado para continuar aprimorando
              minhas habilidades em desenvolvimento web, ajudando-os a criar
              soluções criativas e eficazes que atendam às necessidades dos
              clientes.Entusiasta apaixonado por todos os tipos de tecnologias.
              Atualmente em transição profissional para retornar a área que
              tanto amo: desenvolvimento web. Possuo experiência em aplicações
              React.js com Next.js, Javascript & Typescript, Vue.js, Nuxt.js,
              Firebase, MongoDB, Tailwind CSS, Formik, Axios, dentre outros
              frameworks e bibliotecas. Sei trabalhar seguindo metodologias
              ágeis como o Scrum e com controle de versionamento de códigos com
              GIT (GitHub). Também possuo experiência em ferramentas de design e
              prototipagem de interfaces (UI), como o Figma, e em gerenciadores
              de conteúdos (CMS) como o WordPress. Estou em busca de
              oportunidades desafiadoras em ambientes colaborativos e que
              valorizem a inovação e o aprendizado para continuar aprimorando
              minhas habilidades em desenvolvimento web, ajudando-os a criar
              soluções criativas e eficazes que atendam às necessidades dos
              clientes.Entusiasta apaixonado por todos os tipos de tecnologias.
              Atualmente em transição profissional para retornar a área que
              tanto amo: desenvolvimento web. Possuo experiência em aplicações
              React.js com Next.js, Javascript & Typescript, Vue.js, Nuxt.js,
              Firebase, MongoDB, Tailwind CSS, Formik, Axios, dentre outros
              frameworks e bibliotecas. Sei trabalhar seguindo metodologias
              ágeis como o Scrum e com controle de versionamento de códigos com
              GIT (GitHub). Também possuo experiência em ferramentas de design e
              prototipagem de interfaces (UI), como o Figma, e em gerenciadores
              de conteúdos (CMS) como o WordPress. Estou em busca de
              oportunidades desafiadoras em ambientes colaborativos e que
              valorizem a inovação e o aprendizado para continuar aprimorando
              minhas habilidades em desenvolvimento web, ajudando-os a criar
              soluções criativas e eficazes que atendam às necessidades dos
              clientes.
            </p>

            <nav className="flex flex-row gap-x-3 mt-3">
              <ul>
                <Link
                  href={"https://github.com/amariliodeoliveira"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={GithubMark} alt="GitHub" width={20} height={20} />
                </Link>
              </ul>
              <ul>
                <Link
                  href={"https://www.linkedin.com/in/amariliodeoliveira/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={LinkedInMark}
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link>
              </ul>
              <ul></ul>
            </nav>
          </div>
        </div>
      </div>

      <LowerBar />
    </section>
  );
};
