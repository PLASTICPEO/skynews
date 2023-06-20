import Navigator from "./navigator";

const HeaderBottom = () => {
  const listItems = [
    { name: "მთავარი", href: "/" },
    { name: "ყველა სიახლე", href: "/" },
    { name: "პოლიტიკა", href: "/politic" },
    { name: "საზოგადოება", href: "/" },
    { name: "სამართალი", href: "/" },
    { name: "კონფლიქტები", href: "/" },
    { name: "ეკონომიკა", href: "/" },
    { name: "უცხოეთი", href: "/" },
    { name: "ანალიტიკა", href: "/" },
  ];

  return (
    <div>
      <Navigator navigation={listItems} />
    </div>
  );
};

export default HeaderBottom;
