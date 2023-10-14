import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import "./account.css";
import { CgProfile } from "react-icons/cg";

const Account = () => {
  const navigate = useNavigate(); // Use useNavigate hook

  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  const handleContinueShopping = () => {
    // Navigate to the main route
    navigate("/");
  };

  return (
    <div className="account">
      {user ? (
        <>
          <div className="profile-content">
            <div className="user-profile">
              <div className="icon">
                <CgProfile />
              </div>
              <h1>Welcome, {user.firstName}!</h1>
            </div>
            <div className="user-info">
              <p>Email: {user.email}</p>
              <p>Username: {user.userName}</p>
              <p>Last Name: {user.lastName}</p>
              {/* Add more user information here */}
            </div>
            <div className="btns">
              <button onClick={handleLogout}>Logout</button>
              <button onClick={handleContinueShopping}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Account;
