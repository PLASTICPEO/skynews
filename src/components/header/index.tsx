import { useContext } from "react";
import { HeaderContext } from "./context/HeaderContext";

import Languages from "./components/languages";
import Social from "./components/social";
import Logo from "./components/logo";
import Navigator from "./components/navigator";

const Header = () => {
  const { prevScrollPos } = useContext(HeaderContext);

  return (
    <div
      className={`fixed transition-all ease-in-out duration-150 
       top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] w-full z-40 shadow  ${
         prevScrollPos > 150 ? "h-28" : "h-44"
       }`}
    >
      <div
        className={`container m-auto transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-between">
          <Languages />
          <Social />
        </div>
        <Logo />
        <Navigator />
      </div>
    </div>
  );
};

export default Header;
