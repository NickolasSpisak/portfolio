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
              <h1 className="website">Posts App</h1>
              <a href="https://nickspisakposts.netlify.app">
                <img
                  className="spishstories"
                  src="/images/posts.png"
                  alt="posts"
                  height={400}
                  width={500}
                />
              </a>
            </div>
            <div className="col mt-5">
              <p className="text">
                A responsive post application using React, MongoDB, Express,
                Node.js. Responsive account creation, as well as Google sign in.
                Each user can create and delete their own posts. A Like button
                is currently in development!
              </p>
            </div>
            <div className="col-6 mt-5">
              <p className="text">
                Educational React application that helps teach the large scale
                of the solar system. The length of scrolling is the same amount
                of time it takes light to travel. Mobile version and more
                effecient rendering is in development!
              </p>
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
          <div className="row">
            <div className="col">
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
            <div className="col mt-5">
              <p className="text">
                React application which hosts stories I have written. Currently
                using React, CSS, and HTML. A responsive server is in
                development for a responsive webcomic reader!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Developer;
