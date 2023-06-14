const DropDown = () => {
  return (
    <div className="absolute top-36  xl:right-64 right-0  xl:w-44 w-full h-max  p-2.5 bg-[#FFFFFF] transition-opacity duration-300 ease-in-out transition-transform">
      <ul>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          ამინდი
        </li>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          სამხედრო
        </li>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          რეგიონი
        </li>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          ინტერვიუ
        </li>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          ბიზნესი
        </li>
        <li className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer">
          არჩევნები
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
