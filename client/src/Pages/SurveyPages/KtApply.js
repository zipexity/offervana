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
  steel: { marginRight: "1.35em" },
  black: { marginRight: "4.5em" },
  white: { marginRight: "4.3em" },
  mixed: { marginRight: "4em" }
});

class KtApply extends React.Component {
  state = {
    q19ktapply: localStorage.getItem("q19ktapply"),
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
    if (value === "stainlessSteel") {
      this.setState({ buttonStatus: false });
    }
    if (value === "black") {
      this.setState({ buttonStatus: false });
    }
    if (value === "white") {
      this.setState({ buttonStatus: false });
    }
    if (value === "mixed") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q19ktapply");
    this.check("name", val);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");

    localStorage.setItem("q19ktapply", this.state.q19ktapply);
  };

  render() {
    let slide = localStorage.getItem("comingFrom");

    const submitButton = props => <Link to="/homesurvey/q9" {...props} />;
    const backButton = props => <Link to="/homesurvey/q7" {...props} />;
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
                                Kitchen appliances
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <RadioGroup
                            aria-label="q19ktapply"
                            name="q19ktapply"
                            value={this.state.q19ktapply}
                          >
                            <FormControlLabel
                              value="stainlessSteel"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  Stainless Steel
                                </Typography>
                              }
                              className={classes.steel}
                              onChange={this.handleChange}
                            />
                            <FormControlLabel
                              value="black"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  Black
                                </Typography>
                              }
                              className={classes.black}
                              onChange={this.handleChange}
                            />
                            <FormControlLabel
                              value="white"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  White
                                </Typography>
                              }
                              className={classes.white}
                              onChange={this.handleChange}
                            />
                            <FormControlLabel
                              value="mixed"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  Mixed
                                </Typography>
                              }
                              className={classes.mixed}
                              onChange={this.handleChange}
                            />
                          </RadioGroup>
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

KtApply.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KtApply);
