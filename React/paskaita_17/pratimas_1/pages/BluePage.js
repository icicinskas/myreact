import { useContext } from "react";
import contex from "../contex/main";

const BluePage = () => {
  const { color } = useContext(contex);

  return <div className="blue" style={{ background: color.colorBlue }}></div>;
};

export default BluePage;
