import "./App.css";
import Design from "./components/Design";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, Router, useLocation } from "react-router-dom";
import Loading from "./pages/Loading";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ProblemStatement from "./pages/ProblemStatement";
import Stars from "./components/Stars";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Verify from "./components/Authentication/Verify";
import { useSelector } from "react-redux";
function App() {
  const { pathname } = useLocation();
    const userLogin = useSelector((state)=>state.userLogin)
    const {hackUser} = userLogin
  useEffect(() => {
    
  }, [pathname,hackUser]);

  return (
    <div className="App">
      {!(
        pathname.includes("login") ||
        pathname.includes("register") ||
        pathname.includes("verify")
      ) && <Navbar />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/problems" element={<ProblemStatement />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/verify/:email" element={<Verify />} />
      </Routes>
      {/* )
      } */}
    </div>
  );
}

export default App;
