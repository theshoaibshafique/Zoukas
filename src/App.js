import "./App.css";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
