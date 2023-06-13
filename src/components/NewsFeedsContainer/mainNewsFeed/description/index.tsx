import { DescriptionTypes } from "./description.types";

const Description: React.FC<DescriptionTypes> = ({ font, text }) => {
  return (
    <div>
      <p className={`${font} font-[Helvetica] mt-1`}>{text}</p>
    </div>
  );
};

export default Description;
