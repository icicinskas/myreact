import {useContext} from 'react';
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom"

const CharactedCard = ({char}) => {

    const nav = useNavigate()
    const {setPlayer, setGold} = useContext(mainContext)

    function selectChar() {
        setPlayer(char)
        setGold(char.gold)
        nav('/menu')
    }

    return (
        <div className="char" onClick={selectChar}>
            <img src={char.image} alt=""/>
            <div>Race: {char.race}</div>
            <div>Health: {char.health}</div>
            <div>Damage: {char.damage}</div>
            <div>Start Gold: {char.gold}</div>
        </div>
    );
};

export default CharactedCard;