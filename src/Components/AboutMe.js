import React from "react";
import about from "../assets/about.JPG";
import Layout from "./Layout";

const AboutMe = () => {
  return (
    <Layout>
      <div id="aboutMe" class="container about mt-5 py-5">
        {/* <!-- title --> */}
        <div class="title mb-2">
          <span>About Me</span>
        </div>
        <div class="row mt-5 text-light">
          <div class="col text-center">
            <img src={about} width="70%" alt="" />
          </div>
          <div class="col">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              dolor natus repellat sunt facere placeat!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae
              laudantium ratione, voluptatibus facilis reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;
