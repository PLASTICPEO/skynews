import Item from "../../../components/NewsFeedsContainer/sideNewsFeed/item/index.tsx";
import SideNewsFeedButton from "./button/index.tsx";
import newsPhoto from "../../../assets/orbanSideNews.svg";
import airplane from "../../../assets/sidenewsariplane.svg";
import frussia from "../../../assets/frussia.svg";
import usaDiploma from "../../../assets/usadipl.svg";

const sideNewsItems = [
  {
    time: "24",
    category: "პოლიტიკა",
    text: "ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება",
    thumbnail: newsPhoto,
  },
  {
    time: "24",
    category: "ანალიტიკა",
    text: "ვნუკოვოს აეროპორტის განრიგში მოსკოვი-თბილისის პირდაპირი რეისი გაჩნდა, შემდეგ კი გაქრა",
    thumbnail: airplane,
  },
  {
    time: "24",
    category: "მსოფლიო",
    text: "ლავროვის თქმით, ითვალისწინებენ დასავლეთის მცდელობებს, 'მეორე ფრონტი' გახსნას",
    thumbnail: frussia,
  },
  {
    time: "24",
    category: "ეკონომიკა",
    text: "აშშ-ის საელჩო: სიამაყეს, რომლითაც ქართული ენის სიყვარულს დაატარებთ, ვერავინ წაგართმევთ",
    thumbnail: usaDiploma,
  },
];

const SideNewsFeed = () => {
  return (
    <div className="px-4 h-full bg-[#FFFFFF] rounded-lg shadow-sm ">
      <div className="relative h-full flex flex-col ">
        {sideNewsItems.map(
          (
            item: {
              time: string | number;
              category: string;
              text: string;
              thumbnail: string;
            },
            index: number
          ) => {
            return (
              <Item
                key={index}
                time={item.time}
                category={item.category}
                photo={item.thumbnail}
                border
                text={item.text}
              />
            );
          }
        )}

        <SideNewsFeedButton />
      </div>
    </div>
  );
};

export default SideNewsFeed;
