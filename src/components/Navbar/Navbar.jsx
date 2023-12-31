
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";
import HamburgerIcon from "../../assets/hamburger-icon.png";
import useUserData from '../../hooks/useUserData';


function Navbar() {
  const [userData] = useUserData();

  const currentLocation = useLocation();


  const [mobileMenuState, setMobileMenuState] = useState(false);
  const handleMenu = () => {
    setMobileMenuState((prevState) => (prevState === true ? false : true));
  };

  return (
    <>
      {/* Desktop Navbar (menu ) */}
      <nav className="navbar">
        {/* Brand Name  (left item) */}
        <p className="brand-name" style={{ fontWeight: 900, fontSize: "2rem" }}>
          QMedic<span style={{ color: "#1e8ceb" }}>.</span>
        </p>

        {/* Nav items  (midddle items) */}
        <ul>
          <li className="nav-item">
            <NavLink
              to="/"
              style={{
                color: currentLocation.pathname === "/" ? "#1e8ceb" : "#000",
                borderBottom:
                  currentLocation.pathname === "/"
                    ? "2px solid #1e8ceb"
                    : "none",
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              style={{
                color:
                  currentLocation.pathname === "/about" ? "#1e8ceb" : "#000",
                borderBottom:
                  currentLocation.pathname === "/about"
                    ? "2px solid #1e8ceb"
                    : "none",
              }}
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/consultation"
              style={{
                color:
                  currentLocation.pathname === "/consultation"
                    ? "#1e8ceb"
                    : "#000",
                borderBottom:
                  currentLocation.pathname === "/consultation"
                    ? "2px solid #1e8ceb"
                    : "none",
              }}
            >
              Consultation
            </NavLink>
          </li>

          { (userData?.isDoctor || userData?.isAdmin) &&
            <li className="nav-item">
              <NavLink
                to="/appointmentList"
                style={{
                  color:
                    currentLocation.pathname === "/appointmentList"
                      ? "#1e8ceb"
                      : "#000",
                  borderBottom:
                    currentLocation.pathname === "/appointmentList"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                Appoinments
              </NavLink>
            </li>
          }
          { userData?.isAdmin &&
            <li className="nav-item">
              <NavLink
                to="/addDoctor"
                style={{
                  color:
                    currentLocation.pathname === "/adddoctor"
                      ? "#1e8ceb"
                      : "#000",
                  borderBottom:
                    currentLocation.pathname === "/adddoctor"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                Add Doctor
              </NavLink>
            </li>
          }
          { userData?.isAdmin &&
            <li className="nav-item">
              <NavLink
                to="/updateDoctor"
                style={{
                  color:
                    currentLocation.pathname === "/updateDoctor"
                      ? "#1e8ceb"
                      : "#000",
                  borderBottom:
                    currentLocation.pathname === "/updateDoctor"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                Update Doctor
              </NavLink>
            </li>
          }

        </ul>

        {/* Right items ***(CONDITIONAL RENDERING NEEDED)  */}
        {/* <div className="navbar__right-items">
          <img className="nav-icons" src={LanguageIcon} alt="Language icon" />
          <img className="nav-icons" src={BellIcon} alt="Bell icon" />
          <img className="nav-icons" src={ManIcon} alt="Man icon" />
        </div> */}
        <NavLink className="" to="/login">
          <button className="hidden lg:inline-block px-12 py-3 text-sm font-bold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
            Login
          </button>
        </NavLink>

        {/* Hamburger menu  */}
        <img
          className="menu-icon"
          src={HamburgerIcon}
          alt="hamburger icon"
          onClick={handleMenu}
        />
      </nav>

      {/* Mobile Menu  */}
      <div
        className="mobile-menu"
        style={{ display: mobileMenuState ? "block" : "none" }}
      >
        <nav className="mobile__navbar">
          {/* Nav items  (midddle items) */}
          <ul>
            <li className="mobile__nav-item">
              <NavLink
                to="/"
                style={{
                  color: currentLocation.pathname === "/" ? "#1e8ceb" : "#000",
                  borderBottom:
                    currentLocation.pathname === "/"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="mobile__nav-item">
              <NavLink
                to="/about"
                style={{
                  color:
                    currentLocation.pathname === "/about" ? "#1e8ceb" : "#000",
                  borderBottom:
                    currentLocation.pathname === "/about"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                About
              </NavLink>
            </li>
            <li className="mobile__nav-item">
              <NavLink
                to="/consultation"
                style={{
                  color:
                    currentLocation.pathname === "/consultation"
                      ? "#1e8ceb"
                      : "#000",
                  borderBottom:
                    currentLocation.pathname === "/consultation"
                      ? "2px solid #1e8ceb"
                      : "none",
                }}
              >
                Consultation
              </NavLink>
            </li>
          </ul>

          {/* Right items ***(CONDITIONAL RENDERING NEEDED)  */}
          {/* <div className="mobile__navbar__right-items">
            <img className="nav-icons" src={LanguageIcon} alt="Language icon" />
            <img className="nav-icons" src={BellIcon} alt="Bell icon" />
            <img className="nav-icons" src={ManIcon} alt="Man icon" />
          </div> */}
          <NavLink className="" to="/login">
            <button className="inline-block px-12 py-3 text-sm font-bold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
              Login
            </button>
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
