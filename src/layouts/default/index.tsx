import Header from "../../components/header";
import HeaderProvider from "../../components/header/context/HeaderContext";
import { ReactNode } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#EAECF0] pt-44">
      <div>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <div className="container mx-auto">{children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;
