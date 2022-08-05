import { useContext } from "react";
import UserCard from "../components/UserCard";
import mainContext from "../context/mainContext";

const AllUsersPage = () => {
  const { users, currentUser } = useContext(mainContext);

  const filter = users.filter((x) => x.id !== currentUser.id);

  return (
    <div className="d-flex wrap pntr">
      {filter.map((x) => (
        <UserCard key={x.id} post={x} />
      ))}
    </div>
  );
};

export default AllUsersPage;
