import Image from "next/image";
import Link from "next/link";

import HeroSvg from "../../../public/svg/hero-img.svg";
import GithubMark from "../../../public/svg/github-mark.svg";
import LinkedInMark from "../../../public/svg/linkedin-mark.svg";

import { LowerBar } from "../ui/LowerBar";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col max-w-4xl m-auto w-full min-h-screen h-screen bg-dutch-white pt-12 font-russo">
      <div className="flex flex-row justify-between w-full h-full">
        <div className="flex items-center w-auto h-full p-3">
          <div className="flex flex-col">
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#454545] to-[#533B4D]">
              &lt; Amarilio de Oliveira &#47;&gt;
            </h1>
            <h2 className="animate-fade-in-1 text-xl text-brown-sugar">
              Desenvolvedor Fullstack
            </h2>
            <h3 className="animate-fade-in-1 text-base text-taupe-gray">
              Next.js 13 | React.js | Typescript | Tailwind CSS
            </h3>

            <nav className="animate-fade-in flex flex-row gap-x-5 mt-3">
              <ul>
                <Link
                  className="animate-fade-in-2"
                  href={"https://github.com/amariliodeoliveira"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={GithubMark} alt="GitHub" width={30} height={30} />
                </Link>
              </ul>
              <ul>
                <Link
                  className="animate-fade-in-3"
                  href={"https://www.linkedin.com/in/amariliodeoliveira/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={LinkedInMark}
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </Link>
              </ul>
              <ul></ul>
            </nav>
          </div>
        </div>

        <div className="animate-fade-in-1 relative max-w-sm w-full h-full">
          <Image className="p-3 " src={HeroSvg} fill={true} alt="" />
        </div>
      </div>

      <LowerBar />
    </section>
  );
};
