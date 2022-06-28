import './App.css';
import {useState} from "react";
import PhotoItem from "./components/PhotoItem";
const image = "https://img1.manonamai.lt/article/b2eba941-1427-4b42-a3f3-730dae70aa69/cover/5241525.jpeg"


function App() {

    const [getBoard, setBoard] = useState([])

    function startGame() {
        const arr = []
        const randomNumber = Math.round(Math.random()*100)

        for (let i = 0; i < 100; i++) {
            arr.push({
                image,
                ring: randomNumber === i
            })
        }
        console.log(randomNumber)
        setBoard([])

        setBoard(arr)
    }

    function endGame() {
        setBoard([])
    }


    return (
        <div className="App">

            <button onClick={startGame}>Start Game</button>
            <button onClick={endGame}>End Game</button>

            <div className="d-flex flex-wrap board">
                {getBoard.map((x, i) => <PhotoItem key={i} item={x} index={i}/>)}
            </div>
        </div>
    );
}

export default App;