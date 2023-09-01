const MobileMenu: React.FC<{ dropDownToggle?: any }> = ({ dropDownToggle }) => {
  return (
    <div className="fixed top-0 left-0 flex items-end  w-full h-screen bg-[black] bg-opacity-50 z-50">
      <div className="bg-[#FFFFFF] w-full h-96 rounded-lg">
        <div className="flex justify-between w-full p-6 text-2xl text-[#101828] border-b-[1px] border-[#F2F4F7]">
          <p>მეტი</p>
          <span
            onClick={dropDownToggle}
            className="material-symbols-outlined text-2xl"
          >
            close
          </span>
        </div>
        <div className="py-4 px-2"></div>
      </div>
    </div>
  );
};
export default MobileMenu;
