import { Link } from 'react-router-dom';
import Footer from '../Footer';
import React, { useState } from 'react'
import '../css/SignUp.css';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (name && email && password && agreed) {
      // Svi podaci su uneti i korisnik je prihvatio uslove
      // Ovde možete dodati dodatnu logiku, npr. slanje podataka na server
      alert('Uspešno ste se registrovali!');
      navigate.push('/'); // Preusmeravanje na početnu stranicu
    } else {
      // Ako nisu svi podaci uneti ili nije prihvaćen uslov korišćenja
      alert('Molimo popunite sva polja i prihvatite uslove korišćenja.');
    }
  };
  return (
    <>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Registruj se i postani novi član</h1>
          <div className="loginsignup-fileds">
            <input
              type="text"
              placeholder='Ime:'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder='Email:'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Šifra:'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <button onClick={handleSignup}>Nastavite</button>
            </Link>
          </div>
          <p className='loginsigunp-login'>
            Već ste registrovani kao član?
            <span>
              <Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
                <button className='btn1'>Prijavi se</button>
              </Link>
            </span>
          </p>
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <p>Imam preko 18 godina</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
