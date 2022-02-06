import React from "react";
import { Link } from "react-router-dom";
import "./styles2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram as instagram,
  faFacebook as facebook,
  faWhatsapp as whatsapp,
  faLinkedin as linkedin,
  faGithub as github
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="column">
          <ul>
            <h3>Useful Links</h3>
            <li>
              <Link to="/carrer">Carrer</Link>
            </li>
            <li>
              <Link to="/board">Advisory Members</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="column">
          <h3>Address</h3>
          <div>Sarvodaya Nagar,Bhandup(W),Mumbai -400078</div>
        </div>
        <div className="column">
          <h3>Location/Map</h3>
          <iframe
            styles={{
              width: "500",
              height: "350",
              border: "0",
              allowfullscreen: "",
              loading: "lazy"
            }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15076.321939930074!2d72.93424474999999!3d19.1479539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1643960692511!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <div class="social-container">
        <h3>Social Follow</h3>
        <a href="https://www.facebook.com/" className="facebook social">
          <FontAwesomeIcon icon={facebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/" className="instagram social">
          <FontAwesomeIcon icon={instagram} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/aniket-sawant-607846184/"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={linkedin} size="2x" />
        </a>
        <a href="https://wa.me/917738827592" className="whatsapp social">
          <FontAwesomeIcon icon={whatsapp} size="2x" />
        </a>
        <a
          href="https://github.com/sawantaniket82/Newegin"
          className="github social"
        >
          <FontAwesomeIcon icon={github} size="2x" />
        </a>
      </div>
    </div>
  );
}
