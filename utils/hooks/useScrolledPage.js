import { useEffect, useState } from "react";

const useScrolledPage = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return isScrolled;
};

export default useScrolledPage;
