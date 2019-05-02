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
  hide: {
    visibility: "hidden"
  },

  sport: {
    position: "relative"
  },
  fire: { position: "relative", right: "1.15em" },
  pavers: { position: "relative", left: "-1em" },
  rv: { position: "relative", right: "0.8em" },
  patio: { position: "relative" },
  bbq: { position: "relative" },
  sprinklers: { position: "relative" },
  gazebo: { position: "relative" },
  paverstext: {
    position: "relative",
    right: "24px"
  },
  rvtext: {
    position: "relative",
    right: "20px"
  },
  firetext: {
    position: "relative",
    right: "28px"
  }
});

class ExtraYard extends React.Component {
  state = {
    q34firepit: false,
    q34rvgate: false,
    q34coveredPatio: false,
    q34bbq: false,
    q34pavers: false,
    q34sprinklers: false,
    q34gazebo: false,
    q34sportCourt: false,
    q34none: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let fire = localStorage.getItem("q34firepit");
    let rv = localStorage.getItem("q34rvgate");
    let patio = localStorage.getItem("q34coveredPatio");
    let barb = localStorage.getItem("q34bbq");
    let pave = localStorage.getItem("q34pavers");
    let sprink = localStorage.getItem("q34sprinklers");
    let gaze = localStorage.getItem("q34gazebo");
    let sport = localStorage.getItem("q34sportCourt");
    let non = localStorage.getItem("q34none");

    if (fire == "true") {
      this.setState({ q34firepit: true });
    } else {
      this.setState({ q34firepit: false });
    }

    if (rv == "true") {
      this.setState({ q34rvgate: true });
    } else {
      this.setState({ q34rvgate: false });
    }

    if (patio == "true") {
      this.setState({ q34coveredPatio: true });
    } else {
      this.setState({ q34coveredPatio: false });
    }

    if (barb == "true") {
      this.setState({ q34bbq: true });
    } else {
      this.setState({ q34bbq: false });
    }

    if (pave == "true") {
      this.setState({ q34pavers: true });
    } else {
      this.setState({ q34pavers: false });
    }

    if (sprink == "true") {
      this.setState({ q34sprinklers: true });
    } else {
      this.setState({ q34sprinklers: false });
    }

    if (gaze == "true") {
      this.setState({ q34gazebo: true });
    } else {
      this.setState({ q34gazebo: false });
    }

    if (sport == "true") {
      this.setState({ q34sportCourt: true });
    } else {
      this.setState({ q34sportCourt: false });
    }

    if (non == "true") {
      this.setState({ q34none: true });
    } else {
      this.setState({ q34none: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q34firepit", this.state.q34firepit);
    localStorage.setItem("q34rvgate", this.state.q34rvgate);
    localStorage.setItem("q34coveredPatio", this.state.q34coveredPatio);
    localStorage.setItem("q34bbq", this.state.q34bbq);
    localStorage.setItem("q34pavers", this.state.q34pavers);
    localStorage.setItem("q34sprinklers", this.state.q34sprinklers);
    localStorage.setItem("q34gazebo", this.state.q34gazebo);
    localStorage.setItem("q34sportCourt", this.state.q34sportCourt);
    localStorage.setItem("q34none", this.state.q34none);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q20" {...props} />;
    const backButton = props => <Link to="/homesurvey/q18" {...props} />;
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
                                Does your backyard have any of the following?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid item md={6} xs={6} align="right">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34rvgate}
                                  onChange={this.onChange("q34rvgate")}
                                  value="q34rvgate"
                                  color="primary"
                                  className={`${classes.rv} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.rvtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Rv Gate
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="left">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34sprinklers}
                                  onChange={this.onChange("q34sprinklers")}
                                  value="q34sprinklers"
                                  color="primary"
                                  className={`${classes.sprinklers} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.sprinktext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Sprinklers/Drip System
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="right">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34sportCourt}
                                  onChange={this.onChange("q34sportCourt")}
                                  value="q34sportCourt"
                                  color="primary"
                                  className={`${classes.sport} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.sporttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Sport Court
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="left">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34bbq}
                                  onChange={this.onChange("q34bbq")}
                                  value="q34bbq"
                                  color="primary"
                                  className={`${classes.bbq} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.bbqtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Built-In BBQ
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="right">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34pavers}
                                  onChange={this.onChange("q34pavers")}
                                  value="q34pavers"
                                  color="primary"
                                  className={`${classes.pavers} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <div>
                                  <Typography
                                    className={`${classes.paverstext} ${
                                      classes.titleStraight
                                    }`}
                                  >
                                    Pavers
                                  </Typography>
                                </div>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="left">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34gazebo}
                                  onChange={this.onChange("q34gazebo")}
                                  value="q34gazebo"
                                  color="primary"
                                  className={`${classes.gazebo} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.ramatext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Ramada/Gazebo
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="right">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34firepit}
                                  onChange={this.onChange("q34firepit")}
                                  value="firpit"
                                  color="primary"
                                  className={`${classes.fire} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.firetext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Firepit
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={6} xs={6} align="left">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q34coveredPatio}
                                  onChange={this.onChange("q34coveredPatio")}
                                  value="q34coveredPatio"
                                  color="primary"
                                  className={`${classes.patio} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.patiotext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Covered Patio
                                </Typography>
                              }
                            />
                          </Grid>
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

ExtraYard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExtraYard);
