import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/HomePage";
import AnalyzeResume from "./pages/AnalyzeResume";
import { AuthProvider } from "../src/context/AuthContext";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import { auth } from "../src/firebase/firebase"
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [user, setUser] = useState(null); //Declare user state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <AuthProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/resume-analysis" element={user ? <AnalyzeResume /> : <Navigate to="/signin" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>

  );
}

export default App;
