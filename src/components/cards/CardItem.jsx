import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className={`cards-item ${props.class}`}>
        <Link className='cards-item-link' to={{pathname:props.path, state: {name: props.label}}}>
          <figure className='cards-item-pic-wrap' data-category={props.label}>
            <img
              className='cards-item-img'
              alt={`Img`}
              src={props.src}
            />
          </figure>
          <div className='cards-item-info'>
            <h5 className='cards-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
      
    </>
  );
}

export default CardItem;