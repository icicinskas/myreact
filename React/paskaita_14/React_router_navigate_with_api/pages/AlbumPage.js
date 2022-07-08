import {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";

const AlbumPage = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [album, setAlbum] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/"+id)
            .then(res => res.json())
            .then(data => {
                setAlbum(data)
            })
    }, [])

    return (
        <div>
            {album && <div onClick={() => nav("/profile/" + album.userId)}>Album: {album.title}</div>}
        </div>
    );
};

export default AlbumPage;