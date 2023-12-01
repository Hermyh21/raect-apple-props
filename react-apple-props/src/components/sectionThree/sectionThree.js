import React, { Component } from "react";
import Common from "../sectionOne/common.js";
export default class sectionThree extends Component {
  render() {
    return (
      <section className="third-hightlight-wrapper">
        <div className="container">
          <Common title="title-wraper bold" titletext="iPhone 11 Pro" />
          <Common
            des="description-wrapper"
            des_text="Pro cameras. Pro display. Pro performance."
          />
          <Common
            price="price-wrapper"
            p="From $24.95/mo. or $599 with trade‑in."
          />

          <div className="links-wrapper">
            <ul>
              <Common linkUrl="#" linkName="Learn More" />
              <Common linkUrl="#" linkName="Order" />
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
