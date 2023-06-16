import { SectionHeaderTypes } from "./SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderTypes> = ({
  title,
  style,
  buttonText,
}) => {
  return (
    <div className="flex justify-between font-[Helvetica] text-[#101828]">
      <p className={`${style}`}>{title}</p>
      <p className="text-sm cursor-pointer hover:text-[#1989F0]">
        {buttonText}
      </p>
    </div>
  );
};

export default SectionHeader;
