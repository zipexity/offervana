import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import mop from "../../Utils/Images/MOP.pdf";
const styles = theme => ({
  imgHold: {
    width: "100%",
    overflow: "hidden",
    height: "60em"
  }
});
function MOPpdf(props) {
  const { classes } = props;
  return (
    <div className={classes.imgHold}>
      <embed
        src={mop + "#toolbar=0&navpanes=0&scrollbar=0"}
        width="100%"
        height="100%"
      />
    </div>
  );
}

MOPpdf.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MOPpdf);
