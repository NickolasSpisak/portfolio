import { Component } from "react";
import { faGithub, faAmazon } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faGithub} />
            <a href="https://github.com/NickolasSpisak">My Github</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FontAwesomeIcon icon={faAmazon} />
            <a href="https://www.amazon.com/Darkest-Side-Moon-Nick-Spisak/dp/1984543598">
              Darkest Side of the Moon
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
