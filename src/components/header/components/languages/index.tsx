const Languages = () => {
  return (
    <>
      <ul className="absolute xl:top-4 xl:visible invisible xl:left-36 flex space-x-5 font-[Helvetica] font-medium text-xs text-[#475467] ">
        <li className="cursor-pointer hover:text-[#1989F0]">ქარ</li>
        <li className="cursor-pointer hover:text-[#1989F0]">Eng</li>
        <li className="cursor-pointer hover:text-[#1989F0]">Rus</li>
      </ul>
      <select className="xl:invisible visible absolute top-20 right-10 text-[#1989F0] font-[Helvetica]">
        <option value="ქარ">GE</option>
        <option value="Eng">Eng</option>
        <option value="Rus">Rus</option>
      </select>
    </>
  );
};

export default Languages;
