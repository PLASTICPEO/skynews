import Footer from "../../components/footer";
import Header from "../../components/header";
import { ReactNode, useContext } from "react";
import { AppContext } from "../../context/HeaderContext";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpenMobileSearch } = useContext(AppContext);
  const paddingTop = isOpenMobileSearch ? "pt-32" : "pt-52";
  return (
    <div className={`bg-[#EAECF0] pb-20 ${paddingTop}`}>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
