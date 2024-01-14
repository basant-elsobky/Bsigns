import React, { useEffect, useState } from 'react';
import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setNavbarOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={`header fixed-top ${show ? 'bg-black' : 'bg-transparent'}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={scrollToTop}>
            Logo
          </a>
          <button
            onClick={toggleNavbar}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse order-lg-2 justify-content-center order-3${
              navbarOpen ? ' show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-40}
                  duration={200}
                  className="nav-link"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={200}
                  className="nav-link"
                  href="#"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={toggleNavbar}
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  href="#"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
