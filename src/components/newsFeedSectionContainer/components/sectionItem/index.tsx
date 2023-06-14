import { SectionItemTypes } from "./sectionItem.types";

import Description from "../../../newsFeedsContainer/mainNewsFeed/description";
import Info from "../../../newsFeedsContainer/mainNewsFeed/info";

const SectionItem: React.FC<SectionItemTypes> = ({
  photo,
  time,
  category,
  text,
  style,
  styleTime,
  styleCategory,
}) => {
  return (
    <div className="mt-6">
      <img src={photo} alt="" className="xl:m-0 m-auto w-full bg-cover" />
      <Info
        time={time}
        category={category}
        timeStyle={styleTime}
        categoryStyle={styleCategory}
      />
      <Description fontSize={style} text={text} />
    </div>
  );
};

export default SectionItem;
