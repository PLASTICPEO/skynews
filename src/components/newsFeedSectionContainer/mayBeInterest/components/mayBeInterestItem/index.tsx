import Description from "../../../../newsFeedsContainer/mainNewsFeed/description";
import Info from "../../../../newsFeedsContainer/mainNewsFeed/info";
import mayBeInterestPhoto from "../../../../../assets/usaFlag.png";

const MayBeInterestItem = () => {
  return (
    <div className="mt-6">
      <img src={mayBeInterestPhoto} alt="" className="xl:m-0 m-auto" />
      <Info time={"12"} category="მსოფლიო" />
      <Description
        fontSize={"xl:text-base text-sm"}
        text={
          "აშშ-მა 120-ზე მეტ ბიზნესსა და ფიზიკურ პირს უკრაინაში ომთან დაკავშირებით სანქციები დაუწესა"
        }
      />
    </div>
  );
};

export default MayBeInterestItem;
