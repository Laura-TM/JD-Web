import React from "react";
import "./footer.css";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      Copyright &copy; {new Date().getFullYear()} • Developed wih{" "}
      <span>
        {" "}
        <FaRegHeart /> by LTM
      </span>
    </div>
  );
};

export default Footer;
