import Image from "next/image";

import ArrowDown from "../../../public/svg/arrow-down.svg";

export const LowerBar = () => {
  return (
    <div className="absolute left-1/2 bottom-0 pb-2 hidden">
      <Image
        className="animate-bounce cursor-pointer"
        src={ArrowDown}
        width={30}
        height={30}
        alt=""
      />
    </div>
  );
};
