import React from "react";
import "./aboutus.css";
import five from "../../Utils/Images/AboutUs/five.jpg";
import six from "../../Utils/Images/AboutUs/six.jpg";
import seven from "../../Utils/Images/AboutUs/seven.jpg";
import eight from "../../Utils/Images/AboutUs/eight.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../HomePage/footer";

class About extends React.Component {
  render() {
    return (
      
      <div class="aboutUs">
      <div className="inner-about-us">
        <div class="container" style={{ marginTop: 100 }}>
       
          <div class="row">
            <ul class="grid circle-style style-1">
              <li>
                <figure>
                  <div class="awsm-grid-holder">
                    <img src={five} alt="img05" />
                    <figcaption>
                      <div class="awsm-personal-info">
                        <h3>Robert Kyle</h3>
                        <span>Creative Director</span>
                      </div>
                      <div class="awsm-contact-info">
                        <p>
                          Excepteur et dolore proident, officia coniunctione est
                          incididunt, labore deserunt admodum, hic noster esse
                          quo
                        </p>
                        <ul class="awsm-social-icons">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebook} />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </li>
              <li>
                <figure>
                  <div class="awsm-grid-holder">
                    <img src={six} alt="img06" />
                    <figcaption>
                      <div class="awsm-personal-info">
                        <h3>Victoria Max</h3>
                        <span>Sales Manager</span>
                      </div>
                      <div class="awsm-contact-info">
                        <p>
                          Excepteur et dolore proident, officia coniunctione est
                          incididunt, labore deserunt admodum.
                        </p>
                        <ul class="awsm-social-icons">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebook} />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </li>
              <li>
                <figure>
                  <div class="awsm-grid-holder">
                    <img src={seven} alt="img07" />
                    <figcaption>
                      <div class="awsm-personal-info">
                        <h3>Savannah Nate</h3>
                        <span>Accounts</span>
                      </div>
                      <div class="awsm-contact-info">
                        <p>
                          Excepteur et dolore proident, officia coniunctione est
                          incididunt, labore deserunt admodum.
                        </p>
                        <ul class="awsm-social-icons">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebook} />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </li>
              <li>
                <figure>
                  <div class="awsm-grid-holder">
                    <img src={eight} alt="img08" />
                    <figcaption>
                      <div class="awsm-personal-info">
                        <h3>Caroline Kennedy</h3>
                        <span>Support Manager</span>
                      </div>
                      <div class="awsm-contact-info">
                        <p>
                          Excepteur et dolore proident, officia coniunctione est
                          incididunt, labore deserunt admodum, hic noster esse
                          quo
                        </p>
                        <ul class="awsm-social-icons">
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faFacebook} />{" "}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faTwitter} />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
