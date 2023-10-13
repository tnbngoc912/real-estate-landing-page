import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../Button/ButtonGroup";
import { Nav } from "../Nav";

export const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header
      id="header"
      className={`header fixed left-0 w-full z-30 top-0  header-container ${
        isScrolled && "header-scrolled"
      }`}
    >
      <div className="header--container wrap wrap-px ">
        <div className="header-logo--container">
          <Nav />
        </div>
        <div className="flex items-center ml-auto">
          <ButtonGroup className="hidden md:block">
            <Button
              type="secondary"
              label="Sign in"
              to=""
              className="mr-[19px]"
            />
            <Button type="primary" label="Get Started Free" to="" />
          </ButtonGroup>
        </div>
      </div>
    </header>
  );
};
