import Item from "./item";
import SideNewsFeedButton from "./button";
import newsPhoto from "../../../assets/newsFeedsPhotoTest/Rectangle 4.png";

const SideNewsFeed = () => {
  return (
    <div className="px-4  h-full bg-[#FFFFFF] rounded-lg shadow-sm ">
      <div className="relative h-full">
        <Item
          time={"19"}
          category={"პოლიტიკა"}
          photo={newsPhoto}
          border
          descriptionFont="text-base"
          text="ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება"
        />
        <Item
          time={"19"}
          category={"პოლიტიკა"}
          photo={newsPhoto}
          border
          descriptionFont="text-base"
          text="ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება"
        />
        <Item
          time={"19"}
          category={"პოლიტიკა"}
          photo={newsPhoto}
          border
          descriptionFont="text-base"
          text="ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება"
        />
        <Item
          time={"19"}
          category={"პოლიტიკა"}
          photo={newsPhoto}
          border={false}
          descriptionFont="text-base"
          text="ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება"
        />
        <SideNewsFeedButton />
      </div>
    </div>
  );
};

export default SideNewsFeed;
