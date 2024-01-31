import "./App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Pricing } from "./Components/Pricing/Pricing";
import { ContactForm } from "./Components/ContactForm/ContactForm";

function App() {
  const quotes = [
    "A camera alone does not make a picture. To make a picture you need a camera, a photographer and above all a subject. It is the subject that determines the interest of the photograph. – Man Ray",
    "Capturing Moments, Creating Memories: Lens Studio, where photography meets artistry, offering stunning prints from our portfolio to adorn your world.",
  ];

  return (
    <>
      <Header />
      <div className="main__container">
        <LandingPage quotes={quotes} />
        <Portfolio />
        <Pricing />
        <ContactForm />
      </div>
    </>
  );
}

export default App;
