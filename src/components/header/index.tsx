import { useContext } from "react";
import { HeaderContext } from "./context/HeaderContext";

import Languages from "./components/languages";
import Social from "./components/social";
import Logo from "./components/logo";
import Navigator from "./components/navigator";

const Header = () => {
  const { prevScrollPos } = useContext(HeaderContext);

  return (
    <div className="fixed top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] h-auto w-full z-40 shadow transition-all">
      <div className="container m-auto">
        <div className="flex justify-between items-center pt-5">
          {prevScrollPos > 150 ? (
            ""
          ) : (
            <>
              <Languages />
              <Social />
            </>
          )}
        </div>
        <div
          className={`${
            prevScrollPos > 150 ? "flex justify-end" : "block"
          } justify-between`}
        >
          <div className="xl:flex  xl:justify-center items-center">
            <Logo />
          </div>
          <div
            className={`xl:mt-0 mt-14 ${prevScrollPos > 150 ? "ml-4" : "ml-0"}`}
          >
            <Navigator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
