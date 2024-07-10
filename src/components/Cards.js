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
              src='/images/triglav.jpg'
              text="Triglav - Ikonični Vrh Slovenskih Alpa"
              label='Avantura'
              path='/services'
            />
            <CardItem
              src='/images/dolomiti.jpg'
              text='Dolomiti - Raj za Planinare i Ljubitelje Prirode'
              label='Avantura'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/ararat.jpg'
              text='Ararat - Mistični Vrh Punu Legendi i Avantura'
              label='Adrenalin'
              path='/services'
            />
            <CardItem
              src='/images/tatre.jpg'
              text='Tatre - Biser Centralne Evrope za Planinare'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/maganik.png'
              text='Maganik - Skriveni Dragulj Crnogorskih Planina'
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

