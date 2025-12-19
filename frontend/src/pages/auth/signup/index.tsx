
import './style.scss';

const SignUp = () => {
  return (
    <div className="signup">
      <h1 className="signup__title">CoLedger</h1>

      <div className="signup__form">
        <label>mail</label>
        <input type="email" />

        <label>pass</label>
        <input type="password" />
        
        <label>name</label>
        <input type="name" />

        <button>sign up</button>
      </div>
    </div>
  )
}

export default SignUp
