import {useState} from 'react';

const PhotoItem = ({item, index}) => {

    const [getRing, setRing] = useState(false)

    function itemClicked() {
        console.log(index)
        if(item.ring) setRing(true)
    }

    return (
        <div>
            {getRing ?
                <img src="https://m.media-amazon.com/images/I/61cw-1UY1pL._AC_SX425_.jpg" alt=""/> :
                <img src={item.image} onClick={itemClicked} alt=""/>
            }
        </div>
    );
};

export default PhotoItem;