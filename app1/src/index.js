import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // એક જ વાર લખો
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Projects from "./pages/projects";
import Contactus from "./pages/contact";
import Enquiries from "./pages/enquiries";
import PageNotFound from "./pages/page_not_found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/enquiries" element={<Enquiries />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={5000} />
  </React.StrictMode>
);