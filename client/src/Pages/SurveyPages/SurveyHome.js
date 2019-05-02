import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Map from "../../Components/Map/Map";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import Geocode from "react-geocode";
const styles = theme => ({
  root: {
    flewGrow: 1,
    position: "relative",
    top: "2em"
  },
  title: {
    color: "#5E5E5E",
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
  titleStraight: {
    color: "#5E5E5E",
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
  button: {
    backgroundColor: "#46A1BA",
    width: "80%",
    color: "#F1F3F3",
    padding: "16px 32px",
    textDecoration: "none",
    fontFamily: "VAGRounded Bold",
    fontSize: "18px",
    marginTop: "3.5em",
    border: "0.4px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "#529aae"
    },
    "&:hover": {
      backgroundColor: "#529aae"
    }
  },
  input: {
    border: "0.3px solid #46A1BA",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #46A1BA",
      outline: "none",
      color: "black"
    },
    width: "75%",
    height: "50px",
    outline: "none",
    position: "relative",
    top: "30px",
    fontSize: "24px"
  },
  address: {
    fontSize: "24px"
  },

  hide: {
    display: "none"
  },
  show: {
    display: "block"
  },
  map: {
    // marginLeft: "30em"
  },
  surveyDiv: {
    marginTop: "-5em"
  },
  buttons: {
    position: "relative",
    top: "-2em"
  }
});

class SurveyHome extends React.Component {
  state = {
    address: "",
    adjust: "No, Change Address",
    button: this.props.classes.show,
    addressHide: this.props.classes.hide
  };

  componentDidMount = () => {
    let address = localStorage.getItem("address");
    this.setState({ address: address });
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  changeAddress = () => {
    if (this.state.adjust === "Update Address") {
      localStorage.setItem("address", this.state.address);
      Geocode.setApiKey("AIzaSyBKdsVgd6BTixezNIdvuRB84M7SA4tC9Bg");

      // Enable or disable logs. Its optional.
      Geocode.enableDebug();
      // Get latidude & longitude from address.
      Geocode.fromAddress(this.state.address).then(
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
    }
    this.setState({ adjust: "Update Address" });
    this.setState({ addressHide: this.props.classes.show });
  };

  setSlide = () => {
    localStorage.setItem("comingFrom", "left");
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const gofoward = props => <Link to="/homesurvey/q1" {...props} />;
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <Grid direction="column" container>
            <Grid item md={1}>
              <p style={{ visibility: "hidden" }}>t</p>
            </Grid>
            <Grid className="country-title" direction="row" container>
              <Grid align="center" item md={12}>
                <Typography className={` ${classes.title} ${classes.address}`}>
                  {this.state.address}
                </Typography>
              </Grid>
              <Grid item md={2} />
              <Grid item md={8} xs={12}>
                <div className={classes.map}>
                  <Map />
                </div>
              </Grid>
              <Grid item md={2} />
              <Grid item md={2} />
              <Grid
                align="center"
                item
                xs={12}
                md={8}
                className={classes.surveyDiv}
              >
                <Grid item md={2}>
                  <p className={classes.hide}>t</p>
                </Grid>
                <div className={classes.root}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid
                        className="spacing"
                        direction="column"
                        container
                        spacing={24}
                      >
                        <Grid
                          className="heading-h2"
                          align="center"
                          item
                          md={12}
                          xs={12}
                        >
                          <Typography
                            variant="h2"
                            color="inherit"
                            className={classes.title}
                          >
                            Is this your home?
                          </Typography>
                          <hr />
                        </Grid>
                        <div className={classes.buttons}>
                          <Grid container direction="row" align="center">
                            <Grid item md={1}>
                              <p className={classes.hide}>t</p>
                            </Grid>
                            <Grid
                              className="get-start-button"
                              item
                              md={10}
                              xs={12}
                            >
                              <SurveyButton
                                variant="contained"
                                color="primary"
                                component={gofoward}
                                onClick={this.setSlide}
                              >
                                Yes, Get Started
                              </SurveyButton>
                            </Grid>
                            <Grid item md={1}>
                              <p className={classes.hide}>t</p>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              xs={12}
                              sm={12}
                              className={this.state.addressHide}
                            >
                              <input
                                className={`${classes.topleftInput} ${
                                  classes.input
                                }`}
                                name="address"
                                type="text"
                                placeholder={this.state.address}
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                onClick={this.addressUpdate}
                              />
                            </Grid>
                            <Grid item md={1}>
                              <p className={classes.hide}>t</p>
                            </Grid>
                            <Grid
                              className="get-start-button"
                              item
                              md={10}
                              xs={12}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                className={`${this.state.button} ${
                                  classes.button
                                }`}
                                onClick={this.changeAddress}
                              >
                                {this.state.adjust}
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </Grid>
                  </SurveyDiv>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Slide>
    );
  }
}

SurveyHome.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SurveyHome);
