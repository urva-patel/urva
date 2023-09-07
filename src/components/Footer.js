import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "@material-ui/core";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <IconButton href="https://www.linkedin.com/in/urva-patel-a0a25a113/"><LinkedInIcon /></IconButton>
      <IconButton href="https://github.com/urva-patel"><GithubIcon /></IconButton>
      </div>
      <p> urvapatel1@gmail.com <br></br><br></br> &copy; 2023 urva.com</p>
    </div>
  );
}

export default Footer;
