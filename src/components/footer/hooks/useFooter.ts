import { useContext } from "react";
import { Actions } from "../actions";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/HeaderContext";

export const useFooter = () => {
  const { scrollPositionTop, toggleMobileSearchField } = useContext(AppContext);
  const navigate = useNavigate();

  const handleItemClick = (action: string) => {
    console.log(action);
    switch (action) {
      case Actions.HOME:
        navigate("/");
        scrollPositionTop();
        break;
      case Actions.CONTACT:
        console.log("check");
        navigate("/კონტაქტი");
        break;
      case Actions.QUIZ:
        console.log(Actions.QUIZ);
        break;
      case Actions.SEARCH:
        toggleMobileSearchField();
        break;
      case Actions.VIDEO:
        console.log(Actions.VIDEO);
        break;
      default:
        break;
    }
  };
  return { handleItemClick };
};
