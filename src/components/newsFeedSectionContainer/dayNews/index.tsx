import Banner from "../../banner";
import SectionHeader from "../components/sectionHeader";

const DayNews = () => {
  return (
    <div className="sticky top-36 mt-4 p-4 bg-[#FFFFFF] rounded-lg shadow-sm">
      <SectionHeader title={"დღის სიახლე"} fontSize={"text-base"} />
      <div>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
};

export default DayNews;
