import React, { Component } from "react";

export default class navLinks extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.navUrl}>
          {this.props.navName}
        </a>
      </li>
    );
  }
}
