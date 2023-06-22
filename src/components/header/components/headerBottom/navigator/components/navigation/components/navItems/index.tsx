import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../../../../../../../context/HeaderContext";
import { NavItemPropsTypes } from "./navItems.types";

const NavItem: React.FC<NavItemPropsTypes> = ({ href, name }) => {
  const { scrollPositionTop } = useContext(HeaderContext);
  if (href) {
    return (
      <Link to={href}>
        <li
          onClick={scrollPositionTop}
          className="h-10 pb-10 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]"
        >
          {name}
        </li>
      </Link>
    );
  } else {
    return (
      <li
        onClick={scrollPositionTop}
        className="h-10 hover:border-b-2 hover:border-blue-400 hover:border-[#1989F0] hover:text-[#1989F0]"
      >
        {name}
      </li>
    );
  }
};

export default NavItem;
