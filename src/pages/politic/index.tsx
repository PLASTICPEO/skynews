import DayNews from "../../components/newsFeedSectionContainer/dayNews/index";
import Item from "../../components/NewsFeedsContainer/sideNewsFeed/item";
import politicPhoto from "../../assets/politicPhoto.png";
import Banner from "../../components/banner/index";

const sideNewsItems = [
  {
    time: "24",
    category: "პოლიტიკა",
    text: "ორბანი: უკრაინა ფინანსური კუთხით არარსებული ქვეყანაა, თუ მხარს აღარ დავუჭერთ, ომი დასრულდება",
    thumbnail: politicPhoto,
  },
  {
    time: "24",
    category: "ანალიტიკა",
    text: "ვნუკოვოს აეროპორტის განრიგში მოსკოვი-თბილისის პირდაპირი რეისი გაჩნდა, შემდეგ კი გაქრა",
    thumbnail: politicPhoto,
  },
  {
    time: "24",
    category: "მსოფლიო",
    text: "ლავროვის თქმით, ითვალისწინებენ დასავლეთის მცდელობებს, 'მეორე ფრონტი' გახსნას",
    thumbnail: politicPhoto,
  },
  {
    time: "24",
    category: "ეკონომიკა",
    text: "აშშ-ის საელჩო: სიამაყეს, რომლითაც ქართული ენის სიყვარულს დაატარებთ, ვერავინ წაგართმევთ",
    thumbnail: politicPhoto,
  },
];

const Politic = () => {
  return (
    <div className="xl:grid xl:grid-cols-12 grid-cols-10 gap-4">
      <div className="xl:col-span-9 col-span-9">
        <div className="mt-4 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
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
        </div>
        <Banner />
        <div className="grid grid-cols-1 gap-2 mt-4 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
          <Item
            time="38"
            title="მგონია, რომ უკრაინის პრეზიდენტი ფაქტებში ვერ ერკვევა - სარჯველაძე ზელე..."
            photo={politicPhoto}
            text="პარლამენტის ადამიანის უფლებათა დაცვის კომიტეტის თავმჯდომარე მიხეილ სარჯველაძე უკრაინის პრეზიდენტის, ვოლოდიმირ ზელენსკის მიერ ექსპრეზიდენტ მიხეილ სააკაშვილის შესახებ გაკეთებულ განცხადებას გამოეხმაურა და აღნიშნა, რომ ზელენსკიმ კომენტარი"
          />
          <Item
            time="38"
            title="მგონია, რომ უკრაინის პრეზიდენტი ფაქტებში ვერ ერკვევა - სარჯველაძე ზელე..."
            photo={politicPhoto}
            text="პარლამენტის ადამიანის უფლებათა დაცვის კომიტეტის თავმჯდომარე მიხეილ სარჯველაძე უკრაინის პრეზიდენტის, ვოლოდიმირ ზელენსკის მიერ ექსპრეზიდენტ მიხეილ სააკაშვილის შესახებ გაკეთებულ განცხადებას გამოეხმაურა და აღნიშნა, რომ ზელენსკიმ კომენტარი"
          />
        </div>
      </div>
      <div className="xl:col-span-3 col-span-3">
        <DayNews />
      </div>
    </div>
  );
};

export default Politic;
