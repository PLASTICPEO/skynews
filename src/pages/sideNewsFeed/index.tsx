import Item from "../../components/sideNewsFeed/item";
import SideNewsFeedButton from "../../components/sideNewsFeed/button";

const SideNewsFeed = () => {
  return (
    <div className="xl:w-[496px] h-[603.42px] overflow-auto bg-[#FFFFFF] mt-10 xl:ml-6 pt-4 pl-4 pr-4 rounded-lg shadow-sm">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <SideNewsFeedButton />
    </div>
  );
};

export default SideNewsFeed;
