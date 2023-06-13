import Info from "../../../../newsFeedsContainer/mainNewsFeed/info";
import Item from "../../../../newsFeedsContainer/sideNewsFeed/item";
import TopNewsPhoto from "../../../../../assets/topNewsPhoto.png";

import PhotoFromSection from "../../../../../assets/photoSection.png";
import Description from "../../../../newsFeedsContainer/mainNewsFeed/description";

const TopNews = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg">
      <div>
        <img src={TopNewsPhoto} alt="" />
        <Info time={"24"} category="ბიზნესი" />
        <Description
          font={"text-base"}
          text={
            "ენერგეტიკის სააგენტო: 2022-ის მარტთან შედარებით, რუსული ნავთობიდან შემოსავალი 43%-ით შემცირდა"
          }
        />
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
