import React from "react";
// import "./footer.css";
import { FaRegHeart } from "react-icons/fa";

function Footer() {
  return (
    // <div className="footer">
    <footer class="py-3 bg-info fixed-bottom">
      <div class="container footer-wrapper2">
        <p class="m-0 text-center text-white">
          Copyright &copy; {new Date().getFullYear()} • Developed wih{" "}
          <span>
            {" "}
            <FaRegHeart /> by LTM
          </span>
        </p>
      </div>
    </footer>
    // </div>
  );
}

export default Footer;
