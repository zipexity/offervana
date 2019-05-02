import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
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
  blockHide: {
    display: "none"
  },
  blockShow: {
    display: "block"
  },
  never: { marginLeft: "-2.9em" },
  five: { marginLeft: "-1.22em" },
  ten: { marginLeft: "-0.7em" },
  oten: { marginLeft: "-1.3em" },
  questionTwo: {
    fontSize: "20px !important"
  }
});

class KtRemod extends React.Component {
  state = {
    q21ktRemod: localStorage.getItem("q21ktRemod"),
    buttonStatus: true,
    applyRemod: false,
    countertopRemod: false,
    cabinetsRemod: false,
    flooringRemod: false,
    remodExtras: this.props.classes.blockHide
  };
  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.check(name, value);
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  check = (name, value) => {
    console.log(value);
    if (value === "fiveTen") {
      this.setState({ buttonStatus: false });
      this.setState({ remodExtras: this.props.classes.blockShow });
    }
    if (value === "fiveYears") {
      this.setState({ buttonStatus: false });
      this.setState({ remodExtras: this.props.classes.blockShow });
    }
    if (value === "never") {
      this.setState({ buttonStatus: false });
      this.setState({ remodExtras: this.props.classes.blockHide });
    }
    if (value === "tenYears") {
      this.setState({ buttonStatus: false });
      this.setState({ remodExtras: this.props.classes.blockShow });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q21ktRemod");
    this.check("name", val);

    let applyRemod = localStorage.getItem("applyRemod");
    let countertopRemod = localStorage.getItem("countertopRemod");
    let cabinetsRemod = localStorage.getItem("cabinetsRemod");
    let flooringRemod = localStorage.getItem("flooringRemod");

    if (applyRemod == "true") {
      this.setState({ applyRemod: true });
    } else {
      this.setState({ applyRemod: false });
    }

    if (countertopRemod == "true") {
      this.setState({ countertopRemod: true });
    } else {
      this.setState({ countertopRemod: false });
    }

    if (cabinetsRemod == "true") {
      this.setState({ cabinetsRemod: true });
    } else {
      this.setState({ cabinetsRemod: false });
    }

    if (flooringRemod == "true") {
      this.setState({ flooringRemod: true });
    } else {
      this.setState({ flooringRemod: false });
    }
  };

  submit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q21ktRemod", this.state.q21ktRemod);
    localStorage.setItem("applyRemod", this.state.applyRemod);
    localStorage.setItem("countertopRemod", this.state.countertopRemod);
    localStorage.setItem("cabinetsRemod", this.state.cabinetsRemod);
    localStorage.setItem("flooringRemod", this.state.flooringRemod);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q7" {...props} />;
    const backButton = props => <Link to="/homesurvey/q5" {...props} />;
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
                                component={backButton}
                              />
                            </Grid>
                            <Grid item md={12} xs={12} sm={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                Kitchen remodel
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="q21ktRemod"
                              name="q21ktRemod"
                              value={this.state.q21ktRemod}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="never"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Never
                                  </Typography>
                                }
                                className={classes.never}
                              />
                              <FormControlLabel
                                value="fiveYears"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    0 - 5 Years
                                  </Typography>
                                }
                                className={classes.five}
                              />
                              <FormControlLabel
                                value="fiveTen"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    6 - 10 Years
                                  </Typography>
                                }
                                className={classes.ten}
                              />
                              <FormControlLabel
                                value="tenYears"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    10+ Years
                                  </Typography>
                                }
                                className={classes.oten}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.remodExtras}
                        >
                          <Typography
                            className={`${classes.title} ${
                              classes.questionTwo
                            }`}
                          >
                            Which of the following have you replaced?
                          </Typography>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.applyRemod}
                                onChange={this.onChange("applyRemod")}
                                value="applyRemod"
                                color="primary"
                                className={`${classes.island} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.titleStraight} ${
                                  classes.islandtext
                                }`}
                              >
                                Appliances
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.countertopRemod}
                                onChange={this.onChange("countertopRemod")}
                                value="countertopRemod"
                                color="primary"
                                className={`${classes.island} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.titleStraight} ${
                                  classes.islandtext
                                }`}
                              >
                                Countertops
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.cabinetsRemod}
                                onChange={this.onChange("cabinetsRemod")}
                                value="cabinetsRemod"
                                color="primary"
                                className={`${classes.island} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.titleStraight} ${
                                  classes.islandtext
                                }`}
                              >
                                Cabinets
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.flooringRemod}
                                onChange={this.onChange("flooringRemod")}
                                value="flooringRemod"
                                color="primary"
                                className={`${classes.island} ${
                                  classes.checkbox
                                }`}
                              />
                            }
                            label={
                              <Typography
                                className={`${classes.titleStraight} ${
                                  classes.islandtext
                                }`}
                              >
                                Flooring
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
                              disabled={this.state.buttonStatus}
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

KtRemod.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(KtRemod);
