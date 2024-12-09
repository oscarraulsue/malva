import React from "react";
import "./App.css";
import { CategoriesPages, HomePage, NotFound, Product, Woman } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Layout";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/pages/mujer" element={<Woman />} />
            <Route path="/pages/:categoryId" element={<CategoriesPages />} />
            <Route path="/collections/:categoryId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RootLayout>
    </div>
  );
}

export default App;
