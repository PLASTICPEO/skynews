import { SectionHeaderTypes } from "./SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderTypes> = ({ title, style }) => {
  return (
    <div className="flex justify-between font-[Helvetica] text-[#101828]">
      <p className={`${style}`}>{title}</p>
      <p className="text-sm">ყველა</p>
    </div>
  );
};

export default SectionHeader;
