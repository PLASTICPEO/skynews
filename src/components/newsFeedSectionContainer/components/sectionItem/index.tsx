import { SectionItemTypes } from "./sectionItem.types";

import Description from "../../../NewsFeedsContainer/mainNewsFeed/description";
import Info from "../../../NewsFeedsContainer/mainNewsFeed/info";

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
      <Description style={style} text={text} />
    </div>
  );
};

export default SectionItem;
