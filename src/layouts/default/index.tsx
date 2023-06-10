import Header from "../../pages/header";
import { ReactNode } from "react";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
    </>
  );
};
export default DefaultLayout;
