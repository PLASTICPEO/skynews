import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import { NavigationPropsTypes } from "../../navigation.types";
import NavItem from "../navItem";

const Nav: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos, scrollPositionTop } = useContext(HeaderContext);

  const listClass = prevScrollPos > 50 ? "xl:space-x-7" : "xl:space-x-10";

  return (
    <div>
      <ul className={`flex  space-x-4 xl:w-full w-[1000px] ${listClass}`}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            scrollPositionTop={scrollPositionTop}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
