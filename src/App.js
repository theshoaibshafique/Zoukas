import "./App.css";
import AboutApp from "./components/aboutappSection/AboutApp";
import ContactUS from "./components/contactus/ContactUS";
import CreateAccount from "./components/createAccount/CreateAccount";
import Faqs from "./components/faqs/Faqs";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import MathSection from "./components/mathSection/MathSection";
import MobileSection from "./components/mobileSection/MobileSection";
import Navbar from "./components/navbar/Navbar";
import Section3 from "./components/section3/Section3";
import Values from "./components/ValueSection/Values";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MobileSection />
      <Section3 />
      <MathSection />
      <CreateAccount />
      <AboutApp />
      <Faqs />
      <Values />
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
