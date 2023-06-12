import TopNews from "./components/topNews";

const PopularNews = () => {
  return (
    <div className="mt-6 bg-[#FFFFFF] rounded-lg shadow-sm p-4">
      <div className="flex justify-between font-[Helvetica] text-[#101828]2">
        <p className="text-xl">პოპულარული სიახლეები</p>
        <p className="text-sm">ყველა სიახლე</p>
      </div>
      <div className="xl:grid xl:grid-cols-2 grid-cols-1 gap-4">
        <TopNews />
        <TopNews />
      </div>
    </div>
  );
};

export default PopularNews;
