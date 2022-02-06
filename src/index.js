// import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "./home";
import About from "./about";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
// import Header from "./header";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <App />

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="carrer" element={<Carrer />} />
          <Route path="contactus" element={<Contactus />} />
      </Routes> 
     </BrowserRouter>   */}
  </>,
  rootElement
);
