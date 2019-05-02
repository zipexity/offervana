import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import newCarpet from "../../Utils/Images/Flooring/Carpet/new.jpg";
import newHardwood from "../../Utils/Images/Flooring/Hardwood/Hardwood.jpg";
import newLaminate from "../../Utils/Images/Flooring/Laminate/Laminate.jpg";
import newTile from "../../Utils/Images/Flooring/Tile/Tile Flooring.jpeg";
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
    textAlign: "center",
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
  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  },
  imagerow: {
    marginRight: "10px"
  },
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

class FloorType extends React.Component {
  state = {
    q43tile: false,
    q43laminate: false,
    q43hardwood: false,
    q43carpet: false,
    buttonStatus: true
  };

  handleChange = name => e => {
    let value = e.target.checked;
    this.setState({ [name]: e.target.checked });
    this.check(name, [value]);
  };

  check = (name, value) => {
    value.map((item, key) => {
      console.log(item);
      if (item === true) {
        this.setState({ buttonStatus: false });
      }
      if (item === true) {
        this.setState({ buttonStatus: false });
      }
      if (item === true) {
        this.setState({ buttonStatus: false });
      }
      if (item === true) {
        this.setState({ buttonStatus: false });
      }
    });
  };

  componentDidMount = () => {
    let til = localStorage.getItem("q43tile");
    let lam = localStorage.getItem("q43laminate");
    let wood = localStorage.getItem("q43hardwood");
    let carp = localStorage.getItem("q43carpet");

    if (til == "true") {
      this.setState({ q43tile: true });
      this.setState({ buttonStatus: false });
    } else {
      this.setState({ q43tile: false });
    }

    if (lam == "true") {
      this.setState({ q43laminate: true });
      this.setState({ buttonStatus: false });
    } else {
      this.setState({ q43laminate: false });
    }

    if (wood == "true") {
      this.setState({ q43hardwood: true });
      this.setState({ buttonStatus: false });
    } else {
      this.setState({ q43hardwood: false });
    }

    if (carp == "true") {
      this.setState({ q43carpet: true });
      this.setState({ buttonStatus: false });
    } else {
      this.setState({ q43carpet: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q43tile", this.state.q43tile);
    localStorage.setItem("q43laminate", this.state.q43laminate);
    localStorage.setItem("q43hardwood", this.state.q43hardwood);
    localStorage.setItem("q43carpet", this.state.q43carpet);
    localStorage.setItem("q43other", this.state.q43other);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q26" {...props} />;
    const backButton = props => <Link to="/homesurvey/q24" {...props} />;
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
                                Select all types of flooring you have in your
                                home
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row">
                          <Grid
                            item
                            md={3}
                            xs={false}
                            sm={false}
                            align="center"
                          />
                          <Grid
                            item
                            md={3}
                            xs={12}
                            align="center"
                            className={classes.imagerow}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q43tile}
                                  onChange={this.handleChange("q43tile")}
                                  value="q43tile"
                                  color="primary"
                                  className={`${classes.checkbox}`}
                                />
                              }
                              label={
                                <div>
                                  <Typography className={classes.titleStraight}>
                                    Tile
                                  </Typography>
                                  <img
                                    className={classes.image}
                                    src={newTile}
                                  />
                                </div>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={3}
                            xs={12}
                            align="center"
                            className={classes.imagerow}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q43laminate}
                                  onChange={this.handleChange("q43laminate")}
                                  value="q43laminate"
                                  color="primary"
                                  className={classes.checkbox}
                                />
                              }
                              label={
                                <div>
                                  <Typography className={classes.titleStraight}>
                                    Laminate
                                  </Typography>
                                  <img
                                    className={classes.image}
                                    src={newLaminate}
                                  />
                                </div>
                              }
                            />
                          </Grid>
                          <Grid item md={3} xs={false} align="center" />
                          <Grid
                            item
                            md={3}
                            xs={12}
                            align="center"
                            className={classes.imagerow}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q43hardwood}
                                  onChange={this.handleChange("q43hardwood")}
                                  value="q43hardwood"
                                  color="primary"
                                  className={classes.checkbox}
                                />
                              }
                              label={
                                <div>
                                  <Typography className={classes.titleStraight}>
                                    Hardwood
                                  </Typography>
                                  <img
                                    className={classes.image}
                                    src={newHardwood}
                                  />
                                </div>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={3}
                            xs={12}
                            align="center"
                            className={classes.imagerow}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q43carpet}
                                  onChange={this.handleChange("q43carpet")}
                                  value="q43carpet"
                                  color="primary"
                                  className={classes.checkbox}
                                />
                              }
                              label={
                                <div>
                                  <Typography className={classes.titleStraight}>
                                    Carpet
                                  </Typography>
                                  <img
                                    className={classes.image}
                                    src={newCarpet}
                                  />
                                </div>
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
                              disabled={this.state.buttonStatus}
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

FloorType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloorType);
