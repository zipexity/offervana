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
import lightDamage from "../../Utils/Images/Pics of interior paint/Light Damage.jpg";
import needsWork from "../../Utils/Images/Pics of interior paint/Needs Work.jpg";
import noDamage from "../../Utils/Images/Pics of interior paint/No Damage (2).jpg";
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
  "@keyframes image": {
    from: { height: "12em", width: "15em", zIndex: "1" },
    to: { height: "13em", width: "16em", zIndex: "999999" }
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
  sig: {
    marginRight: "2.68em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em"
    }
  },
  avg: {
    marginRight: "3.2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em"
    }
  },
  scuffs: {
    marginRight: "3.2em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em"
    }
  },
  new: {},
  image: {
    height: "12em",
    width: "15em",
    position: "relative",
    zIndex: "0",
    borderRadius: "1em",
    "&:hover": {
      margin: "0em",
      animationName: "image",
      animationDuration: "0.2s",
      height: "13em",
      width: "16em",
      zIndex: "999999"
    }
  }
});

class IntPaintCond extends React.Component {
  state = {
    q26interiorpaintcondition: localStorage.getItem(
      "q26interiorpaintcondition"
    ),
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
    if (value === "Light Damage") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Needs Work") {
      this.setState({ buttonStatus: false });
    }
    if (value === "No Damage") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q26interiorpaintcondition");
    this.check("name", val);
  };
  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem(
      "q26interiorpaintcondition",
      this.state.q26interiorpaintcondition
    );
  };
  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q23" {...props} />;
    const backButton = props => <Link to="/homesurvey/q21" {...props} />;
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
                                Interior paint condition?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid
                            item
                            md={false}
                            xs={1}
                            sm={false}
                            align="center"
                            className={classes.hide}
                          >
                            t
                          </Grid>
                          <Grid item md={12} xs={11} sm={12} align="center">
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="q26interiorpaintcondition"
                                name="q26interiorpaintcondition"
                                value={this.state.q26interiorpaintcondition}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="Needs Work"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Needs Work
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={needsWork}
                                      />
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        (scratches, scuffs and/or holes in the
                                        wall)
                                      </Typography>
                                    </div>
                                  }
                                />
                                <FormControlLabel
                                  value="Light Damage"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Light Damage
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={lightDamage}
                                      />
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        (light scratches and scuffs but nothing
                                        major)
                                      </Typography>
                                    </div>
                                  }
                                />
                                <FormControlLabel
                                  value="No Damage"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        No Damage
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={noDamage}
                                      />
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        (looks brand new with no visible issues)
                                      </Typography>
                                    </div>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
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

IntPaintCond.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntPaintCond);
