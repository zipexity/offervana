import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
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
    visibility: "hidden"
  },
  popcorn: {
    position: "relative",
    right: "1.5em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  twoinch: {
    position: "relative",
    left: "3.17em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  vaulted: {
    position: "relative",
    right: "1.63em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  crown: {
    position: "relative",
    left: "3.6em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  eightfeet: {
    position: "relative",
    right: "2.23em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  tenfeet: {
    position: "relative",
    left: "3.3em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  plantation: {
    position: "relative",
    right: "1.35em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  recessed: {
    position: "relative",
    left: "4.45em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },

  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  },

  recesstext: {
    position: "relative",
    left: "8em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  planttext: {
    position: "relative",
    right: "2em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  tentext: {
    position: "relative",
    left: "6em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  eighttext: {
    position: "relative",
    right: "3.5em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  crowntext: {
    position: "relative",
    left: "6.5em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  vaulttext: {
    position: "relative",
    right: "2.5em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  twotext: {
    position: "relative",
    left: "5.8em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  popcorntext: {
    position: "relative",
    right: "2.2em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  }
});

class HomeExtras extends React.Component {
  state = {
    q41crownmold: false,
    q41vaultedceil: false,
    q41tenfeetceil: false,
    q41eightfeetdoor: false,
    q41recesseddoor: false,
    q41plantationshutter: false,
    q41twoinchblind: false,
    q14popcornceil: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let crown = localStorage.getItem("q41crownmold");
    let ceil = localStorage.getItem("q41vaultedceil");
    let tenCeil = localStorage.getItem("q41tenfeetceil");
    let eightDoor = localStorage.getItem("q41eightfeetdoor");
    let recesDoor = localStorage.getItem("q41recesseddoor");
    let plantShut = localStorage.getItem("q41plantationshutter");
    let twoBlind = localStorage.getItem("q41twoinchblind");
    let popcorn = localStorage.getItem("q14popcornceil");

    if (crown == "true") {
      this.setState({ q41crownmold: true });
    } else {
      this.setState({ q41crownmold: false });
    }

    if (ceil == "true") {
      this.setState({ q41vaultedceil: true });
    } else {
      this.setState({ q41vaultedceil: false });
    }

    if (tenCeil == "true") {
      this.setState({ q41tenfeetceil: true });
    } else {
      this.setState({ q41tenfeetceil: false });
    }

    if (eightDoor == "true") {
      this.setState({ q41eightfeetdoor: true });
    } else {
      this.setState({ q41eightfeetdoor: false });
    }

    if (recesDoor == "true") {
      this.setState({ q41recesseddoor: true });
    } else {
      this.setState({ q41recesseddoor: false });
    }

    if (plantShut == "true") {
      this.setState({ q41plantationshutter: true });
    } else {
      this.setState({ q41plantationshutter: false });
    }

    if (twoBlind == "true") {
      this.setState({ q41twoinchblind: true });
    } else {
      this.setState({ q41twoinchblind: false });
    }

    if (popcorn == "true") {
      this.setState({ q14popcornceil: true });
    } else {
      this.setState({ q14popcornceil: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q41crownmold", this.state.q41crownmold);
    localStorage.setItem("q41vaultedceil", this.state.q41vaultedceil);
    localStorage.setItem("q41tenfeetceil", this.state.q41tenfeetceil);
    localStorage.setItem("q41eightfeetdoor", this.state.q41eightfeetdoor);
    localStorage.setItem("q41recesseddoor", this.state.q41recesseddoor);
    localStorage.setItem(
      "q41plantationshutter",
      this.state.q41plantationshutter
    );
    localStorage.setItem("q41twoinchblind", this.state.q41twoinchblind);
    localStorage.setItem("q14popcornceil", this.state.q14popcornceil);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q30" {...props} />;
    const backButton = props => <Link to="/homesurvey/q28" {...props} />;
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
                                Select all that apply
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41recesseddoor}
                                  onChange={this.onChange("q41recesseddoor")}
                                  value="q41recesseddoor"
                                  color="primary"
                                  className={`${classes.recessed} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.recesstext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Recessed Interior Doors
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41plantationshutter}
                                  onChange={this.onChange(
                                    "q41plantationshutter"
                                  )}
                                  value="q41plantationshutter"
                                  color="primary"
                                  className={`${classes.plantation} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.planttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Plantation Shutters
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41tenfeetceil}
                                  onChange={this.onChange("q41tenfeetceil")}
                                  value="q41tenfeetceil"
                                  color="primary"
                                  className={`${classes.tenfeet} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.tentext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  10FT+ Ceilings
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41eightfeetdoor}
                                  onChange={this.onChange("q41eightfeetdoor")}
                                  value="q41eightfeetdoor"
                                  color="primary"
                                  className={`${classes.eightfeet} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.eighttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  8FT+ Doors
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41crownmold}
                                  onChange={this.onChange("q41crownmold")}
                                  value="q41crownmold"
                                  color="primary"
                                  className={`${classes.crown} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.crowntext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Crown Moldings
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41vaultedceil}
                                  onChange={this.onChange("q41vaultedceil")}
                                  value="q41vaultedceil"
                                  color="primary"
                                  className={`${classes.vaulted} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.vaulttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Vaulted Ceilings
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q41twoinchblind}
                                  onChange={this.onChange("q41twoinchblind")}
                                  value="q41twoinchblind"
                                  color="primary"
                                  className={`${classes.twoinch} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.twotext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  2-Inch Blinds
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={4} xs={4}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q14popcornceil}
                                  onChange={this.onChange("q14popcornceil")}
                                  value="q14popcornceil"
                                  color="primary"
                                  className={`${classes.popcorn} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.popcorntext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Popcorn Ceilings
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={2} xs={2}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={2}>
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

HomeExtras.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeExtras);
