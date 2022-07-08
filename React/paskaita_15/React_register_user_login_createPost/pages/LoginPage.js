import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = ({users, setUser}) => {
    const emailRef = useRef()
    const passOneRef = useRef()

    const [error, setError] = useState(null)

    const nav = useNavigate()

    function loginUser() {
        setError(null)
        const user = {
            email: emailRef.current.value,
            password: passOneRef.current.value,
        }

        const myUser = users.find(x => x.email === user.email && x.password === user.password)

        if(!myUser) return setError("bad user credentials")

        setUser(myUser)
        nav("/profile")
    }

    return (
        <div className="d-flex flex-column">
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passOneRef} type="text" placeholder="password"/>

            {error && <h3>{error}</h3>}

            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default LoginPage;