import {useState, useRef} from 'react';
import { Rating } from 'react-simple-star-rating'
import {useSelector, useDispatch} from "react-redux";
import {createReview} from "../features/review";


const WriteReview = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value.currentUser)
    const inpRef = useRef()
    const [rating, setRating] = useState(0)

    function addReview() {

        const review = {
            rating,
            review: inpRef.current.value,
            user: "any@any.lt",
            id: Date.now(),
            comments: []
        }


        dispatch(createReview(review))
    }

    return (
        <div>
            <Rating onClick={(val) => setRating(val)} ratingValue={rating} /* Available Props */ />

            <input ref={inpRef} type="text" placeholder="review text"/>
            <button onClick={addReview}>Add Review</button>
        </div>
    );
};

export default WriteReview;