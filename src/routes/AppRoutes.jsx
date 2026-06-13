import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";
import Shows from "../pages/Shows";
import Members from "../pages/Members";
import Media from "../pages/Media";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -24,
        filter: "blur(12px)",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/shows"
          element={
            <PageTransition>
              <Shows />
            </PageTransition>
          }
        />

        <Route
          path="/members"
          element={
            <PageTransition>
              <Members />
            </PageTransition>
          }
        />

        <Route
          path="/media"
          element={
            <PageTransition>
              <Media />
            </PageTransition>
          }
        />

        <Route
          path="/booking"
          element={
            <PageTransition>
              <Booking />
            </PageTransition>
          }
        />

        {/* 404 Not Found Route */}
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />

      </Routes>

    </AnimatePresence>
  );
};

export default AppRoutes;