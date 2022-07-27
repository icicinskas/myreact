import { useParams } from "react-router-dom";

const UserPage = ({ users }) => {
  const { id } = useParams();

  // const myPost = () => {
  //   return users.find((x) => x.id === Number(id));
  // };

  // console.log(myPost());

  return (
    <div className="d-flex">
      <div className="grow1">
        <img src="" alt="" />
      </div>

      <div className="grow1">
        <h1>asa</h1>
        <div>
          <button>Conversation</button>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
