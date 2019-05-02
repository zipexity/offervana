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
  sig: { position: "relative", left: "0.3em", width: "200px" },
  avg: {
    position: "relative",
    right: "0em",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "0.05em"
    }
  },

  new: {
    position: "relative",
    right: "2.2em",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "2.60em"
    }
  }
});

class FullRepaint extends React.Component {
  state = {
    extPaint: localStorage.getItem("extPaint")
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
    if (value === "u10yearsExtRepaint") {
      this.setState({ buttonStatus: false });
    }
    if (value === "o10yearsExtRepaint") {
      this.setState({ buttonStatus: false });
    }
    if (value === "unkownExtRepaint") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("extPaint");
    this.check("name", val);
  };

  submit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("extPaint", this.state.extPaint);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q22" {...props} />;
    const backButton = props => <Link to="/homesurvey/q20" {...props} />;
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
                                Have you ever fully repainted the exterior of
                                your home?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <RadioGroup
                            aria-label="extPaint"
                            name="extPaint"
                            value={this.state.extPaint}
                            onChange={this.handleChange}
                          >
                            <FormControlLabel
                              value="u10yearsExtRepaint"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  Less Than 10 Years Ago
                                </Typography>
                              }
                              className={classes.sig}
                            />
                            <FormControlLabel
                              value="o10yearsExtRepaint"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  More Than 10 Years Ago
                                </Typography>
                              }
                              className={classes.avg}
                            />
                            <FormControlLabel
                              value="unkownExtRepaint"
                              control={<Radio color="primary" />}
                              label={
                                <Typography className={classes.titleStraight}>
                                  Don't Know
                                </Typography>
                              }
                              className={classes.new}
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
                              onClick={this.submit}
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

FullRepaint.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullRepaint);
