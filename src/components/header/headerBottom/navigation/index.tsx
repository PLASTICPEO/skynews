import { NavigationPropsTypes } from "./navigation.types";
import { Link } from "react-router-dom";
import More from "../navigator/more";
import SearchBar from "../search";
import { useContext } from "react";
import { AppContext } from "../../../../context/HeaderContext";

const Navigation: React.FC<NavigationPropsTypes> = ({ navItems }) => {
  const { scrollY } = useContext(AppContext);

  const spaceBetween = scrollY > 50 ? "space-x-4" : "space-x-6";

  return (
    <div className="flex justify-between space-x-4 w-full text-[#475467] cursor-pointer select-none  ">
      <div className={`flex ${spaceBetween}  xl:px-0 px-2 select-none`}>
        {navItems.map((item) => {
          return (
            <Link
              key={item.id}
              to={item.href}
              className="border-b-[1px] border-[#FFFFFF] hover:border-[#1989F0]"
            >
              <p className="w-max text-lg font-case font-Helvetica hover:text-[#1989F0] py-4">
                {item.name}
              </p>
            </Link>
          );
        })}
        <More />
      </div>
      <SearchBar />
    </div>
  );
};

export default Navigation;
