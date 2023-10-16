import { inter } from "@/pages/_app";
import Image from "next/image";

export const SlideItem = ({ src = "", content = "" }) => {
  return (
    <div className="flex w-auto sm:py-4 md:py-5 lg:py-7">
      <div className="h-6 w-6 lg:h-8 lg:w-8 relative">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="icon-amenities"
        />
      </div>
      <p className={`${inter.className} pl-2 text-base lg:pl-4 lg:text-3xl`}>
        {content}
      </p>
    </div>
  );
};
