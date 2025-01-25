import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Toaster } from "react-hot-toast";
import "./assets/scss/index.scss";
import "./assets/css/responsive.css";

//import custom made componants
import Hero from "./componants/hero";
import About from "./componants/about";
import Latest from "./componants/latest";
import Testonomials from "./componants/Testonomials";
import ContactUs from "./componants/ContactUs";
import Footer from "./componants/footer";
import Navbar from "./componants/Navbar";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Navbar />
      <Hero />
      <About />
      <Latest />
      <Testonomials />
      <ContactUs />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="#" element="" />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
