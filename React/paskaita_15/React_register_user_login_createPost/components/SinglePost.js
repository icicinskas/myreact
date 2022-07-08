import {useNavigate} from "react-router-dom";

const SinglePost = ({post}) => {
    const nav = useNavigate()

    return (
        <div className="post" onClick={() => nav('/single/'+post.id)}>
            <img src={post.image} alt=""/>
            <h3>{post.title}</h3>
            <div>{post.location}</div>
            <div>{post.userEmail}</div>
        </div>
    );
};

export default SinglePost;