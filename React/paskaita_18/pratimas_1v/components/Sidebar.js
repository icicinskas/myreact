import { useContext } from "react";
import mainContext from "../context/mainContext";

const Sidebar = () => {
  const { sidebar } = useContext(mainContext);

  const style = {
    display: sidebar ? "block" : "none",
  };

  return (
    <div style={style}>
      <div className="sidebar">
        <a href="./Toolbar/link">Link 1</a>
        <a href="./Toolbar/link">Link 2</a>
        <a href="./Toolbar/link">Link 3</a>
      </div>
    </div>
  );
};

export default Sidebar;
