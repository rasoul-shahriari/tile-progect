import React from 'react';
import Stars from './stars'

const Widget = (props) => {

    function getImageName(firstName, lastName) {
        let imageName = lastName ? `${firstName.toLowerCase()}-${lastName.toLowerCase()}.png`:`${firstName.toLowerCase()}.png`;
        return require(`../../static-images/${imageName}`);
    }

    const widgetItems = props.reviews.map((review, index) => {
        return (
            <div key={index} className = "col-sm-6 col-lg-4">
                <div className = "widget widget--shadow">
                    <div className = {`widget__wrapper widget__wrapper--rate-${review.starRating}`}>
                        <h3 className = "widget__header"> {review.fullName}</h3>
                        <img className = "widget__img" src = {getImageName(review.firstName,review.lastName)} alt="{review.fullName}" />
                        <Stars rate = {review.starRating} />
                        <div className = "widget__title">{review.reviewTitle}</div>
                        <div className = "widget__description"> {review.reviewBody}</div>
                        <a href="http://www.trustpilot.com" className ="widget__link">Read more</a>
                    </div>
                </div>
            </div>
        )
    });

    return(
        <section className="container">
            {widgetItems}
        </section>
    );
};

export default Widget;
