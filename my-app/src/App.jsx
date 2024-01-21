import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Pricing } from "./Components/Pricing/Pricing";
import { ContactForm } from "./Components/ContactForm/ContactForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main__container">
        <LandingPage />
        <Portfolio />
        <Pricing />
        <ContactForm />
      </div>
    </>
  );
}

export default App;