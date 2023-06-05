import Image from "next/image";
import Link from "next/link";

import HeroSvg from "../../../public/svg/hero-img.svg";
import GithubMark from "../../../public/svg/github-mark.svg";
import LinkedInMark from "../../../public/svg/linkedin-mark.svg";

import { LowerBar } from "../ui/LowerBar";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col w-full h-screen bg-dutch-white pt-12">
      <div className="flex flex-row w-full h-full">
        <div className="flex items-center w-4/6 h-full pl-10">
          <div className="flex flex-col">
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#454545] to-[#533B4D]">
              &lt; Amarilio de Oliveira &#47;&gt;
            </h1>
            <p className="text-xl text-brown-sugar">Desenvolvedor Fullstack</p>
            <p className="text-base text-taupe-gray">
              Next.js 13 | React.js | Typescript | Tailwind CSS
            </p>

            <nav className="flex flex-row gap-x-5 mt-3">
              <ul>
                <Link
                  href={"https://github.com/amariliodeoliveira"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="hover:"
                    src={GithubMark}
                    alt="GitHub"
                    width={30}
                    height={30}
                  />
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
                    width={30}
                    height={30}
                  />
                </Link>
              </ul>
              <ul></ul>
            </nav>
          </div>
        </div>

        <div className="relative w-2/6 h-full">
          <Image className="p-3" src={HeroSvg} fill={true} alt="" />
        </div>
      </div>

      <LowerBar />
    </section>
  );
};
