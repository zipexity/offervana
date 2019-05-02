import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
    display: "none"
  },
  show: {
    display: "block"
  },
  checkbox: {
    color: "#46A1BB",
    "&:hover": {
      color: "#529aae"
    }
  }
});

class SolarChemFound extends React.Component {
  state = {
    q16solarpanels: false,
    q16foundationIss: false,
    q16chemcontam: false,
    solarowned: false,
    solarleased: false,
    hidden: this.props.classes.hide
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });

    if (name === "q16solarpanels") {
      if (e.target.checked === false) {
        this.setState({ hidden: this.props.classes.hide });
      } else {
        this.setState({ hidden: this.props.classes.show });
      }
    }
  };

  componentDidMount = () => {
    let solar = localStorage.getItem("q16solarpanels");
    let foundation = localStorage.getItem("q16foundationIss");
    let chem = localStorage.getItem("q16chemcontam");
    let leased = localStorage.getItem("solarleased");
    let owned = localStorage.getItem("solarowned");

    if (solar == "true") {
      this.setState({ q16solarpanels: true });
    } else {
      this.setState({ q16solarpanels: false });
    }

    if (foundation == "true") {
      this.setState({ q16foundationIss: true });
    } else {
      this.setState({ q16foundationIss: false });
    }

    if (chem == "true") {
      this.setState({ q16chemcontam: true });
    } else {
      this.setState({ q16chemcontam: false });
    }

    if (leased == "true") {
      this.setState({ solarleased: true });
      this.setState({ hidden: this.props.classes.show });
    } else {
      this.setState({ solarleased: false });
    }

    if (owned == "true") {
      this.setState({ solarowned: true });
      this.setState({ hidden: this.props.classes.show });
    } else {
      this.setState({ solarowned: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q16solarpanels", this.state.q16solarpanels);
    localStorage.setItem("q16foundationIss", this.state.q16foundationIss);
    localStorage.setItem("q16chemcontam", this.state.q16chemcontam);
    localStorage.setItem("solarowned", this.state.solarowned);
    localStorage.setItem("solarleased", this.state.solarleased);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q6" {...props} />;
    const backButton = props => <Link to="/homesurvey/q4" {...props} />;
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
                <Grid item xs={12} sm={12} md={8}>
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
                                Select all that apply
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid container direction="row" align="center">
                          <Grid
                            item
                            md={12}
                            xs={12}
                            className={classes.checkGrid}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q16solarpanels}
                                  onChange={this.onChange("q16solarpanels")}
                                  value="q16solarpanels"
                                  color="primary"
                                  className={`${classes.solar} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.titleStraight}`}
                                >
                                  Solar Panels
                                </Typography>
                              }
                            />
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid item md={4} xs={3} />
                          <Grid
                            item
                            md={2}
                            xs={3}
                            className={this.state.hidden}
                            align="center"
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.solarowned}
                                  onChange={this.onChange("solarowned")}
                                  value="solarowned"
                                  color="primary"
                                  className={`${classes.solarOwned} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.ownedtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Owned
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={1}
                            xs={1}
                            className={this.state.hidden}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.solarleased}
                                  onChange={this.onChange("solarleased")}
                                  value="solarleased"
                                  color="primary"
                                  className={`${classes.solarLeased} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.leasedtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Leased
                                </Typography>
                              }
                            />
                          </Grid>
                        </Grid>
                        <Grid item md={12} xs={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.q16chemcontam}
                                onChange={this.onChange("q16chemcontam")}
                                value="q16chemcontam"
                                color="primary"
                                className={`${classes.chem} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.chemcontamtext} ${
                                  classes.titleStraight
                                }`}
                              >
                                Chemical Contamination
                              </Typography>
                            }
                          />
                        </Grid>
                        <Grid item md={12} xs={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.q16foundationIss}
                                onChange={this.onChange("q16foundationIss")}
                                value="q16foundationIss"
                                color="primary"
                                className={`${classes.found} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.foundationtext} ${
                                  classes.titleStraight
                                }`}
                              >
                                Foundation Issues
                              </Typography>
                            }
                          />
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid
                            className="get-start-button"
                            item
                            md={4}
                            xs={12}
                          >
                            <SurveyButton
                              size="large"
                              color="primary"
                              variant="contained"
                              onClick={this.setLocal}
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

SolarChemFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SolarChemFound);
