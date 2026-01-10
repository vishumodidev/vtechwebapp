import FAQ from "./components/Faq/Faq";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/header/Header";
import Placements from "./components/placements/Placements";
import About from "./pages/About";
import Courses from "./pages/Courses";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Courses />
      <Services />
      <Placements />
      <FAQ />
      <Footer />
      
      
      {/* routes / pages */}
    </>
  );
}

export default App;
