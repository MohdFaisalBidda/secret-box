import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";
import PasswordReset from "./Components/auth/PasswordReset";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <Router>
      <Routes>
        {user == null && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        )}
        {user && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/reset" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
