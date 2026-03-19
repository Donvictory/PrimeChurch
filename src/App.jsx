import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beliefs from "./components/Beliefs";
import JoinSection from "./components/JoinSection";
import Pastors from "./components/Pastors";
import Prayer from "./components/Prayer";
import Events from "./components/Events";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FormPage from "./components/FormPage";
import TrybeFormPage from "./components/TrybeFormPage";
import PrayerRequestPage from "./components/PrayerRequestPage";
import MandatePage from "./components/MandatePage";
import { regions } from "./data";

function App() {
  const activeRegion = regions[0];

  return (
    <div className="bg-bg min-h-screen font-body text-navy overflow-hidden">
      <Navbar activeRegion={activeRegion} />

      <Routes>
        <Route
          path="/"
          element={
            <main className="relative">
              <Hero activeRegion={activeRegion} />
              <Beliefs />
              <JoinSection />
              <Pastors activeRegion={activeRegion} />
              <Prayer />
              <Events />
              <Newsletter />
            </main>
          }
        />
        <Route path="/form" element={<FormPage />} />
        <Route path="/trybe-form" element={<TrybeFormPage />} />
        <Route path="/prayer-request" element={<PrayerRequestPage />} />
        <Route path="/mandate" element={<MandatePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
