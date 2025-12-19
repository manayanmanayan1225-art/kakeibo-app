import './style.scss';

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">CoLedger</h1>

      <div className="login__form">
        <label>mail</label>
        <input type="email" />

        <label>pass</label>
        <input type="password" />

        <button>sign in</button>
      </div>
    </div>
  );
};

export default Login;
