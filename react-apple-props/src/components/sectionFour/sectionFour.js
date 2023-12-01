import React, { Component } from "react";
import Common from "../sectionOne/common";
export default class sectionFour extends Component {
  render() {
    return (
      <section class="fourth-heghlight-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="left-side-wrapper col-sm-12 col-md-6">
              <div class="left-side-container">
                <Common title="title-wraper" titletext="iPhone 11" />
                <Common
                  des="description-wrapper"
                  des_text="Just the right amount of everything."
                />
                <Common
                  price="price-wrapper"
                  p="From $18.70/mo. or $499 with trade‑in.<sup>1</sup>"
                />

                <div className="links-wrapper">
                  <ul>
                    <Common linkUrl="#" linkName="Learn More" />
                    <Common linkUrl="#" linkName="Order" />
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-side-wrapper col-sm-12 col-md-6">
              <div class="right-side-container">
                <Common
                  title="title-wraper white"
                  titletext=" Get the latest CDC response to COVID-19."
                />

                <div class="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Watch the PSA</a>
                    </li>
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
