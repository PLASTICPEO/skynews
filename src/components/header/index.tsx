import { useContext } from "react";
import { HeaderContext } from "./context/HeaderContext";

import HeaderTop from "./headerTop";
import HeaderMiddle from "./headerMiddle";
import HeaderBottom from "./headerBottom";
import Container from "./container";

const Header = () => {
  const { scrollY } = useContext(HeaderContext);

  const HeaderSize = scrollY > 50 ? "h-15" : "h-42";

  return (
    <div
      className={`fixed transition-all ease-in-out duration-150 
       top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] w-full z-40 border-b-1 ${HeaderSize} `}
    >
      <Container>
        {scrollY < 50 ? <HeaderTop /> : null}
        <HeaderMiddle />
        <HeaderBottom />
      </Container>
    </div>
  );
};

export default Header;
