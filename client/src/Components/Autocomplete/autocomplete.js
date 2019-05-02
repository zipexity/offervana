/* global google */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  addressBar: {
    border: "0.3px solid #F1F3F3",
    boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
    fontFamily: "VAGRounded",
    fontSize: "24px",
    "&:focus": {
      outline: "none"
    },
    width: "96%",
    padding: "15px",
    top: "1em",
    left: "0em",
    zIndex: "2",
    position: "relative",
    borderRadius: "0.5em"
    // [theme.breakpoints.up("xs")]: {
    //   width: "60%",
    //   padding: "15px",
    //   top: "36.34em",
    //   left: "-4.5em"
    // }
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
        className={classes.addressBar}
        ref={this.autocompleteInput}
        id="autocomplete"
        placeholder="Submit Your Home Free No Obligation"
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
