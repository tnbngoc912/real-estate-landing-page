import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

const DELAY = 5;

export const Layout = ({ children, className = "" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const logo = document.getElementById("BuildingsLoad");
    const paths = document.getElementById("path");
    const duration = 5;
    const delay = 0.3;
    const fillDelay = paths?.length * delay;
    logo.style.animation = `fillAnimation ${duration}s ease forwards ${fillDelay}s`;
    const length = paths.getTotalLength();
    paths.style.strokeDasharray = length;
    paths.style.strokeDashoffset = length;
    paths.style.animation = `lineAnimation ${duration}s ease forwards ${delay}s`;
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => setShow(true), DELAY * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!show ? (
        <svg
          id="BuildingsLoad"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2400 1680"
        >
          <path
            id="path"
            className="cls-1"
            d="M30,1298.81H374.41V880.12H574V1342.9H470.93V972.15H726.67v119.32h53.82V776.4H912.58v588.76l79.28-45.77V799.88l-47.61-27.49v524.27h230.57V837.06H1041.75v62.63h56.75V478.93l184-7.83v883.18h-65.18V939.85h272.8v409.78l73-1.27c4.08-.07,0-528.78,0-528.78H1423.54v501.08h236.09V855.78l-65.24,42.08V1287h104.38V1047.57l114,.17,1,260.11h42.5V1120.13h48v177h40.12V1167.93h94.91v129.16H2370"
          />
        </svg>
      ) : (
        <main
          className={`main relative overflow-hidden ${
            className && className
          }  ${
            show &&
            `${
              show ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in-out delay-150 duration-300`
          } `}
        >
          <Header />
          {children}
          <Footer />
        </main>
      )}
    </>
  );
};
