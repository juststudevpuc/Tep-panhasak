import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="homePage" element={<HomePage />} />
          <Route path="aboutPage" element={<AboutPage />} />
          <Route path="skillPage" element={<SkillPage />} />
          <Route path="projectPage" element={<ProjectPage />} />
          <Route path="contactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
