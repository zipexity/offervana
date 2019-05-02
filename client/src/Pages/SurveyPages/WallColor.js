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
  all: { position: "relative", left: "3.95em", width: "400px" },
  none: { position: "relative", left: "3.95em", width: "400px" },
  mix: { position: "relative", left: "4em", width: "400px" },
  mostnot: { position: "relative", left: "4.05em", width: "400px" }
});

class WallColor extends React.Component {
  state = {
    q27wallcolor: localStorage.getItem("q27wallcolor"),
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
    if (value === "all") {
      this.setState({ buttonStatus: false });
    }
    if (value === "none") {
      this.setState({ buttonStatus: false });
    }
    if (value === "mostlyNeutral") {
      this.setState({ buttonStatus: false });
    }
    if (value === "mostlyNot") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q27wallcolor");
    this.check("name", val);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q27wallcolor", this.state.q27wallcolor);
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q24" {...props} />;
    const backButton = props => <Link to="/homesurvey/q22" {...props} />;
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
                                Are the common interior walls a neutral color?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="q27wallcolor"
                              name="q27wallcolor"
                              value={this.state.q27wallcolor}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="all"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Yes, all walls are a neutral color
                                  </Typography>
                                }
                                className={classes.all}
                              />
                              <FormControlLabel
                                value="none"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    No, none of the walls are a neutral color
                                  </Typography>
                                }
                                className={classes.none}
                              />
                              <FormControlLabel
                                value="mostlyNeutral"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    There is a mix but most walls are neutral
                                  </Typography>
                                }
                                className={classes.mix}
                              />
                              <FormControlLabel
                                value="mostlyNot"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    There is a mix but most walls are bold
                                    colors
                                  </Typography>
                                }
                                className={classes.mostnot}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          spacing={24}
                          align="center"
                        >
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

WallColor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WallColor);
