import {useRef} from 'react';
import {useNavigate} from "react-router-dom"

const RegisterPage = ({addNewUser}) => {
    const emailRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()

    const nav = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    function registerUser() {
        const user = {
            email: emailRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value
        }
        let formValid = true

        if(!validateEmail(user.email)) formValid = false
        if(user.passOne.length < 3 || user.passOne.length > 20) formValid = false
        if(user.passOne !== user.passTwo) formValid = false

        if(!formValid) return console.log("bad form")

        addNewUser(user)
        nav('/')
    }

    return (
        <div className="d-flex flex-column">
            <input ref={emailRef} type="text" placeholder="email"/>
            <input ref={passOneRef} type="text" placeholder="pass 1"/>
            <input ref={passTwoRef} type="text" placeholder="pass 2"/>

            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default RegisterPage;