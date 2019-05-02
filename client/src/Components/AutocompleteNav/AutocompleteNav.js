/* global google */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  addressBar: {
    border: "0.3px solid #F1F3F3",
    fontFamily: "VAGRounded",
    color: "black",
    "&:focus": {
      outline: "none"
    },
    width: "100%",
    padding: "18px",
    top: "-10px",
    zIndex: "2",
    position: "relative"
    // [theme.breakpoints.up("xs")]: {
    //   width: "60%",
    //   padding: "15px",
    //   top: "36.34em",
    //   left: "-4.5em"
    // }
  }
});

class AutocompleteNav extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  state = {
    address: ""
  };

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  }

  render() {
    const { classes } = this.props;
    return (
      <input
        className={classes.addressBar}
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="text"
        name="address"
      />
    );
  }
}

AutocompleteNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AutocompleteNav);
