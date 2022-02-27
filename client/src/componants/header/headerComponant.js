import { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col mt-4 mb-4">
              <img
                className="picture"
                src="/images/nick.jpeg"
                alt="picture of myself"
                height={200}
                width={200}
              />
            </div>
            <div className="col-7 mt-5">
              <h1 className="name">Nick Spisak</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
