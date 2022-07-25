import React from 'react';
import WriteReview from "../components/WriteReview";
import ReviewPreview from "../components/ReviewPreview";
import {useSelector} from "react-redux";

const ReviewPage = () => {
    const reviews = useSelector(state => state.reviews.value.reviews)

    return (
        <div className="reviewsContainer">
            <WriteReview/>

            {reviews.map(x => <ReviewPreview key={x.id} review={x}/>)}
        </div>
    );
};

export default ReviewPage;