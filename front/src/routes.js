import React from "react";
import { Routes, Route } from 'react-router-dom';
import Contact from "./Pages/contact";
import HomePage from "./Pages/home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="contato"
        element={<Contact />}
      />
    </Routes>
  )
}

export default MainRoutes;