import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";
import ScrollToTop from "@/components/common-components/ScrollToTop";
import Footer from "@/components/common-components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import TargetPrograms from "@/pages/TargetPrograms";
import Labz from "@/pages/Labz";
import Healthcare from "@/pages/Healthcare";
import Placement from "@/pages/Placement";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/targetprograms" element={<TargetPrograms />} />
        <Route path="/labz" element={<Labz />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;