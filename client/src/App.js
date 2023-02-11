import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { AuthContext } from "./context/AuthContext";
import {useContext} from "react";
import Messenger from "./pages/messenger/Messenger";



function App() {
  const {user}=useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Home/>:<Register/>}></Route>
        <Route path="/login" element={user ? <Navigate to="/"/>:<Login/>}></Route>
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register/>}></Route>
        <Route path="/messenger" element={!user ? <Navigate to="/"/>:<Messenger/>}></Route>
        <Route path="/messenger" element={!user ? <Navigate to="/"/>:<Messenger/>}></Route>
        <Route path="/profile/:username" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
