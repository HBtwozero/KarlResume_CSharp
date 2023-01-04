import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, withRouter } from "react-router-dom";
import "./Header.module.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@material-ui/icons";
import Link from "next/link";
import CustomButton from "../Button/Button";
import resume from "../../config/utils/resumeData";
import styles from "./Header.module.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";


const Header = (props) => {
  // If no argument is passed, it will use `common.json`
  const { t } = useTranslation();

  const pathName = props?.location?.pathname;
  const { name, title, displayImage, birthday, email, socials } = resume;
  const router = useRouter();

  const handleLocaleChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  return (
    <Navbar expand="lg" sticky="top" className={styles.header}>
      <Link
        href="/about"
        className={
          pathName == "/about"
            ? `${styles.header_link_active}`
            : `${styles.header_link}`
        }
      >
        <Navbar.Brand className={styles.header_home} icon={<HomeRounded />}>
          <HomeRounded />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className={styles.header_title}>
          <Link
            href="/docs/Resume"
            className={
              pathName == "/docs/Resume"
                ? `${styles.header_link_active}`
                : `${styles.header_link}`
            }
          >
            Resume
          </Link>

          <Link
            href="/docs/Portfolio"
            className={
              pathName == "/docs/Portfolio"
                ? `${styles.header_link_active}`
                : `${styles.header_link}`
            }
          >
            Portfolio
          </Link>

          <Link
            href="/about"
            className={
              pathName == "/about"
                ? `${styles.header_link_active}`
                : `${styles.header_link}`
            }
          >
            Contact
          </Link>

          <Link
            href="/docs/Blog"
            className={
              pathName == "/docs/Blog"
                ? `${styles.header_link_active}`
                : `${styles.header_link}`
            }
          >
            Blog
          </Link>
        </Nav>

        <div className={` ${styles.header_icon}`}>
          {Object.keys(socials).map((key) => (
            <a href={socials[key].link} target="_blank">
              {socials[key].icon}
            </a>
          ))}
          <CustomButton text="Hire Me" icon={<Telegram />} />
        </div>
        <select onChange={handleLocaleChange} value={router.locale}>
          <option value="en">🇺🇸 English</option>
          <option value="zh-CN">🇨🇳 中文</option>
        </select>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
