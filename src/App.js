import "./App.css";
import CreateAccount from "./components/createAccount/CreateAccount";
import Hero from "./components/heroSection/Hero";
import MathSection from "./components/mathSection/MathSection";
import MobileSection from "./components/mobileSection/MobileSection";
import Navbar from "./components/navbar/Navbar";
import Section3 from "./components/section3/Section3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MobileSection />
      <Section3 />
      <MathSection />
      <CreateAccount />
    </div>
  );
}

export default App;
