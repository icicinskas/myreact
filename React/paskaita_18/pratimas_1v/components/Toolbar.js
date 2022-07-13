import { useContext } from "react";
import mainContext from "../context/mainContext";
import LinkCard from "./LinkCard";

const Toolbar = () => {
  const { toolbarColor, toolbarPad, link } = useContext(mainContext);
  return (
    <div
      style={{
        background: toolbarColor,

        height: "60px",
        padding: `${toolbarPad}px`,
      }}
      className="toolbar d-flex g10 a-c"
    >
      {link.map((x, i) => (
        <LinkCard key={i} item={x} />
      ))}
    </div>
  );
};

export default Toolbar;
