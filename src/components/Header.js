// Header.js
import React, { useState, useEffect } from "react";
import { FaBars, FaHome,  FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import './Header.css'

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/Admission",
    name: "ADMISSION",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
    ],
  },
  {
    path: "/Academics",
    name: "ACADEMICS",
    icon: <MdMessage />,
  },
  {
    path: "/Library",
    name: "LIBRARY",
    icon: <BiAnalyse />,
  },
  {
    path: "/Login",
    name: "LOGIN",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/order",
    name: "CONTACT US",
    icon: <BsCartCheck />,
  },
  
];

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <body class="background">
      <header className={`header ${isTop ? "top" : ""}`}>
        <div className="logo-container">
          <h1 className="logo">LOKNAYAK JAIPRAKASH</h1>
        </div>

        <nav className="nav">
          {routes.map((route, index) => (
            <NavLink
              to={route.path}
              key={index}
              className="nav-link"
              activeClassName="active"
            >
              <div className="icon">{route.icon}</div>
              <div className="link-text">{route.name}</div>
            </NavLink>
          ))}
        </nav>

        <div className="menu-icon">
          <FaBars />
        </div>
      </header>
      </body>
    </>
  );
};

export default Header;
