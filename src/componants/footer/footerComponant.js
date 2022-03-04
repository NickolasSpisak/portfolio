import { Component } from "react";
import { faGithub, faAmazon } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/NickolasSpisak">
                <Button>My Github</Button>
              </a>
            </div>

            <div className="col mt-5">
              <FontAwesomeIcon icon={faAmazon} />
              <a href="https://www.amazon.com/Darkest-Side-Moon-Nick-Spisak/dp/1984543598">
                <Button>Darkest Side of the Moon</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
