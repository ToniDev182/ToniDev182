import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Body />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
