import {useRef} from 'react';
import { Rating } from 'react-simple-star-rating'
import {useSelector, useDispatch} from "react-redux";
import {updateReviews} from "../features/review";

const ReviewPreview = ({review}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.value.currentUser)
    const reviews = useSelector(state => state.reviews.value.reviews)

    const inpRef = useRef()

    function writeComment() {
        const allReviews = []
        reviews.map(x => allReviews.push({...x}))

        const reviewIndex = allReviews.findIndex(x => x.id === review.id)

        const comment = {
            text: inpRef.current.value,
            email: 'any@asd'
        }

        allReviews[reviewIndex].comments = [...reviews[reviewIndex].comments, comment]

        dispatch(updateReviews(allReviews))
    }

    function removeReview() {
        let allReviews = []
        reviews.map(x => allReviews.push({...x}))

        allReviews = allReviews.filter(x => x.id !== review.id)

        dispatch(updateReviews(allReviews))
    }

    return (
        <div className="border-top">

            <div>
                <button onClick={removeReview}>Delete review</button>
                <h1>{review.user}</h1>
                <Rating readonly={true} ratingValue={review.rating} /* Available Props */ />
                <div>{review.review}</div>

                <div>
                    <input ref={inpRef} type="text" placeholder="comment value"/>
                    <button onClick={writeComment}>Add comment</button>
                </div>
            </div>

            <div>
                {review.comments.map((x, i) => <div key={i}>{x.email} : {x.text}</div>)}
            </div>


        </div>
    );
};

export default ReviewPreview;