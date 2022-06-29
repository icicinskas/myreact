import {useRef, useState, useEffect} from 'react';

const Footer = ({getUsers, setUsers}) => {

    const [getShowButton, setShowButton] = useState(true)

    const photoRef = useRef()
    const nameRef = useRef()
    const genderRef = useRef()

    function addUser() {
        const user = {
            photo: photoRef.current.value,
            name: nameRef.current.value,
            gender: genderRef.current.value
        }

        console.log(user)

        setUsers([...getUsers, user])
    }

    useEffect(() => {
        if(getUsers.length > 50) setShowButton(false)
    }, [getUsers])

    return (
        <div className="footer d-flex space-btw">
            <input ref={photoRef} type="text" placeholder="Photo"/>
            <input ref={nameRef} type="text" placeholder="name"/>

            <select ref={genderRef} name="" id="">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            {getShowButton && <button onClick={addUser}>Add</button>}


        </div>
    );
};

export default Footer;