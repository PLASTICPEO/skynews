import SectionHeader from "../components/sectionHeader";
import SectionItem from "../components/sectionItem/index";

import mayBeInterestPhoto from "../../../assets/usaFlag.png";

const MayBeInterest: React.FC = () => {
  return (
    <div className="p-4 mt-4 rounded-lg bg-[#FFFFFF] shadow-sm ">
      <SectionHeader title="შეიძლება დაგაინტერესოთ" style={"text-xl"} />
      <div className="xl:grid xl:grid-cols-3 gap-6">
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
        <SectionItem
          photo={mayBeInterestPhoto}
          time={"12"}
          category={"მსოფლიო"}
          text={
            "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
          }
          style={"xl:text-base text-sm"}
          styleTime="text-base"
          styleCategory="text-sm"
        />
      </div>
    </div>
  );
};

export default MayBeInterest;
