import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer className="py-5">
        <Container>
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">About Me</h3>
              <p>I'm a passionate front-end developer dedicated to creating beautiful, functional websites that deliver exceptional user experiences.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Quick Links</h3>
              <ul className="footer-links list-unstyled">
                <li className="mb-2"><a href="#home">Home</a></li>
                <li className="mb-2"><a href="#about">About</a></li>
                <li className="mb-2"><a href="#services">Services</a></li>
                <li className="mb-2"><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Services</h3>
              <ul className="footer-links list-unstyled">
                <li className="mb-2"><a href="#">Web Development</a></li>
                <li className="mb-2"><a href="#">Responsive Design</a></li>
                <li className="mb-2"><a href="#">Web Applications</a></li>
                <li><a href="#">Maintenance</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="mb-4">Newsletter</h3>
              <p>Subscribe to my newsletter for the latest updates and insights.</p>
              <div className="footer-newsletter">
                <input type="email" className="form-control mb-3" placeholder="Your Email" />
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom text-center pt-4 border-top">
            <p className="copyright">&copy; {new Date().getFullYear()} YourName. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>

      <a href="#home" className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </a>
    </>
  );
};

export default Footer;