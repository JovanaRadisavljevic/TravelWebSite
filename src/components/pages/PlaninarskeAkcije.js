import React from 'react'
import Footer from '../Footer'
import CardItem from '../CardItem';
import { cardItemsData } from '../../models/CardItemData';
import '../css/PlaninarskeAkcije.css'

function PlaninarskeAkcije() {
  return (
    <div>
        <div className='katalog-akcija'>
            <h2>Katalog planianrski akcija</h2>
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
      <Footer />
    </div>
  )
}

export default PlaninarskeAkcije
