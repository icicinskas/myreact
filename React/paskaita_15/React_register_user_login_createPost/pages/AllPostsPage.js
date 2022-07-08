import React from 'react';
import SinglePost from "../components/SinglePost";

const AllPostsPage = ({posts}) => {
    return (
        <div className="d-flex flex-wrap">
            {posts.map(x => <SinglePost key={x.id} post={x}/>)}
        </div>
    );
};

export default AllPostsPage;