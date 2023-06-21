import { useContext } from "react";
import { HeaderContext } from "./context/HeaderContext";

import HeaderTop from "./components/headerTop";
import HeaderMiddle from "./components/headerMiddle";
import HeaderBottom from "./components/headerBottom";
import Container from "./components/container";

const Header = () => {
  const { prevScrollPos } = useContext(HeaderContext);
  const HeaderSize = prevScrollPos > 50 ? "h-16" : "h-44";

  return (
    <div
      className={`fixed transition-all ease-in-out duration-150 
       top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] w-full z-40 border-b-2  ${HeaderSize}`}
    >
      <Container>
        {prevScrollPos < 50 ? <HeaderTop /> : null}
        <HeaderMiddle />
        <HeaderBottom />
      </Container>
    </div>
  );
};

export default Header;
