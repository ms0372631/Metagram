import React from "react";
import { FaGithub, FaLinkedin, FaAngellist} from "react-icons/fa";

const Footer = () => {
  return(
    <div className="footer-content">
      <div className="footer-links">
        <a href="http://www.ycchiu.com" target="_blank">
          <img src={window.portfolioUrl} id="portfolio-logo"/>
        </a>
        <a href={`https://github.com/ms0372631`} target="_blank">
          <FaGithub size={36} color="#f7f7f7"/>
        </a>
        <a href={`https://www.linkedin.com/in/alan-chiu-188ab6134`} target="_blank">
          <FaLinkedin size={36} color="#f7f7f7"/>
        </a>
        <a href={`https://angel.co/u/alan-chiu-3`} target="_blank">
          <FaAngellist size={36} color="#f7f7f7" />
        </a>
      </div>
    </div>
  )
}

export default Footer;