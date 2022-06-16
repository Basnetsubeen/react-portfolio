import React from "react";

import my_photo from "../assets/my_photo.jpg";
import Layout from "./Layout";

const Hero = () => {
  return (
    <Layout>
      <div id="hero" class="hero">
        <div class="container">
          <div class="row">
            <div class="col-md-5 py-3 text-center order-md-2">
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
    </Layout>
  );
};

export default Hero;
