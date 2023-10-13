import { spaceGrotesk } from "@/pages/_app";
import Image from "next/image";

export const Badge = ({ content, vertical }) => {
  return (
    <div
      className={`${
        vertical ? "flex" : "inline-flex"
      }  mb-[26px] justify-center	lg:justify-normal	`}
    >
      <Image
        className="sm:hidden md:hidden lg:block"
        src="/icons/icon-arrow.svg"
        width="19"
        height="19"
        alt="icon-arrow"
      />
      <Image
        className="sm:block md:block lg:hidden"
        src="/icons/icon-arrow.svg"
        width="12"
        height="12"
        alt="icon-arrow"
      />
      <p
        className={`${spaceGrotesk.className} pl-2 lg:pl-6 uppercase text-sm font-bold lg:text-xl lg:tracking-[3px]`}
      >
        {content}
      </p>
    </div>
  );
};
