import Info from "../../../../NewsFeedsContainer/mainNewsFeed/info";
import Item from "../../../../newsFeedsContainer/sideNewsFeed/item";
import TopNewsPhoto from "../../../../../assets/topNewsPhoto.png";

import PhotoFromSection from "../../../../../assets/photoSection.png";

const TopNews = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg">
      <div className="p-2">
        <img src={TopNewsPhoto} alt="" />
        <Info />
        <p>
          ენერგეტიკის სააგენტო: 2022-ის მარტთან შედარებით, რუსული ნავთობიდან
          შემოსავალი 43%-ით შემცირდა
        </p>
      </div>
      <div>
        <Item photo={PhotoFromSection} />
        <Item photo={PhotoFromSection} />
        <Item photo={PhotoFromSection} />
        <Item photo={PhotoFromSection} />
      </div>
    </div>
  );
};

export default TopNews;
