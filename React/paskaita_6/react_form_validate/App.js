import './App.css';
import {useState, useRef} from "react";


function App() {
    const [getError, setError] = useState(null)
    const [getStyles, setStyles] = useState(["1px solid black","1px solid black","1px solid black","1px solid black"])

    const username = useRef()
    const email = useRef()
    const passOne = useRef()
    const passTwo = useRef()
    const location = useRef()

    const locations = ["vilnius", "klaipeda", "kaunas", "siauliai", "trakai"]

    function submitForm() {
        const form = {
            username: username.current.value,
            email: email.current.value,
            passOne: passOne.current.value,
            passTwo: passTwo.current.value,
            location: location.current.value
        }

        let styles = [...getStyles]

        if(form.username.length < 3 || form.username.length > 20) {
            styles[0] = "2px solid red"
            setStyles(styles)
            return setError('Bad username')
        }

        if(!form.email.includes("@") || !form.email.includes(".")) {
            styles[1] = "2px solid red"
            setStyles(styles)
            return setError('Bad email')
        }

        if(form.passTwo !== form.passOne) {
            styles[2] = "2px solid red"
            setStyles(styles)
            return setError("bad password")
        }

        if(form.passTwo.length < 3 || form.passTwo.length > 20) {
            styles[2] = "2px solid red"
            setStyles(styles)
            return setError("bad password")
        }

        if(!locations.includes(form.location)) {
            styles[3] = "2px solid red"
            setStyles(styles)
            return setError("bad location")
        }

        setStyles(["1px solid black","1px solid black","1px solid black","1px solid black"])


        setError(null)
    }


    return (
        <div className="App">
            <div className="d-flex flex-column">

                <input style={{border: getStyles[0]}} ref={username} type="text" placeholder="username"/>
                <input style={{border: getStyles[1]}}  ref={email} type="text" placeholder="email"/>
                <input style={{border: getStyles[2]}}  ref={passOne} type="text" placeholder="pass one"/>
                <input style={{border: getStyles[2]}}  ref={passTwo} type="text" placeholder="pass two"/>
                <input style={{border: getStyles[3]}}  ref={location} type="text" placeholder="location"/>

                {getError && <h1>{getError}</h1>}

                <button onClick={submitForm}>Submit</button>
            </div>
        </div>
    );
}

export default App;