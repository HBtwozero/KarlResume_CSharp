import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.module.css";
import resume from "../../config/utils/resumeData";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="footer_nametag">
        <Typography className="footer_name"> {resume.name}</Typography>
      </div>
      <div className="footer_copyrighttag">
        <Typography className={styles.footer_copyright}></Typography>
      </div>
    </div>
  );
};
export default Footer;
