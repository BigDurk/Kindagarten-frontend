import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <div>
          <h2>#About Us</h2>
          <p>LEARN ABOUT OUR HISTORY</p>
        </div>
      </div>
      <section className="contact-wrapper py-2">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about-title">
                <h4>Our Mission</h4>
              </div>
              <p className="about-content mt-md-0 mt-4">
                At Kidio, our aim is to establish a nurturing and safe
                environment that encourages comprehensive development in
                children. We are dedicated to fostering a lifelong passion for
                learning through interactive activities and a curriculum that
                stimulates curiosity and imagination. Our primary focus is on
                creating a supportive and inclusive atmosphere where each
                child's unique development is nurtured. We strongly advocate for
                close collaboration with families, promoting transparent
                communication and building strong partnerships. Our committed
                team receives ongoing support and training to ensure the
                provision of top-quality care and education. Ultimately, our
                goal is to instill confidence and preparedness in every child,
                equipping them for a promising and prosperous future.
              </p>
            </div>

            <div className="col-lg-6 col-12 about-imgg">
              <img src="/images/l2.jpg" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="mt-5 ">
            <div className="about-title">
              <h4>Our Services</h4>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-12 about-imgg">
                <img src="/images/a4.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 col-12">
                <div className="about-content mt-lg-0 mt-4">
                  At Kidio, our goal is to establish a nurturing and safe
                  environment that supports holistic child development. We aim
                  to cultivate a lifelong passion for learning through
                  interactive activities and a curriculum that encourages
                  curiosity and creativity. Our priority lies in creating a
                  secure, supportive, and inclusive setting where each child's
                  personal growth is nurtured. We strongly advocate for close
                  collaboration with families, promoting transparent
                  communication and fostering robust partnerships. Our devoted
                  team receives continuous support and training to ensure the
                  delivery of the highest quality care and education.
                  Ultimately, our objective is to instill confidence and
                  readiness in every child, equipping them for a promising and
                  successful future.
                </div>
              </div>
            </div>
            <div className="row mt-5 y">
              <div className="about-title">
                <h4>Meet our Team</h4>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x">
                  <div className="x-item mb-3">
                    <img className="img-fluid" src="/images/p5.jpg" alt="" />
                  </div>
                  <h4>Micheal Williams</h4>
                  <b>Director, Kidio</b>
                  <p>
                    Oversees operations, sets policies, and ensures compliance
                    with regulations to maintain a safe and nurturing
                    environment for children.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x x1">
                  <div className="x-item x-item-1 mb-3">
                    <img className="img-fluid" src="/images/p2.jpg" alt="" />
                  </div>
                  <h4>Mary Jane</h4>
                  <b>Principal, Kidio</b>
                  <p>
                    Mange enrollment, staff, finances, and reporting with a
                    comprehensive administrator dashboard. Enhance efficiency
                    and control
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x">
                  <div className="x-item x-item-2 mb-3">
                    <img className="img-fluid" src="/images/p3.jpg" alt="" />
                  </div>
                  <h4>John Doe</h4>
                  <p>
                    Mange enrollment, staff, finances, and reporting with a
                    comprehensive administrator dashboard. Enhance efficiency
                    and control
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x">
                  <div className="x-item mb-3">
                    <img className="img-fluid" src="/images/p4.jpg" alt="" />
                  </div>
                  <h4>David James</h4>
                  <p>
                    Mange enrollment, staff, finances, and reporting with a
                    comprehensive administrator dashboard. Enhance efficiency
                    and control
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x x1">
                  <div className="x-item x-item-1 mb-3">
                    <img className="img-fluid" src="/images/p5.jpg" alt="" />
                  </div>
                  <h4>Michelle Grace</h4>
                  <p>
                    Mange enrollment, staff, finances, and reporting with a
                    comprehensive administrator dashboard. Enhance efficiency
                    and control
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12 op mt-3 ">
                <div className="x">
                  <div className="x-item x-item-2 mb-3">
                    <img className="img-fluid" src="/images/p6.jpg" alt="" />
                  </div>
                  <h4>Mary Jane</h4>
                  <p>
                    Mange enrollment, staff, finances, and reporting with a
                    comprehensive administrator dashboard. Enhance efficiency
                    and control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
