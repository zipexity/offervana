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
  none: { position: "relative", right: "0.7em", width: "200px" },
  dirt: { position: "relative", right: "0.7em", width: "200px" },
  gravel: { position: "relative", left: "0.9em", width: "250px" },
  green: { position: "relative", right: "0.7em", width: "200px" },
  sparse: { position: "relative", right: "0.7em", width: "200px" }
});

class FrontLandScape extends React.Component {
  state = {
    q29frontyard: localStorage.getItem("q29frontyard"),
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
    if (value === "noLandscape") {
      this.setState({ buttonStatus: false });
    }
    if (value === "dirtGreenery") {
      this.setState({ buttonStatus: false });
    }
    if (value === "sparseLandscaping") {
      this.setState({ buttonStatus: false });
    }
    if (value === "dirtGravelShurbs") {
      this.setState({ buttonStatus: false });
    }
    if (value === "lushGreens") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q29frontyard");
    this.check("name", val);
  };

  submitAnswers = () => {
    localStorage.setItem("q29frontyard", this.state.q29frontyard);
    localStorage.setItem("comingFrom", "left");
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q16" {...props} />;
    const backButton = props => <Link to="/homesurvey/q14" {...props} />;
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
                          <Grid item md={12} xs={12} sm={12}>
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
                                Front yard landscaping
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="q29frontyard"
                              name="q29frontyard"
                              value={this.state.q29frontyard}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="noLandscape"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    No Landscaping
                                  </Typography>
                                }
                                className={classes.none}
                              />
                              <FormControlLabel
                                value="dirtGreenery"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Dirt Yard With Greenery
                                  </Typography>
                                }
                                className={classes.dirt}
                              />
                              <FormControlLabel
                                value="sparseLandscaping"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Sparse Landscaping
                                  </Typography>
                                }
                                className={classes.sparse}
                              />
                              <FormControlLabel
                                value="dirtGravelShurbs"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Dirt/Gravel With Shrubs and Trees
                                  </Typography>
                                }
                                className={classes.gravel}
                              />
                              <FormControlLabel
                                value="lushGreens"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Lush Greens/Well Kept
                                  </Typography>
                                }
                                className={classes.green}
                              />
                            </RadioGroup>
                          </FormControl>
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
                              disabled={this.state.buttonStatus}
                              onClick={this.submitAnswers}
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

FrontLandScape.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontLandScape);
