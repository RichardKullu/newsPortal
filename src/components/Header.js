import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../logo-du.png";

const Header = () => {
  //   <nav class="conainter navbar navbar-expand-lg navbar-light bg-light sticky-md-top">
  //   <div class="container-fluid">
  //     <Link class="navbar-brand img-fluid ps-5" to="/">
  //       <img src={BrandLogo} alt={<span class="navbar-brand mb-0 h1">DU LOGO</span>} style={{width: '8rem'}}/>
  //     </Link>
  //     <button
  //       class="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarText"
  //       aria-controls="navbarText"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="collapse navbar-collapse" id="navbarText">
  //       <ul class="navbar-nav me-auto pe-5 mb-2 mb-lg-0 position-absolute top-50 end-0 translate-middle-y">
  //         <li class="nav-item">
  //           <a class="nav-link fw-bold" aria-current="page" href="http://www.du.ac.in/">
  //             DU Website
  //           </a>
  //         </li>
  //         <li class="nav-item">
  //           <Link class="nav-link fw-bold" to="#">
  //             Contact Us
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand img-fluid ps-5" to="/">
            <img
              src={BrandLogo}
              alt={<span class="navbar-brand mb-0 h1">DU LOGO</span>}
              style={{ width: "8rem" }}
              className="img-fluid"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-link fw-bold"
                aria-current="page"
                href="http://www.du.ac.in/"
              >
                DU Website
              </a>
              <Link class="nav-link fw-bold" to="#">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
