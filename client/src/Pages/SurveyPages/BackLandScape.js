import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Lush from "../../Utils/Images/Backyard/Lush.jpg";
import Mild from "../../Utils/Images/Backyard/Mild.jpg";
import noLandscape from "../../Utils/Images/Backyard/nolandscape.jpg";
import Noyard from "../../Utils/Images/Backyard/Noyard.jpg";
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
  image: {
    height: "12em",
    width: "15em",
    position: "relative",
    zIndex: "1",
    borderRadius: "1em",
    "&:hover": {
      margin: "0em",
      animationName: "image",
      animationDuration: "0.5s",
      height: "13em",
      width: "16em",
      zIndex: "999999"
    }
  }
});

class BackLandScape extends React.Component {
  state = {
    q30backyard: localStorage.getItem("q30backyard"),
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
    if (value === "lushGreens") {
      this.setState({ buttonStatus: false });
    }
    if (value === "noyard") {
      this.setState({ buttonStatus: false });
    }
    if (value === "noLandscape") {
      this.setState({ buttonStatus: false });
    }
    if (value === "dirtGreenery") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q30backyard");
    this.check("name", val);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("q30backyard", this.state.q30backyard);
    localStorage.setItem("comingFrom", "left");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q17" {...props} />;
    const backButton = props => <Link to="/homesurvey/q15" {...props} />;
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
                                Backyard landscaping
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <Grid item md={7} xs={8} align="center">
                            <Grid container direction="row">
                              <Grid item md={12}>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    aria-label="q30backyard"
                                    name="q30backyard"
                                    value={this.state.q30backyard}
                                    onChange={this.handleChange}
                                  >
                                    <FormControlLabel
                                      value="noLandscape"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            No Landscape
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={noLandscape}
                                          />
                                        </div>
                                      }
                                      className={classes.none}
                                    />
                                    <FormControlLabel
                                      value="noyard"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            No Yard
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={Noyard}
                                          />
                                        </div>
                                      }
                                      className={classes.none}
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                              <Grid item md={12}>
                                <FormControl component="fieldset">
                                  <RadioGroup
                                    aria-label="q30backyard"
                                    name="q30backyard"
                                    value={this.state.q30backyard}
                                    onChange={this.handleChange}
                                  >
                                    <FormControlLabel
                                      value="dirtGreenery"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            Dirt/Rocks and Greenery
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={Mild}
                                          />
                                        </div>
                                      }
                                      className={classes.dirt}
                                    />
                                    <FormControlLabel
                                      value="lushGreens"
                                      control={<Radio color="primary" />}
                                      label={
                                        <div>
                                          <Typography
                                            className={classes.titleStraight}
                                          >
                                            Patio/Pool and/or Lush Greens
                                          </Typography>
                                          <img
                                            className={classes.image}
                                            src={Lush}
                                          />
                                        </div>
                                      }
                                      className={classes.green}
                                    />
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
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

BackLandScape.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BackLandScape);
