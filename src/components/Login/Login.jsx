import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    // por ejemplo, enviar los datos al servidor.
  };

  return (
    <div className="container">
      <div className="logo2">
        <Link to="/">
          <img src="./store-logo.png" />
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login to Your Acount</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="if-new">
        <h1>New Here?</h1>
        <p>Sign up and discover our delicious products</p>
        <Link to="/register">
          <button className="special-button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
