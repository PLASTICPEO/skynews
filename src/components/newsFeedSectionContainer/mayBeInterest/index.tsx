import SectionHeader from "../components/sectionHeader";
import MayBeInterestItem from "./components/mayBeInterestItem";

const MayBeInterest = () => {
  return (
    <div className="p-4 mt-4 rounded-lg w-full bg-[#FFFFFF] shadow-sm ">
      <SectionHeader title="შეიძლება დაგაინტერესოთ" />
      <div className="xl:grid xl:grid-cols-3 gap-6">
        <MayBeInterestItem />
        <MayBeInterestItem />
        <MayBeInterestItem />
        <MayBeInterestItem />
        <MayBeInterestItem />
        <MayBeInterestItem />
      </div>
    </div>
  );
};

export default MayBeInterest;
