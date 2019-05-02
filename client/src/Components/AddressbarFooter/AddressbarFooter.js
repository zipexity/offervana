/* global google */
import React, { Component } from "react";
import { render } from "react-dom";
import AutocompleteFooter from "../AutocompleteFooter/AutocompleteFooter";
/* global google */

import Geocode from "react-geocode";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import "./addressfooter.css";

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
    position: "relative",
    width: "35%",
    padding: "6px",
    top: "-1px !important",
    zIndex: "4",
    [theme.breakpoints.down("xs")]: {
      width: "50%"
    }
  },
  loginIcon: {
    // backgroundColor: "black",
    backgroundColor: "#46A1BA",
    fontFamily: "Arial Rounded MT Bold",
    textDecoration: "none",
    cursor: "pointer",
    borderColor: "#46A1BA",
    color: "#F1F3F3",
    borderRadius: "0.2em",
    padding: "4px",
    top: "-65px",
    left: "8em",
    height: "50px",
    width: "50px",
    zIndex: "4",
    position: "relative",
    fontSize: "32px"
    // [theme.breakpoints.up("xs")]: {
    //   width: "35%",
    //   padding: "11px",
    //   top: "19.77em",
    //   left: "6em"
    // }
  }
});

class AddressbarFooter extends Component {
  state = {
    place: {},
    button: ""
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
        <div>
          <AutocompleteFooter
            onPlaceChanged={this.showPlaceDetails.bind(this)}
          />
          <div className="iconbuttonBackground">
            <Search className="loginIcon" onClick={this.submitAddress} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <AutocompleteFooter
            onPlaceChanged={this.showPlaceDetails.bind(this)}
          />
          <input
            className={`submit-btn loginButton`}
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
    console.log(this.state.button);
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

AddressbarFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressbarFooter);
