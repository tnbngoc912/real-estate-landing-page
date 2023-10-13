import { Icon } from "@iconify/react";
import { Button } from "@/components/common/Button/Button";
import { spaceGrotesk } from "@/pages/_app";
import Image from "next/image";

export const CardItem = ({ src, content, title }) => {
  return (
    <div className="block">
      <div className=" mx-auto  my-5  rounded-lg overflow-hidden">
        <div className="p-4">
          <Image
            alt="card-image"
            width={356}
            height={450}
            src={src}
            className="w-full rounded-lg "
          />
        </div>
        <div className="p-4 ">
          <div className="h-full flex flex-col justify-between">
            <div className="capitalize text-lg font-medium">{title}</div>
            <p className="my-2 text-normal">{content}</p>
            <div className="flex items-center">
              <Button
                type="secondary"
                label="Book Now"
                className={`${spaceGrotesk.className} uppercase pr-2`}
              />
              <Icon
                icon="gridicons:arrow-right"
                className="h-6 w-auto text-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
