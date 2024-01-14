import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <Route path="/" element={<Home/>} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
