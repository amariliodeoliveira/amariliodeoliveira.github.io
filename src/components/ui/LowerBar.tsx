"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ArrowDown from "../../../public/svg/arrow-down.svg";
import GithubMark from "../../../public/svg/github-mark.svg";
import LinkedInMark from "../../../public/svg/linkedin-mark.svg";

export const LowerBar = () => {
  return (
    <div className="flex sm:hidden absolute left-1/2 -ml-10 bottom-0 pb-2">
      <Image
        className="animate-bounce cursor-pointer hidden"
        src={ArrowDown}
        width={30}
        height={30}
        alt=""
      />

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
                className="lg:w-7 w-9 lg:h-7 h-9"
                href={"https://github.com/amariliodeoliveira"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={GithubMark} alt="GitHub" fill={true} />
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
                className="lg:w-7 w-9 lg:h-7 h-9"
                href={"https://www.linkedin.com/in/amariliodeoliveira/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={LinkedInMark} alt="LinkedIn" fill={true} />
              </Link>
            </motion.button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
