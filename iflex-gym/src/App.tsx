import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import LandingPage from "./sections/LandingPage";
// background image
import BackgroundImage from "./assets/backgroundImages/HomePage.png";

export default function App() {
  return (
    <BrowserRouter>
      <main className="">
        <div
          style={{ backgroundImage: `url(${BackgroundImage})` }}
          className="w-full bg-cover bg-center h-[90vh]  bg-no-repeat"
        >
          <div className="px-20 h-full flex flex-col justify-between">
            <Navbar />
            <div className="h-[100%] flex items-center">
              <LandingPage />
            </div>
          </div>
        </div>
        <AboutUs />
        <Services />
        <Contact />
      </main>
    </BrowserRouter>
  );
}
