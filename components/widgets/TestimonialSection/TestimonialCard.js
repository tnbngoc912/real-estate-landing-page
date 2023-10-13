import { Icon } from "@iconify/react";
import Image from "next/image";

export const TestimonialCard = ({
  content = "",
  avatar = "",
  name = "",
  jobTitle = "",
  rates = 0
}) => {
  return (
    <div className="p-4 h-full">
      <div className="h-full bg-white p-4 md:p-6 lg:p-8 rounded min-h-[420px]">
        <div className="flex items-center justify-between">
          <Image
            src="/icons/icon-quotation.png"
            alt="icon-quotation"
            width={40}
            height={28}
          />

          <div className="flex items-center">
            {[...Array(rates)].map((_, idx) => {
              return (
                <Icon
                  key={idx}
                  icon="typcn:star"
                  className="h-6 w-auto text-yellow"
                />
              );
            })}
          </div>
        </div>

        <p className="leading-relaxed my-6">{content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <Image
              width={54}
              height={54}
              alt="avatar"
              src={avatar}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                {name}
              </span>
              <span className="text-gray-500 text-sm">{jobTitle}</span>
            </span>
          </div>
          <Image
            src="/icons/icon-check.png"
            alt="icon-quotation"
            width={23}
            height={23}
          />
        </div>
      </div>
    </div>
  );
};
