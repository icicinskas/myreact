import React from "react";

const UsersProfile = ({ item, key }) => {
  const styleObject = {
    backgroundColor: item.gender === "male" ? "lightblue" : "pink",
  };

  if (item.border) styleObject.border = "3px solid black";
  if (item.round) styleObject.borderRadius = "10px";

  function getInitials() {
    const nameArr = item.name.split("");
    const spaceIndex = nameArr.findIndex((x) => x === " ");
    return `${nameArr[0]}. ${nameArr[spaceIndex + 1]}.`;
  }

  return (
    <div style={styleObject}>
      <h1>{item.username}</h1>
      <div>{item.email}</div>
      <a href={item.website}></a>
      <div>{item.company.catchPhrase.toUpperCase()}</div>
      <div>{getInitials()}</div>
    </div>
  );
};

export default UsersProfile;
