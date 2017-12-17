import React from 'react';
import Stars from './stars'

const WidgetsHeader = (props) => {

    const getAvg = () => {
        let sum = 0;
        props.reviews.map(function(review) {
            sum += parseInt(review.starRating)
        });

        return Math.round(sum / props.reviews.length);
    }


    return(
        <header className={`widget-header widget-header--${getAvg()}`}>
            <div className="container-fluid">
                <h2 className="widget-header__title">Company Name< /h2>
                <Stars rate={getAvg()} isHeader={true} />
                <p>Rated <strong>{getAvg()}</strong> out of <strong>5</strong> based on <strong>{props.reviews.length}</strong> reviews. See some of the reviews here.</p>
                <img className="widget-header__img" src={require('../../static-images/trustpilot-logo-light-bg-120x18.png')} alt="trustpilot"/>
            </div>
        </header>
    );
}

export default WidgetsHeader;
