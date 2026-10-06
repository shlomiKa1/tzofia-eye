import { Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import LoginPage from "./pages/LoginPage";
// import GuestRoute from "./routes/GuestRoute";
import { useAuthStore } from "./store/useAuthStore";
import Layout from "./Layout";
import UsersPage from "./pages/UsersPage";
import AdminRoute from "./routes/AdminRoute";
import { useEffect } from "react";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const setStatus = useAuthStore.getState().setStatus;

  useEffect(() => {
    setStatus();
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MapPage />} />

        <Route element={<AdminRoute />}>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
