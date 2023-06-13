import PopularNews from "./popularNews";
import DayNews from "./dayNews";
import Banner from "../banner";
import MayBeInterest from "./mayBeInterest";
import OtherNews from "./otherNews";

const NewsFeedSectionContainer = () => {
  return (
    <div className="xl:grid xl:grid-cols-10 grid-cols-10 gap-4">
      <div className="xl:col-span-7 col-span-7">
        <Banner />
        <PopularNews />
        <Banner />
        <MayBeInterest />
        <Banner />
        <OtherNews />
      </div>
      <div className="xl:col-span-3 col-span-3">
        <DayNews />
      </div>
    </div>
  );
};

export default NewsFeedSectionContainer;
