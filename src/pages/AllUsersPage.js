import { useContext } from "react";
import UserCard from "../components/UserCard";
import mainContext from "../context/mainContext";

const AllUsersPage = () => {
  const { users } = useContext(mainContext);

  return (
    <div className="d-flex flex-wrap pntr">
      {users.map((x) => (
        <UserCard key={x.id} post={x} />
      ))}
    </div>
  );
};

export default AllUsersPage;
