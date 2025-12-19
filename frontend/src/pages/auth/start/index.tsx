import React from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom'

function AuthStart() {
    const navigate = useNavigate();
  return (

    <div className="start">
      <h1 className="start__title">CoLedger</h1>
      <div className='coredger-icon-box'>
        <img src="" alt="coredger-icon" />
      </div>
      <div className="start__form">
        <button onClick={() => navigate('/Login')}>sign in</button>
        <button onClick={() => navigate('/signup')}>sign up</button>
      </div>
    </div>
  )
}

export default AuthStart
