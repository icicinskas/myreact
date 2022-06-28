import {useState} from 'react';

const SingleUser = ({user}) => {

    const [getShow, setShow] = useState(false)

    function showName() {
        setShow(true)
    }

    return (
        <div className="user">
            <img src={user.photo} alt=""/>

            {getShow ? <div>{user.name}</div> : <button onClick={showName}>Show Name</button>}

        </div>
    );
};

export default SingleUser;