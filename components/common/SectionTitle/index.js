import { spaceGrotesk } from "@/pages/_app";

export const SectionTitle = ({ title = "" }) => {
  return (
    <div
      className={`${spaceGrotesk.className} capitalize text-2xl	 lg:text-[70px] font-normal lg:leading-[77px] lg:tracking-[-3px] text-black-100 mb-[26px]`}
    >
      {title}
    </div>
  );
};
