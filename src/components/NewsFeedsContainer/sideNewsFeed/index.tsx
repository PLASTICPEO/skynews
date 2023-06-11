import Item from "./item";
import SideNewsFeedButton from "./button";

const SideNewsFeed = () => {
  return (
    <div className="pt-4 px-4 xl:mt-0 mt-6 h-[585px] bg-[#FFFFFF] rounded-lg shadow-sm">
      <div className="overflow-auto h-full relative">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <SideNewsFeedButton />
      </div>
    </div>
  );
};

export default SideNewsFeed;
