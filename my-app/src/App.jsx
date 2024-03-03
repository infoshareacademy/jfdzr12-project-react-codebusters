import "./App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage.tsx";
import { Portfolio } from "./Components/Portfolio/Portfolio.tsx";
import { Pricing } from "./Components/Pricing/Pricing";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PortfolioImage } from "./Components/Portfolio/PortfolioImage/PortfolioImage.jsx";
import { NotFound } from "./Components/NotFound/NotFound";
import { ThemeProvider } from "./providers/theme.tsx";
import { BasketProvider } from "./providers/basketContext.tsx";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const quotes = [
    "A camera alone does not make a picture. To make a picture you need a camera, a photographer and above all a subject. It is the subject that determines the interest of the photograph. – Man Ray",
    "Capturing Moments, Creating Memories: Lens Studio, where photography meets artistry, offering stunning prints from our portfolio to adorn your world.",
  ];

  return (
    <>
      <ThemeProvider>
        <BasketProvider>
          <BrowserRouter>
            <Header />
            <div className="main__container">
              <Routes>
                <Route
                  path="/"
                  element={<LandingPage quotes={quotes} />}
                ></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/contactform" element={<ContactForm />}></Route>
                <Route
                  path="/portfolio/:imageId"
                  element={<PortfolioImage />}
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </BasketProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
