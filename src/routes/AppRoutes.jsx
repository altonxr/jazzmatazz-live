import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Shows from "../pages/Shows";
import Gallery from "../pages/Gallery";
import Members from "../pages/Members";
import Media from "../pages/Media";
import Booking from "../pages/Booking";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/members" element={<Members />} />
      <Route path="/media" element={<Media />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
};

export default AppRoutes;