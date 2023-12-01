import React, { Component } from "react";
import Common from "./common.js";
export default class sectionOne extends Component {
  render() {
    return (
      <section className="first-hightlight-wrapper">
        <div className="container">
          <Common new="new-alert" newtext="New" />
          <Common title="title-wraper bold black" titletext="iPad Pro" />

          <div className="links-wrapper">
            <ul>
              <Common linkUrl="#" linkName="Learn More" />
              <Common linkUrl="#" linkName="Order" />
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    );
  }
}
