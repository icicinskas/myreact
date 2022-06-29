import {useState, useEffect} from 'react';

const Progress = ({users}) => {
    const [getPercent, setPercent] = useState(0)
    const [getColor, setColor] = useState("#79cc46")

    const progressStyle = {
        height: getPercent + "%",
        backgroundColor: getColor
    }

    useEffect(() => {
        setPercent(users.length * 2)
    }, [users])

    useEffect(() => {
        if(getPercent > 50) setColor("#e7d24c")
        if(getPercent > 90) setColor("#e7594c")
    }, [getPercent])

    return (
        <div className="progressWrapper d-flex flex-column justify-end">
            <div className="progressBar" style={progressStyle}></div>
        </div>
    );
};

export default Progress;