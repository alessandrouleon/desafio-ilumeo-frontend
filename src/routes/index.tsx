import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { UserHistory } from "../services/history/userHistory";
import { NotFound } from "../components/notFound";

export function AppRoutes() {
  const registration = UserHistory.getLocalStorageUserCode();
  const location = useLocation();
  
  const isHomeRoute = location.pathname.toLowerCase().includes("/home");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          !registration && isHomeRoute ? (
            <Navigate to="/" />
          ) : (
            <Home />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
