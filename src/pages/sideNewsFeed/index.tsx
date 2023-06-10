import Item from "../../components/sideNewsFeed/item";
import SideNewsFeedButton from "../../components/sideNewsFeed/button";

const SideNewsFeed = () => {
  return (
    <div className="overflow-auto bg-[#FFFFFF] rounded-lg shadow-sm">
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
