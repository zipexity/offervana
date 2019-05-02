import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flewGrow: 1
  },
  iframe: {
    height: "100%",
    width: "100%"
  }
});

class HomePage extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return <div className={classes.root} />;
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
