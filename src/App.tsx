import React from "react";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Layout from "./Layout";
import { NotFound } from "./pages/NotFound";
import { Technology } from "./pages/Technology";
import About from "./pages/AboutUs";
import { Impact } from "./pages/Impact";
import { Resources } from "./pages/Resources";
import { AboutPage, HomePage, ImpactPage, ResourcesPage, TechnologyPage } from "./Paths";

const App = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path={HomePage.path} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AboutPage.path} element={<About />} />
        <Route path={ImpactPage.path} element={<Impact />} />
        <Route path={ResourcesPage.path} element={<Resources />} />
        <Route path={TechnologyPage.path} element={<Technology />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
