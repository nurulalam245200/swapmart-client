import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/icon/favicon.ico";
import bg from "../../../images/icon/footer.png";
const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
        className="footer p-10 text-base-content"
      >
        <div>
          <img style={{ width: "98px", height: "98px" }} src={logo} alt="" />
          <p className=" text-xl font-extrabold text-slate-600">
            Swap Mart Ltd.
            <br />
            Providing reuseable Gagets since 2000
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="text-center mt-20">
        <p>Copyright © 2022 - All right reserved by Swap Mart Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
