import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdTravelExplore } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosExit } from "react-icons/io";
import { Button } from './Button';
import './css/Navbar.css';

function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]= useState(true);

    const handleClick = ()=> setClick(!click);
    const closeMobileMenu= ()=> setClick (false);
   
    //ova fja mi omogucava da sakrijem meni kad je mali ekran
    const showButton= ()=>{
        if(window.innerWidth<=980){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    },[]);
    //e sad svaki put kad refresujem meni se pojavljuje iznova signup dugme 
    //bez obrizra na velicinu ekrana - to resavam sa useEffesct-om
    window.addEventListener('resize',showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRAVEL<MdTravelExplore />
            </Link>
        
        <div className='menu-icon' onClick={handleClick}>
        {click ? <IoIosExit color='white' /> : <GiHamburgerMenu color='white'/>}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Service</Link>
            </li>
            <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
     </div>
    </nav>

    </>
  )
}

export default Navbar
