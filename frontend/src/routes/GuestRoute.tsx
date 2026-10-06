import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../store/useAuthStore";

const GuestRoute = () => {
  const user = useAuthStore.getState().user;
  console.log(user);
  

  if (user) return <Navigate to="/" replace />;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default GuestRoute;
