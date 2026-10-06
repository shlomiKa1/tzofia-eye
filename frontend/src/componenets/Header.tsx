import { Link, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useAuthStore } from "../store/useAuthStore";

const Header = () => {
  const user = useAuthStore.getState().user;
  console.log(user);

  const { logout } = useCheckAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout()
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <Link to="/">Show map</Link>
      {user?.role === "admin" ? <Link to="/users">Show all users</Link> : ""}
      {user?.role === "admin" ? (
        <Link to="/register">Create new user</Link>
      ) : (
        ""
      )}
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
