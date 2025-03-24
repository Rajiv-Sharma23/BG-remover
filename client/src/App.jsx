import { Routes, Route } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "motion/react"; // Added for page transitions
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
 

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-200  relative overflow-hidden">
      
      {/* Subtle Animated Overlay for Extra Zing */}
      <Motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <ToastContainer position="bottom right"/>
      <Navbar />
      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <Motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Home />
                </Motion.div>
              }
            />
            <Route
              path="/result"
              element={
                <Motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Result />
                </Motion.div>
              }
            />
            <Route
              path="/buy"
              element={
                <Motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <BuyCredit />
                </Motion.div>
              }
            />
            
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      
    </div>
  );
}

export default App;