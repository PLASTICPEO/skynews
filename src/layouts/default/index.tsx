import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderProvider from "../../components/header/context/HeaderContext";
import { ReactNode } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#EAECF0] pt-44">
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
