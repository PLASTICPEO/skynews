import Banner from "../../banner";
import SectionHeader from "../components/sectionHeader";

import dayNewsPhoto from "../../../assets/dayNewsPhoto.png";
import SectionItem from "../components/sectionItem";
import Currency from "./components/currency";

const DayNews = () => {
  return (
    <div className="sticky top-32 mt-4 p-4 bg-[#FFFFFF] rounded-lg shadow-sm xl:block hidden">
      <SectionHeader title={"დღის სიახლე"} style={"text-base"} />
      <div className="overflow-auto h-[620px]">
        <SectionItem
          photo={dayNewsPhoto}
          category={"მსოფლიო"}
          time={"12"}
          text={"ისევ ღამურა - აფრიკაში მარბურგის ვირუსის აფეთქება დაფიქსირდა"}
          style={"text-sm"}
          styleCategory="text-xs"
          styleTime="text-xs"
        />
        <Currency />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
};

export default DayNews;
