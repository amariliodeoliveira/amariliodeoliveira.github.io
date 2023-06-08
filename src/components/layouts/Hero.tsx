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
        className="flex sm:flex-row flex-col sm:p-0 p-5 justify-between w-full h-full"
      >
        <div className="flex items-center w-auto h-full sm:p-3">
          <div className="flex flex-col">
            <h1
              id="name"
              className="align-middle sm:text-4xl lg:text-5xl text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#454545] to-[#533B4D]"
            >
             Amarilio de Oliveira  &lt;&#47;&gt;
            </h1>
            <h2 className="align-middle sm:text-xl lg:text-2xl text-4xl text-brown-sugar">
              Desenvolvedor Fullstack
            </h2>
            <h3 className="align-middle lg:text-base text-2xl text-taupe-gray">
              <TypeAnimation /* Adapted for Mobile */
                className=""
                sequence={[
                  "React.js | Next.js | TypeScript",
                  1000,
                  "React.js | Create-React-App | JavaScript",
                  1000,
                  "React.js | Tailwind CSS | Headless UI",
                  1000,
                  "React.js | Tailwind CSS | Framer Motion",
                  1000,
                  "React.js | Ant Design | Formik + Yup",
                  1000,
                  "React.js | Material UI | Hook Form + Zod",
                  1000,
                  "Vue.js | Nuxt.js | TypeScript",
                  1000,
                  "Vue.js | Vite | JavaScript",
                  1000,
                  "Node.js | Prisma | Express.js",
                  1000,
                  "Node.js | Prisma | Nest.js",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h3>

            <nav className="sm:flex hidden">
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

        <div className="hidden sm:flex relative xl:max-w-sm max-w-lg w-full h-full ">
          <Image className="p-3 " src={HeroSvg} fill={true} alt="" />
        </div>
      </motion.div>

      <LowerBar />
    </section>
  );
};
