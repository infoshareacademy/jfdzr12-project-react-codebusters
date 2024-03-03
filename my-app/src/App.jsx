import "./App.css";
import { Header } from "./Components/Header/Header";
import { LandingPage } from "./Components/LandingPage/LandingPage.tsx";
import { Portfolio } from "./Components/Portfolio/Portfolio.tsx";
import { Login } from "./Components/Authentication/Login/Login.tsx";
import { Register } from "./Components/Authentication/Register/Register.tsx";
import { Pricing } from "./Components/Pricing/Pricing";
import { ContactForm } from "./Components/ContactForm/ContactForm";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PortfolioImage } from "./Components/Portfolio/PortfolioImage/PortfolioImage.jsx";
import { NotFound } from "./Components/NotFound/NotFound";
import { ThemeProvider } from "./providers/theme.tsx";
import { Footer } from "./Components/Footer/Footer";
import { auth } from "./../firebase-config.js";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BasketModal } from "./Components/BasketModal/BasketModal.jsx";

function App() {
  const quotes = [
    "A camera alone does not make a picture. To make a picture you need a camera, a photographer and above all a subject. It is the subject that determines the interest of the photograph. – Man Ray",
    "Capturing Moments, Creating Memories: Lens Studio, where photography meets artistry, offering stunning prints from our portfolio to adorn your world.",
  ];

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (res) => {
    setUser(res);
  });

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header setUser={setUser} user={user} />
          <div className="main__container">
            <Routes>
              {user ? (
                <>
                  <Route
                    path="/"
                    element={<LandingPage quotes={quotes} />}
                  ></Route>
                  <Route
                    path="/portfolio"
                    element={user ? <Portfolio /> : <Login />}
                  ></Route>
                  <Route
                    path="/pricing"
                    element={user ? <Pricing /> : <Login />}
                  ></Route>
                  <Route path="/contactform" element={<ContactForm />}></Route>
                  <Route
                    path="/portfolio/:imageId"
                    element={user ? <PortfolioImage user={user} /> : <Login />}
                  ></Route>
                  <Route
                    path="/basket"
                    element={user ? <BasketModal user={user} /> : <Login />}
                  ></Route>
                </>
              ) : (
                <>
                  <Route
                    path="/login"
                    element={user ? <Navigate to={"/"} replace /> : <Login />}
                  ></Route>
                  <Route
                    path="/register"
                    element={
                      user ? <Navigate to={"/"} replace /> : <Register />
                    }
                  ></Route>
                </>
              )}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
