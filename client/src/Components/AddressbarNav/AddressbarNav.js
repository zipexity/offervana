/* global google */
import React, { Component } from "react";
import { render } from "react-dom";
import AutocompleteNav from "../AutocompleteNav/AutocompleteNav";
/* global google */

import Geocode from "react-geocode";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Search from "@material-ui/icons/Search";
import "../../Pages/HomePage/homepage.css";

const styles = theme => ({
  loginButton: {
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

class AddressbarNav extends Component {
  state = {
    place: {}
  };

  showPlaceDetails(place) {
    this.setState({ place });
  }

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

  render() {
    const { classes } = this.props;
    // const AddressDetails = props => {
    //   return (
    //     <div>
    //       <pre>{JSON.stringify(props.place, null, 2)}</pre>
    //     </div>
    //   );
    // };

    return (
      <div class="searchbar" id="searchBar">
        <AutocompleteNav onPlaceChanged={this.showPlaceDetails.bind(this)} />
        <Search className={classes.loginButton} onClick={this.submitAddress} />
        {/* <AddressDetails place={this.state.place} /> */}
      </div>
    );
  }
}

AddressbarNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddressbarNav);
