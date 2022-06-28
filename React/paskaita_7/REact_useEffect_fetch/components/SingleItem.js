import {useState} from 'react';

const SingleItem = ({item}) => {

    const [getColor, setColor] = useState(item.completed)

    return (
        <div style={{backgroundColor: getColor ? "green" : "red"}} onClick={() => setColor(!getColor)}>
            {item.title}
        </div>
    );
};

export default SingleItem;