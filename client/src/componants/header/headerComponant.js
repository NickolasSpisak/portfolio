import { Component } from "react";
import { Button } from "reactstrap";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <img
                className="picture"
                src="/images/nick.jpeg"
                height={200}
                width={200}
              />
            </div>
            <div className="col-7 mt-3">
              <h1>Nick Spisak</h1>

              <Button>Placeholder</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
