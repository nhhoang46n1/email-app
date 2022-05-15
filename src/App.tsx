import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Page/Dashboard/Dashboard";
import Login from "./Page/Login/Login";

const App: React.FC = () => {
  let navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main/*" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
