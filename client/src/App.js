import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route, Router, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
