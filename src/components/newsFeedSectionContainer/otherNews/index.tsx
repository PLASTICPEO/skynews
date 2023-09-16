import Item from "../../NewsFeedsContainer/sideNewsFeed/item/index.tsx";
import SectionHeader from "../components/sectionHeader/index.tsx";
import { useOtherNews } from "./components/hooks/useOtherNews.ts";

import Loader from "./components/loader/index";

const OtherNews = () => {
  const { lastItemRef, newData } = useOtherNews();
  return (
    <div className="p-4 mt-4 rounded-lg bg-[#FFFFFF] shadow-sm ">
      <SectionHeader
        title={"სხვა სიახლები"}
        style={"text-base"}
        buttonText="ყველა სიახლე"
      />
      <div className="flex flex-col gap-2 mt-2">
        {newData.map((item, index) => {
          return (
            <Item
              key={index}
              time={item.time}
              category={item.category}
              photo={item.photo}
              text={item.text}
            />
          );
        })}
        <Loader />
        <div ref={lastItemRef} className="mt-36"></div>
      </div>
    </div>
  );
};

export default OtherNews;
