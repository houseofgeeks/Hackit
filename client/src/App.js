import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, Router, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import CountdownPage from "./pages/CountdownPage";
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const {pathname} = useLocation()
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!pathname.includes('countdown') && <Navbar />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/countdown" element={<CountdownPage />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
