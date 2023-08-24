import Item from "../../NewsFeedsContainer/sideNewsFeed/item/index.tsx";
import SectionHeader from "../components/sectionHeader/index.tsx";

import otherNewsPhoto from "../../../assets/otherNews.png";
import Loader from "./components/loader/index";

const OtherNews = () => {
  return (
    <div className="p-4 mt-4 rounded-lg bg-[#FFFFFF] shadow-sm ">
      <SectionHeader
        title={"სხვა სიახლები"}
        style={"text-base"}
        buttonText="ყველა სიახლე"
      />
      <div className="flex flex-col gap-2 mt-2">
        <Item
          time={"12"}
          category={"პოლიტიკა"}
          photo={otherNewsPhoto}
          titleFontStyle="xl:text-sm text-xs"
          descriptionFont="text-sm"
          text={
            "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს "
          }
        />
        <Item
          time={"12"}
          category={"პოლიტიკა"}
          photo={otherNewsPhoto}
          titleFontStyle="xl:text-sm text-xs"
          descriptionFont="text-sm"
          text={
            "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს "
          }
        />
        <Item
          time={"12"}
          category={"პოლიტიკა"}
          photo={otherNewsPhoto}
          titleFontStyle="xl:text-sm text-xs"
          descriptionFont="text-sm"
          text={
            "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს "
          }
        />
        <Item
          time={"12"}
          category={"პოლიტიკა"}
          photo={otherNewsPhoto}
          titleFontStyle="xl:text-sm text-xs"
          descriptionFont="text-sm"
          text={
            "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს "
          }
        />
        <Item
          time={"12"}
          category={"პოლიტიკა"}
          photo={otherNewsPhoto}
          titleFontStyle="xl:text-sm text-xs"
          descriptionFont="text-sm"
          text={
            "გენშტაბი: ბოლო ერთ დღეში უკრაინელებმა მტრის 70-ზე მეტი შეტევა მოიგერიეს "
          }
        />
      </div>
      <Loader />
    </div>
  );
};

export default OtherNews;
