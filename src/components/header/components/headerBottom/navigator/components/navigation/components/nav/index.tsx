import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";

import { NavigationPropsTypes } from "../../navigation.types";
import NavItem from "../navItems";

const Nav: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { prevScrollPos } = useContext(HeaderContext);

  const listClass = prevScrollPos > 50 ? "xl:space-x-8" : "xl:space-x-10";

  return (
    <div>
      <ul
        className={`flex xl:w-full text-lg font-medium order-1 not-italic font-case font-Helvetica   ${listClass}`}
      >
        {navItems.map((item, index) => (
          <NavItem key={index} href={item.href} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
