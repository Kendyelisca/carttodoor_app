import { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    // por ejemplo, enviar los datos al servidor.
  };

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para redirigir a la página de registro
    // o mostrar un formulario de registro en el mismo componente.
    alert("Redirect to registration page or show registration form");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <p className="register-link" onClick={handleRegister}>
          Register
        </p>
      </form>
    </div>
  );
};

export default Login;
