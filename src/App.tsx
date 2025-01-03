import React from "react";
import logo from "./logo.svg";
import * as C from "./allFiles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<C.Landing />} />
          <Route path="/location" element={<C.Location />} />
          <Route path="/search" element={<C.Search />} />
          <Route path="/meal-detail" element={<C.MealDetail />} />
          <Route path="/*" element={<C.NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
