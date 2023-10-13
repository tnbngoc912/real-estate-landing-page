import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

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

export const Nav = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <nav className="header-nav">
      <div className="header-nav--container">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="mobile-menu"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <Icon
            icon="material-symbols:menu-rounded"
            className="h-6 w-auto text-black"
          />
        </button>
        <div
          className={`header-nav--menu-container z-20 ${
            isNavOpen ? "show" : "hide"
          }`}
          id="navbar-default"
        >
          <ul className="header-nav--menu">
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
