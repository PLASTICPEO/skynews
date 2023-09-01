import { ContainerProps } from "./container.types";
import { useContext } from "react";
import { AppContext } from "../../../context/HeaderContext";

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { scrollY } = useContext(AppContext);
  return (
    <div
      className={`${
        scrollY > 50 ? " flex items-center justify-between " : "block"
      } overflow-auto no-scrollbar  container m-auto transition-all  font-Helvetica ease-in-out duration-500`}
    >
      {children}
    </div>
  );
};

export default Container;
