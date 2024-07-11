import React from 'react';
import { useParams } from 'react-router-dom';
import { cardItemsData } from '../models/CardItemData';
import Footer from './Footer';
import './css/PojedinacnaAkcija.css';

function PojedinacnaAkcija() {
  const { id } = useParams();
  const action = cardItemsData.find(item => item.id === parseInt(id));

  if (!action) {
    return <h2>Planinarska akcija nije pronađena</h2>;
  }
  const imageStyle = { width: '450px', height: '350px', borderRadius: '20px' };

  return (
    <div className='conatiner1'>
    <div className='pojedinacna_akcija-container'>
        <img className='slika-pojedinacne-akcije' src={action.src} alt={action.nazivAkcije} style={imageStyle}/>
        <div className='opis-akcije'>
            <h1>{action.nazivAkcije}</h1>
            <p>Težina: {action.tezina}</p>
            <p>Kilometraža: {action.kilometraza}</p>
            <p>Datum od: {action.datumOd}</p>
            <p>Datum do: {action.datumDo}</p>
            <p>Vodič: {action.vodic}</p>
        </div>
    </div>
    <div className='detaljan-opis-akcije'>
    <h2>Detaljnije o samoj planini:</h2>
    <p>{action.description}</p>
    </div>
    <Footer/>
    </div>
  );
}

export default PojedinacnaAkcija;

