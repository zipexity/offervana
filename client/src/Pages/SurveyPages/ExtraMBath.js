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
  doublesink: { position: "relative", right: "1.4em" },
  graniteT: { position: "relative", right: "0em" },
  septub: { position: "relative", left: "0.25em" },
  tiledshower: { position: "relative", right: "0.58em" },
  updatedfloors: { position: "relative", right: "1em" },
  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  }
});

class ExtraMBath extends React.Component {
  state = {
    q23doubleSink: false,
    q23graniteTile: false,
    q23sepTub: false,
    q23tiledShowers: false,
    q23updatedFloors: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let sink = localStorage.getItem("q23doubleSink");
    let tile = localStorage.getItem("q23graniteTile");
    let tub = localStorage.getItem("q23sepTub");
    let shower = localStorage.getItem("q23tiledShowers");
    let floor = localStorage.getItem("q23updatedFloors");

    if (sink == "true") {
      this.setState({ q23doubleSink: true });
    } else {
      this.setState({ q23doubleSink: false });
    }

    if (tile == "true") {
      this.setState({ q23graniteTile: true });
    } else {
      this.setState({ q23graniteTile: false });
    }

    if (tub == "true") {
      this.setState({ q23sepTub: true });
    } else {
      this.setState({ q23sepTub: false });
    }

    if (shower == "true") {
      this.setState({ q23tiledShowers: true });
    } else {
      this.setState({ q23tiledShowers: false });
    }

    if (floor == "true") {
      this.setState({ q23updatedFloors: true });
    } else {
      this.setState({ q23updatedFloors: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q23doubleSink", this.state.q23doubleSink);
    localStorage.setItem("q23graniteTile", this.state.q23graniteTile);
    localStorage.setItem("q23sepTub", this.state.q23sepTub);
    localStorage.setItem("q23tiledShowers", this.state.q23tiledShowers);
    localStorage.setItem("q23updatedFloors", this.state.q23updatedFloors);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q14" {...props} />;
    const backButton = props => <Link to="/homesurvey/q12" {...props} />;
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
                                Does any of the following apply to your master
                                bathroom?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid item md={12} xs={12} sm={6} align="center">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q23doubleSink}
                                  onChange={this.onChange("q23doubleSink")}
                                  value="q23doubleSink"
                                  color="primary"
                                  className={`${classes.doublesink} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.sinktext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Double Sink
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12} sm={6} align="center">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q23graniteTile}
                                  onChange={this.onChange("q23graniteTile")}
                                  value="q23graniteTile"
                                  color="primary"
                                  className={`${classes.graniteT} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.granitetext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Granite or Tile Counters
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12} sm={6} align="center">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q23sepTub}
                                  onChange={this.onChange("q23sepTub")}
                                  value="q23sepTub"
                                  color="primary"
                                  className={`${classes.septub} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.septubtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Seperate Tub and Shower
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12} sm={6} align="center">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q23tiledShowers}
                                  onChange={this.onChange("q23tiledShowers")}
                                  value="q23tiledShowers"
                                  color="primary"
                                  className={`${classes.tiledshower} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.showertext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Tiled Shower Walls
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} xs={12} sm={6} align="center">
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q23updatedFloors}
                                  onChange={this.onChange("q23updatedFloors")}
                                  value="q23updatedFloors"
                                  color="primary"
                                  className={`${classes.updatedfloors} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.floortext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Updated Floors
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

ExtraMBath.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExtraMBath);
