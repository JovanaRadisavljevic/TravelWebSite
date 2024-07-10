import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Pogledajte najpopularnije destinacije ove godine!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-9.jpg'
              text="Upoznajte skrivene vodopade u Amazonskoj šumi"
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/images/img-2.jpg'
              text='Krstarite na privatnoj jahti'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/img-3.jpg'
              text='Postetite delove Atlantskog okeana'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Upoznajte planinski fudbal na vrhu Himalaja'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/img-8.jpg'
              text='Osetite cari Sahare'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

