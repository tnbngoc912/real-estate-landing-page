import Image from "next/image";

export const ItemSlide = ({
  src = "",
  leftContent = "",
  rightContent = ""
}) => {
  return (
    <div className="h-[200px] lg:h-[457px] relative w-full">
      <Image
        layout="fill"
        objectFit="cover"
        src={src}
        alt="img-home"
        className="brightness-75"
      />
      <div className="w-full absolute bottom-[30px]">
        <div className="flex items-center bottom-[40px] justify-between px-[30px]">
          <p className="text-white font-bold text-base lg:text-[22px]">
            {leftContent}
          </p>
          <p className="text-white font-bold text-sm lg:text-[22px]">
            {rightContent}
          </p>
        </div>
      </div>
    </div>
  );
};
