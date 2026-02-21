import "./App.css";
import Home from "./pages/Home";
import About from "./sections/About";
import Butumen from "./sections/Butumen";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Products from "./sections/Products";
import OurServices from "./sections/Services";
import Specifications from "./sections/Specifications";
import GetInTouch from "./sections/Touch";
import CommitmentValues from "./sections/Values";

function App() {
  return (
    <>
      <Home />
      <Hero />
      <About />
      <Products />
      <Mission />
      <Butumen />
      <Specifications />
      <OurServices />
      <CommitmentValues />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
