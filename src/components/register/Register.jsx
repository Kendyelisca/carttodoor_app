import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario de registro al servidor
  };

  return (
    <div className="register-container">
      <div className="logo3">
        <img src="./store-logo.png" />
      </div>
      <div className="if-notNew">
        <h1>Welcome back!</h1>
        <p>Sign In to keep purchasing</p>
        <Link to="/login">
          <button className="special-button">Sign In</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
