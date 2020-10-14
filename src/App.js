import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ImageGenerator from "./components/ImageGenerator/ImageGenerator";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <h1>These are the components:</h1>
      <Header />
      <ImageGenerator />
      <Footer />
    </div>
  );
}

export default App;
