import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/Footer";
import AllPlacements from "./components/placements/AllPlacements";


// Landing page sections
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Placements from "./components/placements/Placements";
import FAQ from "./components/Faq/Faq";

// Pages
import About from "./pages/About";
import Courses from "./pages/Courses";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <>
      {/* Header always visible */}
      <Header />

      {/* Page routing */}
      <Routes>
        {/* HOME / LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Courses />
              <Services />
              <Placements />
              <Alumni />
              <FAQ />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseSlug" element={<CourseDetails />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placements" element={<AllPlacements />} />


        {/* 🔥 CATCH-ALL (Unknown paths) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}

export default App;
