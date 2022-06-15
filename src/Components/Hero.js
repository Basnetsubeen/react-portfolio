import React from "react";
import logo from "../assets/logo.png";
import my_photo from "../assets/my_photo.jpg";

const Hero = () => {
  return (
    <div id="hero" class="hero">
      <nav class="navbar navbar-expand-md navbar-light bg-light bg-opacity-10">
        <div class="container">
          <a class="navbar-brand nav-font" href="#">
            <img src={logo} alt="logo" width="60" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav-font"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#aboutMe">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#contactMe"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-5 text-center order-md-2">
            <img src={my_photo} height="280" width="80%" alt="" />
          </div>
          <div class="col-md-7 mt-5">
            Hi, 👋 i'm
            <div class="fs-1 fw-bolder mb-4">Subin Basnet</div>
            <p>I’m a software developer working in Australia.</p>
            <button class="btn btn-danger">
              Download Resume <i class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
