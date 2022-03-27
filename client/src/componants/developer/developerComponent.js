import { Component } from "react";
import { Card, CardBody, CardHeader, Collapse, Button } from "reactstrap";

import "./developer.css";
class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: null,
    };
    this.handleOpenCard = this.handleOpenCard.bind(this);
    this.handleCloseCard = this.handleCloseCard.bind(this);
  }
  handleOpenCard(val) {
    this.setState({ activeCard: val });
    this.setState({ collapse: true });
  }
  handleCloseCard() {
    this.setState({ showCard: false });
    this.setState({ showCard: "" });
  }

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
              <Button outline onClick={() => this.toggle}>
                <img
                  src="/images/posts.png"
                  alt="posts"
                  height={400}
                  width={500}
                  onClick={this.handleOpenCard}
                />
              </Button>
            </div>
            <div className="col mt-5">
              <Collapse isOpen={this.state.collapse}>
                <Card className="card">
                  <a href="https://nickspisakposts.netlify.app">
                    <CardBody>
                      <p className="cardText">
                        A responsive post application using React, MongoDB,
                        Express, Node.js. Responsive account creation, as well
                        as Google sign in. Each user can create and delete their
                        own posts. A Like button is currently in development!
                      </p>

                      <p className="cardText">Click to visit!</p>
                    </CardBody>
                  </a>
                </Card>
              </Collapse>
            </div>
            <div className="col-6 mt-5">
              <Collapse isOpen={this.state.collapse}>
                <Card className="card">
                  <a href="https://scrollablesolarsystem.netlify.app/">
                    <CardBody>
                      <p className="cardText">
                        Educational React application that helps teach the large
                        scale of the solar system. The length of scrolling is
                        the same amount of time it takes light to travel. Mobile
                        version and more effecient rendering is in development!
                      </p>

                      <p className="cardText">Click to visit!</p>
                    </CardBody>
                  </a>
                </Card>
              </Collapse>
            </div>
            <div className="col">
              <h1 className="website">Scrollable Solar System</h1>

              <Button outline onClick={this.handleOpenCard}>
                <img
                  src="/images/scrollablesolarsystem.png"
                  alt="scrollable solar system"
                  height={400}
                  width={500}
                />
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="website">SpishStories.com</h1>
              <Button outline onClick={this.handleOpenCard}>
                <img
                  src="/images/spishstories.png"
                  alt="spishstories"
                  height={400}
                  width={500}
                />
              </Button>
            </div>
            <div className="col mt-5">
              <Collapse isOpen={this.state.collapse}>
                <Card className="card">
                  <a href="https://spishstories.com">
                    <CardBody>
                      <p className="cardText">
                        React application which hosts stories I have written.
                        Currently using React, CSS, and HTML. A responsive
                        server is in development for a responsive webcomic
                        reader!
                      </p>

                      <p className="cardText">Click to visit!</p>
                    </CardBody>
                  </a>
                </Card>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Developer;
