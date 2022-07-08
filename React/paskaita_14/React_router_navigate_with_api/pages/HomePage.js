import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"

const HomePage = () => {
    const nav = useNavigate()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                setPhotos(data)
            })
    }, [])


    function openAlbum(id) {
        nav("/album/"+id)
    }

    return (
        <div>

            {photos.map((x, i) => <img onClick={() => openAlbum(x.albumId)} key={i} src={x.url} alt=""/>)}

        </div>
    );
};

export default HomePage;