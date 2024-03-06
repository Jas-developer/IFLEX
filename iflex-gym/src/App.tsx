import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import LandingPage from "./sections/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <main className="px-20">
        <Navbar />
        <LandingPage />
        <AboutUs />
        <Services />
        <Contact />
      </main>
    </BrowserRouter>
  );
}
