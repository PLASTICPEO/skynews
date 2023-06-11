import Header from "../../components/header";
import HeaderProvider from "../../components/header/context/HeaderContext";
import { ReactNode } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};
export default DefaultLayout;
