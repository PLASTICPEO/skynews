import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../../../context/HeaderContext";
import MoreLayout from "../../../../more";

const moreItems = [
  { id: "1", label: "ამინდი" },
  { id: "2", label: "სამხედრო" },
  { id: "3", label: "რეგიონი" },
  { id: "4", label: "ინტერვიუ" },
  { id: "5", label: "ბიზნესი" },
  { id: "6", label: "არჩევნები" },
];

const More: React.FC = () => {
  const { isOpenDropDown, toggleDropDown } = useContext(AppContext);

  const screenSize = window.innerWidth;

  return (
    <div className="flex items-center justify-center border-b-[1px] border-[#FFFFFF] hover:border-[#1989F0]">
      <div
        onClick={toggleDropDown}
        className="flex items-center justify-center select-none  hover:text-[#1989F0] "
      >
        <p className="text-lg font-case font-Helvetica">მეტი</p>
        <span className="material-symbols-outlined px-2">expand_more</span>
      </div>
      <div className="absolute top-[100%] -translate-x-1/5">
        {isOpenDropDown && screenSize > 550 ? (
          <div className="bg-[#FFFFFF] drop-shadow-xl py-2 rounded ">
            {moreItems.map((item: { label: string; id: string }) => {
              return (
                <Link
                  key={item.id}
                  to={`/${item.label}`}
                  className="hover:bg-[#1989F0]"
                >
                  <p className="py-4 px-5 w-44 hover:bg-[#1989F00D] hover:text-[#1989F0]">
                    {item.label}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
      {isOpenDropDown && screenSize < 550 ? (
        <MoreLayout toggleDropDown={toggleDropDown}>
          <div className="bg-[#FFFFFF] drop-shadow-xl py-2 rounded">
            <ul>
              {moreItems.map((item: any, index: number) => {
                return (
                  <Link key={index} to={`/${item.label}`}>
                    <li className="p-4 border-b-[1px] border-[#EAECF0]">
                      {item.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </MoreLayout>
      ) : null}
    </div>
  );
};
export default More;
