import React, { Component } from "react";

export default class common extends Component {
  render() {
    return (
      <div>
        <div className={this.props.new}>{this.props.newtext}</div>

        <div className={this.props.title}>{this.props.titletext}</div>

        <div className={this.props.des}>{this.props.des_text}</div>
        <div className={this.props.price}>{this.props.p}</div>
        <div>
          <li>
            <a href={this.props.linkUrl}>{this.props.linkName}</a>
          </li>
        </div>
      </div>
    );
  }
}
