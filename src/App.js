import "./styles.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import Contactus from "./contactus";
import Carrer from "./carrer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="carrer" element={<Carrer />} />
          <Route path="contactus" element={<Contactus />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
