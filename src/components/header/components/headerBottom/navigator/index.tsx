import Search from "./components/search";
import Navigation from "./components/navigation";

const Navigator: React.FC = () => {
  const navItems = [
    { name: "მთავარი", href: "/" },
    { name: "ყველა სიახლე", href: "" },
    { name: "პოლიტიკა", href: "/politic" },
    { name: "საზოგადოება", href: "" },
    { name: "სამართალი", href: "" },
    { name: "კონფლიქტები", href: "" },
    { name: "ეკონომიკა", href: "" },
    { name: "უცხოეთი", href: "" },
    { name: "ანალიტიკა", href: "" },
  ];

  return (
    <div className="flex xl:p-0 px-4">
      <Navigation navItems={navItems} />
      <Search />
    </div>
  );
};

export default Navigator;
