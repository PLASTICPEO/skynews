import Info from "../../../../NewsFeedsContainer/mainNewsFeed/info/index.tsx";
import Item from "../../../../NewsFeedsContainer/sideNewsFeed/item/index.tsx";
import TopNewsPhoto from "../../../../../assets/topNewsPhoto.png";

import PhotoFromSection from "../../../../../assets/photoSection.png";
import Description from "../../../../NewsFeedsContainer/mainNewsFeed/description/index";

const TopNews = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg">
      <div className="mt-6">
        <img src={TopNewsPhoto} alt="" className="w-full h-full bg-auto" />
        <Info
          time={"24"}
          category="ბიზნესი"
          timeStyle="text-xs"
          categoryStyle="text-xs"
        />
        <Description
          style={"text-base"}
          text={
            "ენერგეტიკის სააგენტო: 2022-ის მარტთან შედარებით, რუსული ნავთობიდან შემოსავალი 43%-ით შემცირდა"
          }
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Item
          time={"24"}
          category={"მსოფლიო"}
          photo={PhotoFromSection}
          text={
            "უკრაინაში დაღუპული კიდევ ერთი ქართველი მებრძოლი მიხეილ მაზანაშვილი სამშობლოში ჩამოასვენეს"
          }
        />
        <Item
          time="24"
          category="მსოფლიო"
          photo={PhotoFromSection}
          text={
            "უკრაინაში დაღუპული კიდევ ერთი ქართველი მებრძოლი მიხეილ მაზანაშვილი სამშობლოში ჩამოასვენეს"
          }
        />
        <Item
          time="24"
          category="მსოფლიო"
          photo={PhotoFromSection}
          text="უკრაინაში დაღუპული კიდევ ერთი ქართველი მებრძოლი მიხეილ მაზანაშვილი სამშობლოში ჩამოასვენეს"
        />
        <Item
          time={"24"}
          category={"მსოფლიო"}
          photo={PhotoFromSection}
          text={
            "უკრაინაში დაღუპული კიდევ ერთი ქართველი მებრძოლი მიხეილ მაზანაშვილი სამშობლოში ჩამოასვენეს"
          }
        />
      </div>
    </div>
  );
};

export default TopNews;
