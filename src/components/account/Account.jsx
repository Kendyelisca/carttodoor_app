import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

const Account = () => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.userName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Account;
