import React from 'react';
import './css/Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Prijavite se na newsletter naseg kluba i budite obavesteni o svakoj akciji.
        </p>
        <p className='footer-subscription-text'>
          Mozete se odjaviti sa newsletter-a u bilo kom trenutku.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Vas email'
            />
            <Button buttonStyle='btn--outline'>Posaljite zahtev</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>O klubu</h2>
            <Link to='/sign-up'>Istorija kluba</Link>
            <Link to='/'>Clanovi kluba</Link>
            <Link to='/'>Usepsi kluba</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Kontakt   <IoMdContacts /></h2>
            <p>+381 777 555</p>
            <p>Klubski mejl: psdhorizont@gmail.com</p>
          </div>
          <div class='footer-link-items'>
            <h2>Drustvene mreze</h2>
            <a href='https://www.instagram.com/psd.horizont.krusevac/'><FaInstagram />        Instagram</a>
            <a href='https://www.facebook.com/groups/1103575530091097/'><FaFacebook />        Facebook</a>
          </div>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PSD HORIZONT
            </Link>
          </div>
          <small class='website-rights'>PSD HORIZONT © 2024</small>
        </div>
            
      </section>
    </div>
  );
}

export default Footer;


