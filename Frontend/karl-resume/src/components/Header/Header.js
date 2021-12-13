import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, NavLink, withRouter } from "react-router-dom";
import "./Header.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram
} from "@material-ui/icons";
import CustomButton from "../Button/Button";
import resume from "../../utils/resumeData";

const Header = props => {
  const pathName = props?.location?.pathname;
  const { name, title, displayImage, birthday, email, socials } = resume;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link
        as={NavLink}
        to="/about"
        className={pathName == "/about" ? "header_link_active" : "header_link"}
      >
        <Navbar.Brand className="header_home" icon={<HomeRounded />}>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_title">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/about"
            className={
              pathName == "/about" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/blog"
            className={
              pathName == "/blog" ? "header_link_active" : "header_link"
            }
          >
            Blog
          </Nav.Link>
        </Nav>

        <div className="header_icon">
          {Object.keys(socials).map(key => (
            <a href={socials[key].link} target="_blank">
              {socials[key].icon}
            </a>
          ))}
          <CustomButton text="Hire Me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
