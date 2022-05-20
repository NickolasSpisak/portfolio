import { Component } from "react";
import "./summary.css";
class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h1 className="whoAmI">Who am I?</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>Next JS</li>
                <li>React Native</li>
                <li>Express API</li>
                <li>Mongoose</li>
                <li>Wordpress</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="col mb-5">
              <p className="text">
                A Web Developer learning through passion and hard work. In under
                one year, while working full time, I enrolled in a coding
                bootcamp. Ever sinse graduating, I have used all my free time
                enhancing and expanding my knowledge even further. I find coding
                to be increadibly similar to my hobby of writing novels. Both
                require a strict syntax aswell as an orderly form of
                composition, but the limitless creativity of the details within
                these rules is what creates art.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
