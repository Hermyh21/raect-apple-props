import React, { Component } from "react";
import Navlinks from "./navLinks";
import search from "./../../resources/images/icons/search-icon-sm.png";
import cart from "../../resources/images/icons/cart-sm.png";
import logo from "../../resources/images/icons/logo-sm.png";
export default class nav extends Component {
  render() {
    return (
      <div class="nav-wrapper fixed-top">
        <div class="container">
          <nav class="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <a className="navbar-brand mx-auto" href="#">
              <img src={logo} />
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <Navlinks navUrl="/mac" navName="Mac" />
                <Navlinks navUrl="/iphone" navName="iphone" />
                <Navlinks navUrl="/ipad" navName="ipad" />
                <Navlinks navUrl="/watch" navName="Watch" />
                <Navlinks navUrl="/tv" navName="Tv" />
                <Navlinks navUrl="/music" navName="Music" />
                <Navlinks navUrl="/support" navName="Support" />
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <img src={search} />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
