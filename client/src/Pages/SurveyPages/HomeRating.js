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
  excel: { position: "relative", left: "0em", width: "200px" },
  avg: { position: "relative", left: "0em", width: "200px" },
  good: { position: "relative", left: "0em", width: "200px" },
  fair: { position: "relative", left: "0em", width: "200px" },
  poor: { position: "relative", left: "0em", width: "200px" },
  radioGroup: {
    width: "100%",
    marginLeft: "3em"
  }
});

class HomeRating extends React.Component {
  state = {
    q36homestatus: localStorage.getItem("q36homestatus"),
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
    if (value === "excellent") {
      this.setState({ buttonStatus: false });
    }
    if (value === "good") {
      this.setState({ buttonStatus: false });
    }
    if (value === "average") {
      this.setState({ buttonStatus: false });
    }
    if (value === "fair") {
      this.setState({ buttonStatus: false });
    }
    if (value === "poor") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q36homestatus");
    this.check("name", val);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q36homestatus", this.state.q36homestatus);
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q35" {...props} />;
    const backButton = props => <Link to="/homesurvey/q33" {...props} />;
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
                                Personal Rating of Home
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid item md={12} xs={12} align="center">
                            <RadioGroup
                              aria-label="home"
                              name="q36homestatus"
                              value={this.state.q36homestatus}
                              onChange={this.handleChange}
                              className={classes.radioGroup}
                            >
                              <FormControlLabel
                                value="excellent"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Excellent
                                  </Typography>
                                }
                                className={classes.excel}
                              />
                              <FormControlLabel
                                value="good"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Good
                                  </Typography>
                                }
                                className={classes.good}
                              />
                              <FormControlLabel
                                value="average"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Average
                                  </Typography>
                                }
                                className={classes.avg}
                              />
                              <FormControlLabel
                                value="fair"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Fair
                                  </Typography>
                                }
                                className={classes.fair}
                              />
                              <FormControlLabel
                                value="poor"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Poor
                                  </Typography>
                                }
                                className={classes.poor}
                              />
                            </RadioGroup>
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

HomeRating.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeRating);
