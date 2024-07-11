import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';
import { cardItemsData } from '../models/CardItemData';


function Cards() {
  return (
    <div className='cards'>
      <h1>Pogledajte najpopularnije destinacije ove godine!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {cardItemsData.map((item) => (
              <CardItem
                key={item.id}
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.id} 
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

