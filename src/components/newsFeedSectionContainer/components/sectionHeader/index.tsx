import { SectionHeaderTypes } from "./SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderTypes> = ({
  title,
  style,
  buttonText,
}) => {
  return (
    <div className="flex justify-between font-[Helvetica] text-[#101828]">
      <p className={`${style} `}>{title}</p>
      <p className="leading-5 tracking-wider not-italic font-case font-Helvetica  cursor-pointer text-[#475467]  hover:text-[#1989F0]">
        {buttonText}
      </p>
    </div>
  );
};

export default SectionHeader;
