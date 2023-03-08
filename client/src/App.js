import "./App.css";
import Design from "./components/Design";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import Loading from "./pages/Loading";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Validate from "./components/Authentication/Validate";
import ProblemStatement from "./pages/ProblemStatement";
import Stars from "./components/Stars";
import Profile from "./components/Profile";
function App() {
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 3000);
  }, []);

  return (
    <div className="App">
      {/* {loading ? (
        <Loading />
      ) : ( */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/validate" element={<Validate />} />
          <Route exact path="/problems" element={<ProblemStatement />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      {/* )
      } */}
    </div>
  );
}

export default App;
