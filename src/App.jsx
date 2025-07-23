import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsappButton from "./pages/WhatsappButton.jsx";

import Header from "./pages/Header.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio";
import ServicesTab from "./pages/ServicesTab.jsx";
import ProcessInfographic from "./pages/ProcessInfographic.jsx";
import FAQ from "./pages/FAQ";
import Footer from "./pages/Footer";
import ServicesSection from "./pages/ServicesSection.jsx";

const App = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-purple-50 text-gray-800">
      <Header />
      <Home />
      <ProcessInfographic />
      <Portfolio />
      {/* <ServicesTab /> */}
      <ServicesSection />
      <FAQ />
      <Footer />
      <WhatsappButton />
    </main>
  );
};

export default App;
