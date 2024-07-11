import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SignUp.css';
import Footer from '../Footer';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    sessionStorage.setItem('userEmail', email);
    sessionStorage.setItem('userPassword', password);
    console.log('Ulogovan sa:', { email, password });
  };

  return (
    <>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fileds">
          <input
            type="email"
            placeholder='Email:'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Sifra:'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button onClick={handleLogin}>Nastavite</button>
          </Link>
          
        </div>
      </div>
    </div>
    <Footer />
    </>
    
  );
}

export default Login;