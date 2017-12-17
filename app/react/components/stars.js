import React from 'react';

const Stars = (props) => {

    const starItem = () => {
        let items = [];
        for(let index = 0; index < 5; index++) {
            items.push(<li key={index} className="stars-rating__item"></li>);
        }
        return items;
    }

  return(
      <ul className ={`stars-rating stars-rating--${props.rate} ${props.isHeader ? 'stars-rating--big' : ''}`}>
          {starItem()}
      </ul>
  );
};

export default Stars;
