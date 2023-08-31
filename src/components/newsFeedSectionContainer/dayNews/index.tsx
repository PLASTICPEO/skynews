import Banner from "../../banner";
import SectionHeader from "../components/sectionHeader";

import dayNewsPhoto from "../../../assets/dayNewsPhoto.png";
import SectionItem from "../components/sectionItem";
import Currency from "./components/currency";
import Interesting from "./components/interesting";
import Weather from "./components/currency/components/weather";

const DayNews = () => {
  return (
    <div className="sticky top-24 mt-4 p-4 bg-[#FFFFFF] rounded-lg shadow-sm xl:block hidden">
      <SectionHeader
        title={"დღის სიახლე"}
        style={"text-base"}
        buttonText="ყველა"
      />
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
        <Weather />
        <Banner />
        <Interesting
          time={12}
          category="მსოფლიო"
          text="CIA-ს დირექტორი: რუსეთს ჩინეთის ეკონომიკურ კოლონიად გადაქცევა ემუქრება"
        />
        <Interesting
          time={12}
          category="ბიზნესი"
          text="მიგრანტების ნაკადის ზრდის გამო იტალიაში საგანგებო მდგომარეობა გამოაცხადეს"
        />
        <Interesting
          time={12}
          category="მსოფლიო"
          text="რიკოთი სატვირთოებისთვის დღეს, მსუბუქი ტრანსპორტისთვის კი 13 აპრილიდან გაიხსნება"
        />
        <Interesting
          time={12}
          category="პოლიტიკა"
          text="აშშ-ში მცხოვრები ქართველი ექიმები პრეზიდენტს გვარამიას შეწყალებას სთხოვენ"
        />
      </div>
    </div>
  );
};

export default DayNews;
