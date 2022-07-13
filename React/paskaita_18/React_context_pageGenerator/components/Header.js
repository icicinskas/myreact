import {useContext} from 'react';
import mainContext from "../context/mainContext";

const Header = () => {
    const {styles} = useContext(mainContext)

    const style = {
        backgroundImage: `url("${styles.headerImage}")`,
        height: styles.headerHeight,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
    }

    return (
        <div className="header d-flex align-center j-center" style={style}>
            <h1>{styles.headerText}</h1>
        </div>
    );
};

export default Header;