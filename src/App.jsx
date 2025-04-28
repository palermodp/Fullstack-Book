import React from "react";
import Home from "./components/Home";
import Frontend from './pages/Frontend';
import Backend from './pages/Backend';
import Auth from './pages/Auth';
import Register from './pages/register.jsx';  // Cambiar Register.jsx por register.jsx
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Toaster position="top-right" />
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/register" element={<Register />} />
              <Route path="/frontend" element={<Frontend />} />
              <Route path="/backend" element={<Backend />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;