import { Link, useNavigate } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";

const Header = () => {
  const { logout } = useCheckAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login", { replace: true });
  };

  return (
    <header>
      <Link to="/">Show map</Link>
      <Link to="/users">Show all users</Link>
      <Link to="/register">Create new user</Link>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
