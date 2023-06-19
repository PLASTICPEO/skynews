import { DescriptionTypes } from "./description.types";

const Description: React.FC<DescriptionTypes> = ({ style, text }) => {
  return (
    <div>
      <p className={`${style} font-[Helvetica] mt-1`}>{text}</p>
    </div>
  );
};

export default Description;
