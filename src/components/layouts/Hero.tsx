"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import HeroSvg from "../../../public/svg/hero-img.svg";
import GithubMark from "../../../public/svg/github-mark.svg";
import LinkedInMark from "../../../public/svg/linkedin-mark.svg";

import { LowerBar } from "../ui/LowerBar";

export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col max-w-4xl m-auto w-full min-h-screen h-screen bg-dutch-white pt-12 font-russo">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.1 }}
        exit={{ opacity: 0 }}
        className="flex flex-row justify-between w-full h-full"
      >
        <div className="flex items-center w-auto h-full p-3">
          <div className="flex flex-col">
            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#454545] to-[#533B4D]">
              &lt; Amarilio de Oliveira &#47;&gt;
            </h1>
            <h2 className="text-xl text-brown-sugar">
              Desenvolvedor Fullstack
            </h2>
            <h3 className="text-base text-taupe-gray">
              <TypeAnimation
                sequence={[
                  // Same String at the start will only be typed once, initially
                  "React.js | Next.js | Typescript | Tailwind CSS",
                  1000,
                  "React.js | Next.js | Typescript | Framer Motion",
                  1000,
                  "React.js | Next.js | Typescript | Ant Design",
                  1000,
                  "Vue.js | Nuxt.js | Typescript | Headless UI",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              
            </h3>

            <nav>
              <ul className="flex flex-row gap-x-5 mt-3">
                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <Link
                      className=""
                      href={"https://github.com/amariliodeoliveira"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={GithubMark}
                        alt="GitHub"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </motion.button>
                </li>

                <li>
                  <motion.button
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                      scale: 1.2,
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                  >
                    <Link
                      className=""
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
                  </motion.button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="relative max-w-sm w-full h-full">
          <Image className="p-3 " src={HeroSvg} fill={true} alt="" />
        </div>
      </motion.div>

      <LowerBar />
    </section>
  );
};
