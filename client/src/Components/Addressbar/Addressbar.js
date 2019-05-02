/* global google */
import React, { Component } from "react";
import { render } from "react-dom";
import Autocomplete from "../Autocomplete/autocomplete";
/* global google */

import Geocode from "react-geocode";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import CashIcon from "@material-ui/icons/AttachMoney";
import "../../Pages/HomePage/homepage.css";
import Search from "@material-ui/icons/Search";

const styles = theme => ({
  loginButton: {
    backgroundColor: "#46A1BB",
    color: "#F1F3F3",
    fontFamily: "Arial Rounded MT Bold",
    textDecoration: "none",
    fontSize: "28px",
    cursor: "pointer",
    borderRadius: "0.3em",
    borderColor: "#46A1BB",
    "&:focus": {
      backgroundColor: "#46A1BB"
    },
    "&:hover": {
      backgroundColor: "#46A1BB"
    },
    width: "30%",
    padding: "6px",
    top: "-34px",
    left: "32%",
    zIndex: "4",
    position: "relative",
    // [theme.breakpoints.down("lg")]: {
    //   left: "260px"
    // },
    [theme.breakpoints.down("xs")]: {
      top: "-38px"
    }
  },
  loginIcon: {
    backgroundColor: "#46a1ba",
    textDecoration: "none",
    cursor: "pointer",
    borderColor: "#46a1ba",
    color: "#f1f3f3",
    borderRadius: "0.2em",
    position: "relative",
    zIndex: "4",
    padding: "6px",
    width: "100%",
    height: "100%"
  },

  iconbuttonBackground: {
    position: "relative",
    top: "-41px",
    left: "150px",
    backgroundColor: "#46a1ba",
    height: "60px",
    width: "60px",
    zIndex: "3",
    borderRadius: "0.5em"
  }
});

class Addressbar extends Component {
  state = {
    place: {}
  };

  showPlaceDetails(place) {
    this.setState({ place });
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.saveSize());
  };

  saveSize = () => {
    this.setState({ screen: window.innerWidth });
  };

  submitAddress = e => {
    e.preventDefault();
    localStorage.setItem("address", this.state.place.formatted_address);

    Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_PLACE_API_KEY || 'AIzaSyBKdsVgd6BTixezNIdvuRB84M7SA4tC9Bg'}`);

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();
    // Get latidude & longitude from address.
    Geocode.fromAddress(this.state.place.formatted_address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        localStorage.setItem("lat", lat);
        localStorage.setItem("lng", lng);
        window.location.replace("/abouthome");
      },
      error => {
        console.error(error);
      }
    );
  };

  showButton = () => {
    if (window.innerWidth <= 600) {
      return (
        <div className="address-bar">
          <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
          <div className={this.props.classes.iconbuttonBackground}>
            <Search
              className={this.props.classes.loginIcon}
              onClick={this.submitAddress}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="address-bar">
          <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
          <input
            className={`submit-btn ${this.props.classes.loginButton}`}
            onClick={this.submitAddress}
            type="submit"
            value="Get Offers"
          />
        </div>
      );
    }
  };

  render() {
    const { classes } = this.props;
    // const AddressDetails = props => {
    //   return (
    //     <div>
    //       <pre>{JSON.stringify(props.place, null, 2)}</pre>
    //     </div>
    //   );
    // };

    return <div>{this.showButton()}</div>;
  }
}

Addressbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Addressbar);
