import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/fontawesome-free-regular";
import hey from "../../Utils/Images/footer/Offervanalogo.png";
import house from "../../Utils/Images/footer/house.png";
import rab from "../../Utils/Images/footer/rab.png";
import AddressbarFooter from "../../Components/AddressbarFooter/AddressbarFooter";
import "./homepage.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer-outer">
      <div className="footer">
        <div className="container">
          <div className="Footer-top">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 co-lg-3 col-xl-3">
                <div className="Footer-left">
                  <img src={hey} />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 co-lg-6 col-xl-6">
                <div className="follow_us">
                  <a href="#" className="follow-link">
                    Follow us & Contact us , We're Here to help
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-3 co-lg-3 col-xl-3">
                <div className="Footer-right-icons d-flex">
                  <ul className="mx-auto justify-content-center">
                    <li>
                      <FontAwesomeIcon icon={faFacebook} />{" "}
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faTwitter} />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faInstagram} />
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon icon={faAddressBook} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/aboutUs" className="links">
                  About Us
                </a>
              </li>
              <li>
                <a href="/faq" className="links">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-search">
            <div className="Serchbar-box">
              {/* <input
                type="text"
                className="form-control"
                Placeholder="Enter Property Address"
              /> */}
              <AddressbarFooter />
              {/* <a href="#" className="submit-btn">
                {" "}
                Get Offer{" "}
              </a> */}
            </div>
          </div>
          <div className="Footer-bottom">
            <ul>
              <li className="Pwderd-by">Offervana is Powered by</li>
              <li className="House-by">
                {" "}
                <img src={house} />
              </li>
              <li className="terms-condition">Terms of use and privacy</li>
              <li className="sponserd-by">
                {" "}
                <span>
                  <img src={rab} />
                </span>{" "}
                <span>
                  <img src={house} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;
