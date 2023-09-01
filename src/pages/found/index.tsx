import { useParams } from "react-router-dom";

const Found = () => {
  const { category } = useParams();
  return <div>{category}</div>;
};
export default Found;
