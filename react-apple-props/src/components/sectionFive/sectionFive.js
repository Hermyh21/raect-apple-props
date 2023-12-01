import React, { Component } from "react";
import Common from "../sectionOne/common";
import tv from "../../resources/images/icons/apple-tv-logo.png";
import banker from "../../resources/images/home/banker.png";
import watch from "../../resources/images/icons/watch-series5-logo.png";
export default class sectionFive extends Component {
  render() {
    return (
      <section class="fifth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={tv} />
                  </div>
                </div>

                <div class="tvshow-logo-wraper">
                  <img src={banker} />
                </div>

                <div class="watch-more-wrapper">
                  <a href="#">Watch now on the Apple TV App</a>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <div class="top-logo-wrapper">
                  <div class="logo-wrapper">
                    <img src={watch} />
                  </div>
                </div>
                <Common
                  des="description-wrapper"
                  des_text="With the Always-On Retina display.
                  <br />
                  You’ve never seen a watch like this."
                />

                <div className="links-wrapper">
                  <ul>
                    <Common linkUrl="#" linkName="Learn More" />
                    <Common linkUrl="#" linkName="Order" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
