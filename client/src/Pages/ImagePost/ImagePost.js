import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver";

const styles = theme => ({
  root: {
    flewGrow: 1
  },
  mainDiv: {
    backgroundColor: "#e3e3e3",
    height: "240%",
    boxShadow: "4px 4px 15px grey"
  },
  title: {
    color: "black",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  form: {
    marginTop: "5em"
  },
  Button: {
    backgroundColor: theme.palette.primary,
    width: "65%",
    color: "white",
    padding: "16px 32px",
    textDecoration: "none",
    margin: "4px 2px",
    border: "0.4px solid white",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      border: "0.5px solid"
    },
    boxShadow: "2px 2px 5px grey"
  },
  hide: {
    visibility: "hidden"
  }
});

class ImagePost extends React.Component {
  fileUpload = e => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} enctype="multipart/form-data">
        <input type="file" name="image" />
        <button onClick={this.fileUpload} />
      </form>
    );
  }
}

ImagePost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImagePost);
