import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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
  pantry: { position: "relative", left: "0em" },
  cabinet: { position: "relative", left: "0em" },
  back: { position: "relative", left: "0.25em" },
  island: { position: "relative", left: "0em" },

  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  },
  gonAtBig: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class ExtraKt extends React.Component {
  state = {
    q20island: false,
    q20tileBackSplash: false,
    q20newCabinets: false,
    q13walkpantry: false,
    doubleOven: false,
    sepCookTop: false,
    buildinMicro: false,
    wallOven: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let islandTemp = localStorage.getItem("q20island");
    let tile = localStorage.getItem("q20tileBackSplash");
    let cabinets = localStorage.getItem("q20newCabinets");
    let walkpantry = localStorage.getItem("q13walkpantry");

    let doubleOven = localStorage.getItem("doubleOven");
    let sepCookTop = localStorage.getItem("sepCookTop");
    let buildinMicro = localStorage.getItem("buildinMicro");
    let wallOven = localStorage.getItem("wallOven");
    if (islandTemp == "true") {
      this.setState({ q20island: true });
    } else {
      this.setState({ q20island: false });
    }

    if (tile == "true") {
      this.setState({ q20tileBackSplash: true });
    } else {
      this.setState({ q20tileBackSplash: false });
    }

    if (cabinets == "true") {
      this.setState({ q20newCabinets: true });
    } else {
      this.setState({ q20newCabinets: false });
    }

    if (walkpantry == "true") {
      this.setState({ q13walkpantry: true });
    } else {
      this.setState({ q13walkpantry: false });
    }

    if (doubleOven == "true") {
      this.setState({ doubleOven: true });
    } else {
      this.setState({ doubleOven: false });
    }

    if (sepCookTop == "true") {
      this.setState({ sepCookTop: true });
    } else {
      this.setState({ sepCookTop: false });
    }

    if (buildinMicro == "true") {
      this.setState({ buildinMicro: true });
    } else {
      this.setState({ buildinMicro: false });
    }

    if (wallOven == "true") {
      this.setState({ wallOven: true });
    } else {
      this.setState({ wallOven: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q20island", this.state.q20island);
    localStorage.setItem("q20tileBackSplash", this.state.q20tileBackSplash);
    localStorage.setItem("q20newCabinets", this.state.q20newCabinets);
    localStorage.setItem("q13walkpantry", this.state.q13walkpantry);
    localStorage.setItem("doubleOven", this.state.doubleOven);
    localStorage.setItem("sepCookTop", this.state.sepCookTop);
    localStorage.setItem("buildinMicro", this.state.buildinMicro);
    localStorage.setItem("wallOven", this.state.wallOven);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q11" {...props} />;
    const backButton = props => <Link to="/homesurvey/q9" {...props} />;
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
                                Select all that apply for your kitchen
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid container direction="row">
                          <Grid item md={3} xs={2} sm={3} />
                          <Grid className="extrakit" item md={3} xs={10} sm={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q20island}
                                  onChange={this.onChange("q20island")}
                                  value="q20island"
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
                                  Kitchen Island
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={false}
                            xs={2}
                            sm={false}
                            lg={false}
                            className={classes.gonAtBig}
                          />
                          <Grid
                            className="extrakit"
                            item
                            md={6}
                            xs={10}
                            sm={6}
                            align="left"
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.buildinMicro}
                                  onChange={this.onChange("buildinMicro")}
                                  value="buildinMicro"
                                  color="primary"
                                  className={`${classes.cabinet} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.cabtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Built In Microwave
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={3} xs={2} sm={3} />
                          <Grid className="extrakit" item md={3} xs={10} sm={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q20newCabinets}
                                  onChange={this.onChange("q20newCabinets")}
                                  value="q20newCabinets"
                                  color="primary"
                                  className={`${classes.cabinet} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.cabtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  New Cabinets
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={false}
                            xs={2}
                            sm={false}
                            lg={false}
                            className={classes.gonAtBig}
                          />
                          <Grid className="extrakit" item md={6} xs={10} sm={6}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.doubleOven}
                                  onChange={this.onChange("doubleOven")}
                                  value="doubleOven"
                                  color="primary"
                                  className={`${classes.cabinet} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.cabtext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Double Oven
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={3} xs={2} sm={3} />
                          <Grid className="extrakit" item md={3} xs={10} sm={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q13walkpantry}
                                  onChange={this.onChange("q13walkpantry")}
                                  value="q13walkpantry"
                                  color="primary"
                                  className={`${classes.pantry} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.panttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Walk In Pantry
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={false}
                            xs={2}
                            sm={false}
                            lg={false}
                            className={classes.gonAtBig}
                          />
                          <Grid
                            className="extrakit"
                            item
                            md={6}
                            xs={10}
                            sm={6}
                            align="left"
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.sepCookTop}
                                  onChange={this.onChange("sepCookTop")}
                                  value="sepCookTop"
                                  color="primary"
                                  className={`${classes.pantry} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.panttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Seperate Cooktop
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={3} xs={2} sm={3} />
                          <Grid className="extrakit" item md={3} xs={10} sm={3}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.q20tileBackSplash}
                                  onChange={this.onChange("q20tileBackSplash")}
                                  value="q20tileBackSplash"
                                  color="primary"
                                  className={`${classes.back} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.tiletext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Tile Backsplash
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={false}
                            xs={2}
                            sm={false}
                            lg={false}
                            className={classes.gonAtBig}
                          />
                          <Grid
                            className="extrakit"
                            item
                            md={6}
                            xs={10}
                            sm={6}
                            align="left"
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.wallOven}
                                  onChange={this.onChange("wallOven")}
                                  value="wallOven"
                                  color="primary"
                                  className={`${classes.pantry} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.panttext} ${
                                    classes.titleStraight
                                  }`}
                                >
                                  Built in Wall Oven
                                </Typography>
                              }
                            />
                          </Grid>
                        </Grid>

                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={12}>
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

ExtraKt.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExtraKt);
