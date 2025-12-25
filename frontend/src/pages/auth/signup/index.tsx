
import { useState } from 'react';
import modules from './modules';
import './style.scss';

const SignUp = () => {
  const mod = modules();

  const [ email,setEmail ] = useState("");
  const [ pass,setPass ] = useState("");
  const [ userName,setUserName ] = useState("");


  return (
    <div className="signup">
      <h1 className="signup__title">CoLedger</h1>

      <div className="signup__form">
        <label>mail</label>
        <input
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your-email@example.com"
        />

        <label>pass</label>
        <input
          type="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value)} 
        />
        
        <label>name</label>
        <input
          type="name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <button
          onClick={() => mod.onClickRegisterBtn(email,pass,userName)}
        >
          sign up
        </button>
      </div>
    </div>
  )
}

export default SignUp
