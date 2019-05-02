import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  mainDiv: {
    backgroundColor: "#F1F3F3",
    height: "115%",
    boxShadow: "4px 4px 15px grey",
    borderRadius: "1em",
    marginTop: "4em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1em"
    }
  }
});
function SurveyDiv(props) {
  const { classes } = props;
  return <div className={classes.mainDiv}>{props.children}</div>;
}

SurveyDiv.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SurveyDiv);
