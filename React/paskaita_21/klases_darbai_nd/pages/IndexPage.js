import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeImage } from "../features/users";

const IndexPage = () => {
  const userImage = useSelector((state) => state.users.value.image);
  const username = useSelector((state) => state.users.value.username);
  const userEmail = useSelector((state) => state.users.value.userEmail);
  const userAge = useSelector((state) => state.users.value.userAge);
  const userCity = useSelector((state) => state.users.value.userCity);

  const dispatch = useDispatch();

  function changeImg() {
    const newImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmNZo9wLt4zSz-u9vt4wP2HxNE9_5z5j2YKyOWuMrKyMnfqo9Wagr422Mq6_7c_dfAig&usqp=CAU";

    dispatch(changeImage(newImage));
  }

  return (
    <div>
      <h1>This is index page</h1>
      <img src={userImage} alt="" />
      <h1>Username: {username}</h1>
      <h1>User email: {userEmail}</h1>
      <h1>User age: {userAge}</h1>
      <h1>User city: {userCity}</h1>

      <button onClick={changeImg}>Change Image</button>
    </div>
  );
};

export default IndexPage;
