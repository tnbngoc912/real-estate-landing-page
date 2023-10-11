import { useEffect, useState } from "react";
import { SectionContainer } from "../Section";
import { Button } from "../Button/Button";
import { ButtonGroup } from "../Button/ButtonGroup";
import { Nav } from "../Nav";

export const Header = () => {
  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Removing listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isScrolled, setScrolled] = useState(false);

  // Handler when page is scrolled
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
      className={`header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50 header-container ${
        isScrolled && "header-scrolled"
      }`}
    >
      <SectionContainer className="header--container wrap wrap-px ">
        <div className="header-logo--container">
          <Nav />
        </div>
        <SectionContainer className="flex items-center ml-auto">
          <ButtonGroup className="hidden md:block">
            <Button
              type="no-outline"
              label="Sign in"
              to=""
              className="mr-[19px]"
            />
            <Button type="black" label="Get Started Free" to="" />
          </ButtonGroup>
        </SectionContainer>
      </SectionContainer>
    </header>
  );
};
