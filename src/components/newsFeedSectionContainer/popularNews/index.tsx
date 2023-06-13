import TopNews from "./components/topNews";
import SectionHeader from "../components/sectionHeader";

const PopularNews = () => {
  return (
    <div className="mt-6 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
      <SectionHeader title="პოპულარული სიახლეები" />
      <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-6">
        <TopNews />
        <TopNews />
      </div>
    </div>
  );
};

export default PopularNews;
