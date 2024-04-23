import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="footer-wrapper py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <img
                src="https://kindergarten.thimpress.com/demo-3/wp-content/uploads/sites/6/2019/02/logo-03.png"
                className="img-fluid log"
              />
              <p className="mt-3">Features</p>
              <Link to={"/about"}>
                {" "}
                <p>About</p>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <p>Contact</p>
              </Link>
              <p>Blog</p>
            </div>
            <div className="col-md-3 col-12">
              <h2 className="mb-4">Support</h2>

              <p>Updates</p>
              <p>Manuals</p>
              <p>Troubleshooting</p>
              <p>Complaints</p>
            </div>
            <div className="col-md-3 col-12">
              <h2 className="mb-4">Services</h2>
              <Link to={"/enrol"}>
                {" "}
                <p>Enrollment</p>
              </Link>
              <Link to={"/parentprofile"}>
                {" "}
                <p>Parent Portal</p>
              </Link>
              <Link to={"/staffprofile"}>
                {" "}
                <p>Staff Portal</p>
              </Link>
            </div>
            <div className="col-md-3 col-12">
              <h2 className="mb-3">Resources</h2>
              <p>FAQS</p>
              <p>Policies</p>
              <p>Guidlines</p>
              <p>Downloads</p>
            </div>
          </div>
        </div>
        <footer className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-4 mb-4 d-flex  flex-column ">
                <h2 className="text-white">Contact Us</h2>
                <div className="">
                  <address>
                    Kidio <br />
                    No 1240 Benin, Edo State
                    <br />
                    Nigeria
                  </address>
                  <p>
                    <a href="tel:+234 8103193091" className="hotline">
                      +234 8102884394
                    </a>{" "}
                  </p>
                  <p>
                    <a href="mailto:davidodimayo@gmail.com" className="hotline">
                      durk@gmail.com
                    </a>{" "}
                  </p>
                </div>

                <div className="social-btn">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                  <a>
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 pb">
                <p>
                  &copy;{new Date().getFullYear()} powered by Durk
                  <span className="logo-x">X</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
