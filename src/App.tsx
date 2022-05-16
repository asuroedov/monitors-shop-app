import React from "react";

import MainPage from "./pages/MainPage/MainPage";
import HeaderPreloader from "./components/HeaderPreloader/HeaderPreloader";

import "./App.css";

function App() {
  return (
    <>
      <HeaderPreloader />
      <MainPage />
    </>
  );
}

export default App;
