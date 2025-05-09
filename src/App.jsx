import "./App.css";
import Faq from "./components/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoSection from "./components/LogoSection";
import Pricing from "./components/Pricing";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSection />
      <Services />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer/>
    </>
  );
}

export default App;
