import { useContext, useState } from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:8080/users/login", {
      email,
      password,
    });
    setUser(data.user);
    alert("Loggin successfully");

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

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
