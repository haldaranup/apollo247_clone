import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pharmacy from "./Pages/Pharmacy";
import Home from "./Pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pharmacy" element={<Pharmacy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
