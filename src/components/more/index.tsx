import { ReactNode } from "react";

const MoreLayout: React.FC<{
  children: ReactNode;
  toggleDropDown: () => void;
}> = ({ children, toggleDropDown }) => {
  return (
    <div className="absolute top-0 left-0 flex items-end  w-full h-screen bg-[black] bg-opacity-50 z-50">
      <div className="bg-[#FFFFFF] w-full  rounded-lg">
        <div className="flex justify-between w-full p-6 text-2xl text-[#101828] border-b-[1px] border-[#F2F4F7]">
          <p>მეტი</p>
          <span
            onClick={() => toggleDropDown()}
            className="material-symbols-outlined text-2xl"
          >
            close
          </span>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};
export default MoreLayout;
