import React, { Component } from "react";
import Common from "../sectionOne/common";
export default class sectionTwo extends Component {
  render() {
    return (
      <div>
        <section className="second-hightlight-wrapper">
          <div className="container">
            <Common new="new-alert" newtext="New" />
            <Common title="title-wraper bold black" titletext="MacBook Air" />
            <Common
              des="description-wrapper black"
              des_text="Twice the speed. Twice the storage."
            />
            <Common price="price-wrapper grey" p="From $999." />

            <div className="links-wrapper">
              <ul>
                <Common linkUrl="#" linkName="Learn More" />
                <Common linkUrl="#" linkName="Order" />
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
