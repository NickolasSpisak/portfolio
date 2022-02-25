import { Component } from "react";
import { Button } from "reactstrap";
import "./developer.css";
class Developer extends Component {
  render() {
    return (
      <div className="developer">
        <div className="container ml-4 mr-4">
          <div className="row">
            <div className="col">
              <h3>Web Developer</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>SpishStories.com</h1>
              <img
                className="spishstories"
                src="/images/spishstories.png"
                height={400}
                width={500}
              />
            </div>
            <div className="col">
              <h1>Scrollable Solar System</h1>
              <a href="https://scrollablesolarsystem.netlify.app/">
                <img
                  className="spishstories"
                  src="/images/scrollablesolarsystem.png"
                  height={400}
                  width={500}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Developer;
