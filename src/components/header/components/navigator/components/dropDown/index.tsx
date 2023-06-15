import { useDropDown } from "./hooks/useDropDown";

const DropDown: React.FC = () => {
  const { items, handleLangClick } = useDropDown();
  return (
    <div className="absolute top-36  xl:right-64 right-0  xl:w-44 w-full h-max  p-2.5 bg-[#FFFFFF] transition-opacity duration-300 ease-in-out transition-transform">
      {items && (
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleLangClick(item.id)}
              className="pl-5 pt-4 h-12 hover:accent-[#1989F0] hover:bg-[#DCEDF9] hover:text-[#1989F0] cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
