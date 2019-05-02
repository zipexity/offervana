import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import marker from "../../Utils/Images/marker.png";

const K_WIDTH = 80;
const K_HEIGHT = 80;

const styles = theme => ({
  container: {
    overflow: "hidden",
    position: "absolute",
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
function MapMarker(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <img className={classes.img} src={marker} />
    </div>
  );
}

MapMarker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MapMarker);
