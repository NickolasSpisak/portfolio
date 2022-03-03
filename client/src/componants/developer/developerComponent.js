import { Component } from "react";

import "./developer.css";
class Developer extends Component {
  render() {
    return (
      <div className="developer">
        <div className="container ml-4 mr-4">
          <div className="row">
            <div className="col mt-5">
              <h3 className="devText">Web Developer</h3>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5">
              <h1 className="website">SpishStories.com</h1>
              <a href="http://spishstories.com">
                <img
                  className="spishstories"
                  src="/images/spishstories.png"
                  alt="spishstories"
                  height={400}
                  width={500}
                />
              </a>
            </div>
            <div className="col">
              <h1 className="website">Scrollable Solar System</h1>

              <a href="https://scrollablesolarsystem.netlify.app/">
                <img
                  className="spishstories"
                  src="/images/scrollablesolarsystem.png"
                  alt="scrollable solar system"
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
