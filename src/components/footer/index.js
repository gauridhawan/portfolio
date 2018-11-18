import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.less";

const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-container container">
      <div className=" footer-row row">
        <div className="message col-lg-6">
          <FontAwesomeIcon icon="check-square" />
          <h2>Lets Chat !!</h2>
          <div> I am reachable at dhawan.gauri@gmail.com </div>
        </div>
        <div className="icons col-lg-6">
          <h2>Follow</h2>
          <div className="icons-wrapper">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  className="social-icon text-xs-center"
                  target="_blank"
                  href="#"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-icon text-xs-center"
                  target="_blank"
                  href="#"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="social-icon text-xs-center"
                  target="_blank"
                  href="#"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
