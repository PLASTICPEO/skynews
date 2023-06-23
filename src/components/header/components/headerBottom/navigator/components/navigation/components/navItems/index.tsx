import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";
import { NavItemPropsTypes } from "./navItems.types";

const NavItem: React.FC<NavItemPropsTypes> = ({ href, name }) => {
  const { scrollPositionTop, prevScrollPos } = useContext(HeaderContext);
  const itemsHeight = prevScrollPos < 50 ? "h-12" : "h-10";

  if (href) {
    return (
      <Link to={href}>
        <li
          onClick={scrollPositionTop}
          className={`${itemsHeight} hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]`}
        >
          {name}
        </li>
      </Link>
    );
  } else {
    return (
      <li
        onClick={scrollPositionTop}
        className={`${itemsHeight}  hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]`}
      >
        {name}
      </li>
    );
  }
};

export default NavItem;
