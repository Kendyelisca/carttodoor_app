import { useContext, useState, useEffect } from "react";
import "./login.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Check if a user is already authenticated (token exists in local storage)
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Set the user context with the token's data
      // This assumes that your token contains user information like ID, username, etc.
      // Modify it to match your token structure
      const tokenData = JSON.parse(atob(storedToken.split(".")[1]));
      setUser(tokenData);
      setRedirect(true);
    }
  }, [setUser]);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });

      setUser(data.user);
      alert("Login successful");

      // Store the token in local storage
      localStorage.setItem("token", data.token);

      // Redirect after successful login
      setRedirect(true);
    } catch (error) {
      // Handle errors here
      if (error.response) {
        // The request was made and the server responded with a status code
        // Check if there is an error message in the response data
        const errorMessage = error.response.data.message || "Login failed";
        alert(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received from the server");
      } else {
        // Something else happened while setting up the request
        console.error("Error setting up the request", error.message);
      }
    }
  }

  // Redirect to the home page if redirect is true
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container-login">
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
