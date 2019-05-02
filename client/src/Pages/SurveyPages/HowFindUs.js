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
import { Link, withRouter } from "react-router-dom";
import APIserver from "../../Utils/api/APIserver";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import history from "../../Components/History/history";
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
  insta: { marginLeft: "-3.2em" },
  fb: { marginLeft: "-3.35em" },
  googl: { marginLeft: "-4.15em" },
  yt: { marginLeft: "-3.75em" },
  email: { marginLeft: "-4.65em" },
  wom: { marginLeft: "-1.1em" },
  ov: { marginLeft: "-2.78em" },
  other: { marginLeft: "-4.15em" }
});

class HowFindUs extends React.Component {
  state = {
    foundus: localStorage.getItem("q45foundus"),
    linkTo: "/api/signup",
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
    if (value === "instagram") {
      this.setState({ buttonStatus: false });
    }
    if (value === "facebook") {
      this.setState({ buttonStatus: false });
    }
    if (value === "google") {
      this.setState({ buttonStatus: false });
    }
    if (value === "youtube") {
      this.setState({ buttonStatus: false });
    }
    if (value === "email") {
      this.setState({ buttonStatus: false });
    }
    if (value === "word") {
      this.setState({ buttonStatus: false });
    }
    if (value === "offervana") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    history.push(this.props.location.pathname);
    let val = localStorage.getItem("q45foundus");
    this.check("name", val);
    APIserver.isLogged().then(res => {
      if (!res.data.id) {
      } else {
        APIserver.singleUserReturn(res.data.id).then(response => {
          let userId;
          Object.keys(response).every(function(x) {
            userId = response[x] === "" || response[x] === null; // or just "return o[x];" for falsy values
          });
          if (userId === true) {
            this.setState({ linkTo: "/createuser" });
          } else {
            this.setState({ linkTo: "/api/surveys/:id" });
          }
        });
      }
    });
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q45foundus", this.state.foundus);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to={this.state.linkTo} {...props} />;
    const backButton = props => <Link to="/homesurvey/q37" {...props} />;
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
                                How Did You Hear About Us?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="foundus"
                              name="foundus"
                              value={this.state.foundus}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="instagram"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Instagram
                                  </Typography>
                                }
                                className={classes.insta}
                              />
                              <FormControlLabel
                                value="facebook"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Facebook
                                  </Typography>
                                }
                                className={classes.fb}
                              />
                              <FormControlLabel
                                value="google"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Google
                                  </Typography>
                                }
                                className={classes.googl}
                              />
                              <FormControlLabel
                                value="youtube"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    YouTube
                                  </Typography>
                                }
                                className={classes.yt}
                              />
                              <FormControlLabel
                                value="email"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Email
                                  </Typography>
                                }
                                className={classes.email}
                              />
                              <FormControlLabel
                                value="word"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Word of Mouth
                                  </Typography>
                                }
                                className={classes.wom}
                              />
                              <FormControlLabel
                                value="offervana"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Offervana
                                  </Typography>
                                }
                                className={classes.ov}
                              />
                              <FormControlLabel
                                value="other"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Other
                                  </Typography>
                                }
                                className={classes.other}
                              />
                            </RadioGroup>
                          </FormControl>
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

HowFindUs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(HowFindUs));
