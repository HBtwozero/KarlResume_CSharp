import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resume from "../../utils/resumeData";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_nametag">
        <Typography className="footer_name"> {resume.name}</Typography>
      </div>
      <div className="footer_copyrighttag">
        <Typography className="footer_copyright"></Typography>
      </div>
    </div>
  );
};
export default Footer;
