import React from "react";
import logo from "../../assets/flexfintx-green-logo.png";

function Banner() {
  return (
    <section className="section has-background-primary">
      <div className="container is-fullhd">
        <div className="is-flex is-flex-direction-column content has-text-centered is-align-items-center">
          <figure className="image is-128x128">
            <a href="https://flexfintx.com">
              <img src={logo} alt="" />
            </a>
          </figure>
          <br />
          <h1>Welcome to FlexLand</h1>
          <h4>The future of Africa!</h4>
          <br /><br />
        </div>
      </div>
    </section>
  );

}

export default Banner;