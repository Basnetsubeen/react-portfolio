import React from "react";
import calculator from "../assets/calculator.png";
const Projects = () => {
  return (
    <section id="projects" class="projects py-5">
      <div class="container">
        {/* <!-- title --> */}
        <div class="title mb-3">
          <span>Projects</span>
        </div>

        <div class="row">
          <div class="col-md">
            <img src={calculator} width="100%" height="auto" alt="calculator" />
          </div>
          <div class="col-md bg-info pt-5  text-light">
            <div class="p-4">
              <h2 class="fw-bolder">My Portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML and CSS</p>
              <p class="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                natus!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md order-md-2 mt-2 mt-md-0">
            <img src={calculator} width="100%" height="auto" alt="calculator" />
          </div>
          <div class="col-md bg-success pt-5  text-light">
            <div class="p-4">
              <h2 class="fw-bolder">My Portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML and CSS</p>
              <p class="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                natus!
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md mt-md-0 mt-2">
            <img src={calculator} width="100%" height="auto" alt="calculator" />
          </div>
          <div class="col-md bg-secondary pt-5 text-light">
            <div class="p-4">
              <h2 class="fw-bolder">My Portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used: HTML and CSS</p>
              <p class="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
                natus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
