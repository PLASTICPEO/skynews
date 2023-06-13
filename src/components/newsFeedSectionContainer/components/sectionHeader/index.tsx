import { SectionHeaderTypes } from "./SectionHeader.types";

const SectionHeader: React.FC<SectionHeaderTypes> = ({ title, fontSize }) => {
  return (
    <div className="flex justify-between font-[Helvetica] text-[#101828]2">
      <p className={`${fontSize}`}>{title}</p>
      <p className="text-sm">ყველა სიახლე</p>
    </div>
  );
};

export default SectionHeader;
