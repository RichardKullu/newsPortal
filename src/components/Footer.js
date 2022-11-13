import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
         <div className='footer1'>
            <p className="bottom-0 start-0 ps-5">	&copy; University of Delhi All Right Reserved</p>
            <div className="social bottom-0 end-0 pe-5">
                <Link to=""><i className="bx bxl-facebook"></i></Link >
                <Link to=""><i className="bx bxl-instagram"></i></Link >
                <Link to=""><i className="bx bxl-linkedin"></i></Link >
                <Link to=""><i className="bx bxl-twitter"></i></Link >
                <Link to=""><i className="bx bxl-pinterest"></i></Link >
            </div>
        </div>
    </>
  );
}

export default Footer;