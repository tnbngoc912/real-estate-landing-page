import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import useOnClickOutside from "@/utils/hooks/useClickOutside";

const navigation = [
  { name: "Home", to: "#home", href: "/#home" },
  { name: "Blogs", to: "#blogs", href: "/#blogs" },
  { name: "Pricing", to: "#pricing", href: "/#pricing" },
  {
    name: "Contact",
    href: "",
    target: "_blank"
  }
];

export const Nav = ({ isNavOpen, setIsNavOpen }) => {
  const router = useRouter();
  const ref = useRef();

  useOnClickOutside(ref, () => setIsNavOpen(false));

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <nav className="header-nav" ref={ref}>
      <div className={`header-nav--container `}>
        <button
          className="lg:hidden md:hidden text-left flex top-0 right-0 z-20 relative w-10 h-10 text-black focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                isNavOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                isNavOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                isNavOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
        <div
          className={`header-nav--menu-container z-20 
          `}
          id="navbar-default"
        >
          <ul
            className={`header-nav--menu ${
              isNavOpen
                ? "h-auto sm:h-56"
                : "md:h-auto lg:h-auto sm:h-0 sm:p-0 sm:border-none"
            } transition-all delay-100 duration-200 overflow-hidden w-full`}
          >
            {navigation.map((item) => (
              <li key={item.name} className="header-nav--menu-item">
                <a
                  key={item.name}
                  to={item.to}
                  href={item.href}
                  className={`menu-item--link flex items-center
                    ${router.pathname === item.href ? "active" : ""}
                  `}
                  onClick={closeNav}
                  target={item.target ? item.target : "_self"}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
