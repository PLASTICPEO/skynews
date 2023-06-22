import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import { NavigationPropsTypes } from "../../navigation.types";
import NavItem from "../navItems";

const Nav: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos } = useContext(HeaderContext);

  const listClass = prevScrollPos > 50 ? "xl:space-x-7" : "xl:space-x-10";

  return (
    <div>
      <ul className={`flex  space-x-4 xl:w-full w-[1000px] ${listClass}`}>
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
