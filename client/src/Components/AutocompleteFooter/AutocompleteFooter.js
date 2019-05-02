/* global google */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  addressBar: {
    backgroundColor: "white !important",
    border: "0.3px solid #F1F3F3 !important",
    fontFamily: "VAGRounded !important",
    color: "black !important",
    "&:focus": {
      outline: "none !important"
    },
    width: "100% !important",
    padding: "18px !important",
    top: "-10px !important",
    zIndex: "2 !important",
    position: "relative !important",
    opacity: "1 !important",
    borderRadius: "2em"
  }
});

class Autocomplete extends React.Component {
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
        className={`${classes.addressBar}`}
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Enter your address"
        type="text"
        name="address"
      />
    );
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Autocomplete);
