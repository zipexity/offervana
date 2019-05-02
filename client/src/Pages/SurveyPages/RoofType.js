import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import flat from "../../Utils/Images/Roof/Flat Roof.jpg";
import shingle from "../../Utils/Images/Roof/Shingle Roof.png";
import tile from "../../Utils/Images/Roof/Tile Roof.jpg";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const styles = theme => ({
  root: {
    flewGrow: 1
  },
  "@keyframes image": {
    from: { height: "12em", width: "15em", zIndex: "1" },
    to: { height: "13em", width: "16em", zIndex: "999999" }
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
  hide: {
    visibility: "hidden"
  },
  image: {
    height: "12em",
    width: "15em",
    zIndex: "1",
    borderRadius: "1em",
    position: "relative",
    "&:hover": {
      margin: "0em",
      animationName: "image",
      animationDuration: "0.2s",
      height: "13em",
      width: "16em",
      zIndex: "999999"
    }
  }
  // other: { marginLeft: "-2.5em" },
  // flat: { marginLeft: "-3.1em" },
  // tile: { marginLeft: "-3.1em" },
  // asphalt: { marginLeft: "-2em" }
});

class RoofType extends React.Component {
  state = {
    q44rooftype: localStorage.getItem("q44rooftype"),
    buttonStatus: true
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.check(name, value);
  };

  check = (name, value) => {
    console.log(value);
    if (value === "Shingle") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Tile") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Flat") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q44rooftype");
    this.check("name", val);
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q44rooftype", this.state.q44rooftype);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q31" {...props} />;
    const backButton = props => <Link to="/homesurvey/q29" {...props} />;
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid direction="column" container spacing={8}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid direction="row" container spacing={8}>
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid direction="column" container spacing={8}>
                        <Grid direction="row" container>
                          <Grid item md={12} xs={12}>
                            <ProgressBarExample />
                          </Grid>
                        </Grid>
                        <Grid item md={12}>
                          <Grid direction="row" container>
                            <Grid item md={1} />
                            <Grid className="backBtn" item md={1}>
                              <BackButton
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={this.goBack}
                                component={backButton}
                              />
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                What Type Of Roof Does Your Home Have?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <Grid item md={12}>
                            <Grid container direction="row">
                              <Grid
                                item
                                md={12}
                                xs={2}
                                className={classes.hide}
                              >
                                t
                              </Grid>
                              <Grid item md={12} xs={6}>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    aria-label="q44rooftype"
                                    name="q44rooftype"
                                    value={this.state.q44rooftype}
                                    onChange={this.handleChange}
                                    row
                                  >
                                    <FormControlLabel
                                      value="Shingle"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            Shingle
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={shingle}
                                          />
                                        </div>
                                      }
                                    />
                                    <FormControlLabel
                                      value="Tile"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            Tile
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={tile}
                                          />
                                        </div>
                                      }
                                    />
                                    <FormControlLabel
                                      value="Flat"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            Flat
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={flat}
                                          />
                                        </div>
                                      }
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid className="get-start-button" item md={4} xs={12}>
                            <SurveyButton
                              size="large"
                              color="primary"
                              variant="contained"
                              disabled={this.state.buttonStatus}
                              onClick={this.setLocal()}
                              component={submitButton}
                            >
                              Next
                            </SurveyButton>
                          </Grid>
                          <Grid item md={4}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </SurveyDiv>
                </Grid>
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      </Slide>
    );
  }
}

RoofType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RoofType);
