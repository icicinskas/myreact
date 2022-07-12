import BluePage from "./BluePage";
import WhitePage from "./WhitePage";

import { useContext } from "react";
import contex from "../contex/main";

const RedPage = () => {
  const { color } = useContext(contex);

  return (
    <div className="red" style={{ background: color.colorRed }}>
      <WhitePage />
      <BluePage />
    </div>
  );
};

export default RedPage;
