import React from 'react';

const PostCard = ({item}) => {
    return (
        <div>
            <img src={item.image} alt=""/>
            <div>{item.title}</div>
        </div>
    );
};

export default PostCard;