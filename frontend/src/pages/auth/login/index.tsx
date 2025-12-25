import { useState } from "react";
import modules from "./modules";
import "./style.scss";

const Login = () => {
  const mod = modules();

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");

  return (
    <div className="login">
      <h1 className="login__title">CoLedger</h1>

      <div className="login__form">
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

        <button
          onClick={() => mod.onclickLogin(email,pass)}
          disabled={!email || !pass}
        >sign in</button>
      </div>
    </div>
  );
};

export default Login;
