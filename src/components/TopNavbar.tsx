import React from "react";
import { Navbar } from "flowbite-react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const TopNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand as={Link} to="/">
        <StaticImage
          src="../images/icon.png"
          alt="App Logo"
          className="mr-3 h-6 sm:h-9"
          width={80}
          height={40}
        />
        <span className="self-center whitespace-nowrap font-semibold text-gray-100">
          Interviewers
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
