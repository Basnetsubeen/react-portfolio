import React from "react";

const ContactMe = () => {
  return (
    <div id="contactMe" class="container mt-3">
      <div class="title mb-2">
        <span>Contact Me</span>
      </div>
      <div class="row fa-5x pt-3">
        <div class="col d-flex justify-content-around">
          <a href="">
            <i class="fa-brands fa-github text-warning"></i>
          </a>

          <a href="">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-instagram text-danger"></i>
          </a>
          <a href="mailto:myemail@com">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
