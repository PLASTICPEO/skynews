import { useContext } from "react";

import HeaderTop from "./headerTop";
import HeaderMiddle from "./headerMiddle";
import HeaderBottom from "./headerBottom";
import Container from "./container";
import { AppContext } from "../../context/HeaderContext";

const Header = () => {
  const { scrollY, isOpenMobileSearch } = useContext(AppContext);

  // const HeaderSize =
  //   scrollY > 50 && window.innerWidth > 550 ? "h-15 " : "h-42 ";
  const isHiddenHeader = isOpenMobileSearch ? "hidden" : "";

  return (
    <div
      className={`fixed transition-all ${isHiddenHeader} drop-shadow-lg no-scrollbar  ease-in-out duration-150 
       top-0 xl:flex xl:flex-col justify-between bg-[#FFFFFF] w-full z-40 border-b-1  `}
    >
      <Container>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
      </Container>
    </div>
  );
};

export default Header;
