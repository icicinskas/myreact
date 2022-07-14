import { useContext } from "react";
import { Link } from "react-router-dom";
import mainContext from "../context/mainContext";

const Toolbar = () => {
  const { valited, setUsers } = useContext(mainContext);

  // function logout() {
  //   setUsers(null);
  //   nav("/");
  // }

  return (
    <div className="toolbar d-flex g20">
      <div className="d-flex g20">
        <Link to="/shop">Shop</Link>
        <Link to="/arena">Arena</Link>
      </div>
    </div>
  );
};

export default Toolbar;
