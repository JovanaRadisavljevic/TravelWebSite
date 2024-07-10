import React from 'react'
import { Button } from './Button'
import './css/HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
       <video src='/videos/mountaineering.mp4' autoPlay loop muted />
        <h1>Avantura Te Čeka - Osvoji Planine S Nama!</h1>
        <p>Pridruži se i Otkrij Prirodu na Novi Način</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--otline'
            buttonSize='btn--large' >
                PRIJAVI SE ODMAH!
            </Button>
            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large' >
                POGLEDAJ TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection
