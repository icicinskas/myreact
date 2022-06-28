import React from 'react';

const UserProfile = ({user}) => {

    const styleObject = {
        backgroundColor: user.gender === 'male' ? "blue" : 'pink',
    }

    if(user.border) styleObject.border = "3px solid black"
    if(user.round) styleObject.borderRadius = "10px"

    function getInitials() {
        const nameArr = user.name.split("")

        console.log(nameArr)

        const spaceIndex = nameArr.findIndex(x => x === " ")

        return `${nameArr[0]}. ${nameArr[spaceIndex+1]}.`
    }

    return (
        <div className="post" style={styleObject}>
            <h1> {user.username} </h1>
            <div>{user.email}</div>
            <a href={user.website}></a>
            <div>{user.company.catchPhrase.toLowerCase()}</div>

            <div>{getInitials()}</div>
        </div>
    );
};

export default UserProfile;