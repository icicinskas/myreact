import {useRef} from 'react';

const ProfilePage = ({user, setUser}) => {
    const urlRef = useRef()

    function setImage() {
        const myUser = {...user}
        myUser.image = urlRef.current.value
        setUser(myUser)
    }

    return (
        <div>
            <img src={user.image} alt=""/>
            <input ref={urlRef} type="text" placeholder="image url"/>
            <button onClick={setImage}>Change Image</button>
        </div>
    );
};

export default ProfilePage;