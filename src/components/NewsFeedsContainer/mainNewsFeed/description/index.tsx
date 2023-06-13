import { DescriptionTypes } from "./description.types";

const Description: React.FC<DescriptionTypes> = ({ fontSize, text }) => {
  return (
    <div>
      <p className={`${fontSize} font-[Helvetica] mt-1`}>{text}</p>
    </div>
  );
};

export default Description;
