import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  },
  hide: {
    visibility: "hidden"
  },
  refrigerator: {
    position: "relative",
    right: "0.4em"
  },
  dishwasher: { position: "relative", right: "0.35em" },
  stove: {},
  waterheater: { position: "relative", right: "0.2em" },
  washerdryer: { position: "relative", left: "0.05em" }
});

class KtApplyReplace extends React.Component {
  state = {
    refrigerator: false,
    dishwasher: false,
    stove: false,
    waterheater: false,
    washerdryer: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let refrigerator = localStorage.getItem("refrigerator");
    let dishwasher = localStorage.getItem("dishwasher");
    let stove = localStorage.getItem("stove");
    let waterheater = localStorage.getItem("waterheater");
    let washerdryer = localStorage.getItem("washerdryer");

    if (refrigerator == "true") {
      this.setState({ refrigerator: true });
    } else {
      this.setState({ refrigerator: false });
    }

    if (dishwasher == "true") {
      this.setState({ dishwasher: true });
    } else {
      this.setState({ dishwasher: false });
    }

    if (stove == "true") {
      this.setState({ stove: true });
    } else {
      this.setState({ stove: false });
    }

    if (waterheater == "true") {
      this.setState({ waterheater: true });
    } else {
      this.setState({ waterheater: false });
    }

    if (washerdryer == "true") {
      this.setState({ washerdryer: true });
    } else {
      this.setState({ washerdryer: false });
    }
  };

  localSubmit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("refrigerator", this.state.refrigerator);
    localStorage.setItem("dishwasher", this.state.dishwasher);
    localStorage.setItem("stove", this.state.stove);
    localStorage.setItem("waterheater", this.state.waterheater);
    localStorage.setItem("washerdryer", this.state.washerdryer);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q10" {...props} />;
    const backButton = props => <Link to="/homesurvey/q8" {...props} />;

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
                            <Grid item md={12} xs={12} sm={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                Do any of the following items need to be
                                replaced?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.refrigerator}
                                  onChange={this.onChange("refrigerator")}
                                  value="refrigerator"
                                  className={`${classes.refrigerator} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.hoatext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Refrigerator
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.dishwasher}
                                  onChange={this.onChange("dishwasher")}
                                  value="dishwasher"
                                  className={`${classes.dishwasher} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.agetext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Dishwasher
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.stove}
                                  onChange={this.onChange("stove")}
                                  value="stove"
                                  className={`${classes.stove} ${
                                    classes.checkbox
                                  }`}
                                  fill="white"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.gatedtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Range or Stove
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.waterheater}
                                  onChange={this.onChange("waterheater")}
                                  value="waterheater"
                                  className={`${classes.waterheater} ${
                                    classes.checkbox
                                  }`}
                                  fill="white"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.gatedtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Water Heater
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.washerdryer}
                                  onChange={this.onChange("washerdryer")}
                                  value="washerdryer"
                                  className={`${classes.washerdryer} ${
                                    classes.checkbox
                                  }`}
                                  fill="white"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.gatedtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Washer / Dryer
                                </Typography>
                              }
                            />
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={12}>
                            <SurveyButton
                              size="large"
                              variant="contained"
                              color="primary"
                              onClick={this.localSubmit}
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

KtApplyReplace.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KtApplyReplace);
