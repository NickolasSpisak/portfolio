import { Component } from "react";
// import { faGithub, faAmazon } from "@fortawesome/free-brands-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer mt-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="/images/book.png" height={100} alt="qr-code" />
              <h5>Link to my hit fiction novel "Darkest Side of the Moon"</h5>
              <img src="/images/github.png" height={100} alt="qr-code" />
              <h5>
                Link to my Github where all these projects and many more are
                hosted
              </h5>
            </div>
            <div className="col">
              <h2>QR Codes to my works created simply in Python</h2>
              <img src="/images/qr-code.png" alt="python-code" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
