import {useEffect, useState}  from 'react';
import {useParams} from "react-router-dom";

const ProfilePage = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/"+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])

    return (
        <div>
            {user && <div>{user.username}</div>}
        </div>
    );
};

export default ProfilePage;