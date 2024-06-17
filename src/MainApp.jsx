import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "./utils/firebase";
import App from "./pages/App";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function MainApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        <Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
        <Route path="/" element={user ? <App /> : <Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
}

export default MainApp;
