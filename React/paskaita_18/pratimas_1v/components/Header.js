import { useContext } from "react";
import mainContext from "../context/mainContext";

const Header = () => {
  const { headerBgImg, headerTxt, headerHeight } = useContext(mainContext);

  return (
    <div
      style={{ background: `url(${headerBgImg})`, height: `${headerHeight}px` }}
    >
      <div className="head">
        <p>{headerTxt}</p>
      </div>
    </div>
  );
};

export default Header;
