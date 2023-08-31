import Navigation from "../navigation";

const Navigator: React.FC = () => {
  const navItems = [
    { name: "მთავარი", href: "/", id: 1 },
    { name: "ყველა სიახლე", href: "/ყველა-სიახლე", id: 2 },
    { name: "პოლიტიკა", href: "/პოლიტიკა", id: 3 },
    { name: "საზოგადოება", href: "/საზოგადოება", id: 4 },
    { name: "სამართალი", href: "/სამართალი", id: 5 },
    { name: "კონფლიქტები", href: "/კონფლიქტები", id: 6 },
    { name: "ეკონომიკა", href: "/ეკონომიკა", id: 7 },
    { name: "უცხოეთი", href: "/უცხოეთი", id: 8 },
    { name: "ანალიტიკა", href: "/ანალიტიკა", id: 9 },
    { name: "ანალიტიკა", href: "/ანალიტიკა", id: 10 },
  ];

  return (
    <div className="flex">
      <Navigation navItems={navItems} />
    </div>
  );
};

export default Navigator;
