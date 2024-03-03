import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <AboutUs />
        <Services />
        <Contact />
      </main>
    </BrowserRouter>
  );
}
