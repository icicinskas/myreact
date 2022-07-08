import {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const CreatePostPage = ({user, posts, setPosts}) => {
    const imageRef = useRef()
    const titleRef = useRef()
    const locationRef = useRef()

    const nav = useNavigate()

    function create() {
        const post = {
            image: imageRef.current.value,
            title: titleRef.current.value,
            location: locationRef.current.value,
            id: Date.now(),
            userEmail: user.email
        }

        setPosts([...posts, post])
        nav('/allPosts')
    }

    return (

        <div className="d-flex flex-column">
            <input ref={imageRef} type="text" placeholder="image"/>
            <input ref={titleRef} type="text" placeholder="title"/>
            <input ref={locationRef} type="text" placeholder="location"/>

            <button onClick={create}>Create Post</button>
        </div>
    );
};

export default CreatePostPage;