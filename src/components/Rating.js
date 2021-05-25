import React from 'react';

const Rating = (props) => {
    const rating = Math.round(props.children);
    const fullStar = '★';
    const emptyStar = '☆';
    const allStars = fullStar.repeat(rating) + emptyStar.repeat( 5- rating);

    return (
        <div>
            {allStars}
        </div>
    )
};

export default Rating;