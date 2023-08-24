import { InterestingTypes } from "./interesting.types";
import Info from "../../../../NewsFeedsContainer/mainNewsFeed/info";
import Description from "../../../../NewsFeedsContainer/mainNewsFeed/description";

const Interesting: React.FC<InterestingTypes> = ({ time, text, category }) => {
  return (
    <div>
      <div className="pb-4 border-b-2 border-[#F2F4F7]">
        <Info
          time={time}
          category={category}
          timeStyle="text-xs"
          categoryStyle="text-xs"
        />
        <Description style="text-sm" text={text} />
      </div>
    </div>
  );
};

export default Interesting;
