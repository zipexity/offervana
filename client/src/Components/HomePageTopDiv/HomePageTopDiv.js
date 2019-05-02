import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import click from "../../Utils/Images/homepage/click.png";
import list from "../../Utils/Images/homepage/list.png";
import cash from "../../Utils/Images/homepage/cash.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
const styles = theme => ({
  upperSection: {
    marginTop: "1em"
  },
  submit: {
    width: "250px",
    height: "250px"
  },
  imgContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0",
    left: "0",
    zIndex: "99"
  },
  Typography: {
    color: "#36454f",
    fontFamily: [
      "VAGRounded Bold",
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
  TypographyStraight: {
    color: "#5E5E5E",
    // fontSize: "20px",
    fontFamily: [
      "VAGRounded",
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
  oneTwoThree: {
    fontSize: "20px"
  }
});

function HomePageTopDiv(props) {
  const { classes } = props;
  return (
    <div className={classes.upperSection}>
      <Grid container direction="row">
        <Grid item md={4} sm={4} xs={12}>
          <div className={`home-box ${classes.submit}`}>
            <img
              src={click}
              className={`home-images ${classes.imgContainer}`}
            />
          </div>
          <Typography className={classes.Typography} variant="h5">
            Submit
          </Typography>
          <Typography
            className={`pera ${classes.TypographyStraight} ${
              classes.oneTwoThree
            }`}
          >
            Complete your Home Survey and get all your iBuyer offers in one
            place.
          </Typography>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <div className={`home-box ${classes.submit}`}>
            <img src={list} className={`home-images ${classes.imgContainer}`} />
          </div>
          <Typography className={classes.Typography} variant="h5">
            Select
          </Typography>
          <Typography
            className={`pera ${classes.TypographyStraight} ${
              classes.oneTwoThree
            }`}
          >
            Easily review and choose the offer that's best for you with
            Offervana's Proprietary Multioffer Platform.
          </Typography>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <div className={`home-box ${classes.submit}`}>
            <img src={cash} className={`home-images ${classes.imgContainer}`} />
          </div>
          <Typography className={classes.Typography} variant="h5">
            Sell
          </Typography>
          <Typography
            className={`pera ${classes.TypographyStraight} ${
              classes.oneTwoThree
            }`}
          >
            It's simple, your terms your way.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

HomePageTopDiv.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePageTopDiv);
