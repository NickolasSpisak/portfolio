import { Component } from "react";
import "./summary.css";
class Summary extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h3>Who am I?</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <span />
          </div>
          <div className="col">
            <p>Placeholder Text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
