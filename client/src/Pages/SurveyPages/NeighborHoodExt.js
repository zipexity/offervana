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

  checkbox: {
    color: "#46A1BA",
    "&:hover": {
      color: "#529aae"
    }
  },
  hide: {
    visibility: "hidden"
  },
  hoa: {
    marginLeft: "2.5em"
  },
  age: {
    marginLeft: "2.5em"
  },
  gated: {
    marginLeft: "2.5em"
  },
  hoatext: {
    position: "relative",
    top: "-2.5em",
    left: "8em"
  },
  agetext: {
    position: "relative",
    top: "-2.5em",
    left: "8em"
  },
  gatedtext: {
    position: "relative",
    top: "-2.5em",
    left: "8em"
  }
});

class NeighboHoodExt extends React.Component {
  state = {
    q11hoa: false,
    q11agerestrict: false,
    q11gatedcomm: false,
    q11none: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let hoa = localStorage.getItem("q11hoa");
    let age = localStorage.getItem("q11agerestrict");
    let gated = localStorage.getItem("q11gatedcomm");
    let non = localStorage.getItem("q11none");

    if (hoa == "true") {
      this.setState({ q11hoa: true });
    } else {
      this.setState({ q11hoa: false });
    }

    if (age == "true") {
      this.setState({ q11agerestrict: true });
    } else {
      this.setState({ q11agerestrict: false });
    }

    if (gated == "true") {
      this.setState({ q11gatedcomm: true });
    } else {
      this.setState({ q11gatedcomm: false });
    }

    if (non == "true") {
      this.setState({ q11none: true });
    } else {
      this.setState({ q11none: false });
    }
  };

  localSubmit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q11hoa", this.state.q11hoa);
    localStorage.setItem("q11agerestrict", this.state.q11agerestrict);
    localStorage.setItem("q11gatedcomm", this.state.q11gatedcomm);
    localStorage.setItem("q11none", this.state.q11none);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q3" {...props} />;
    const backButton = props => <Link to="/homesurvey/q1" {...props} />;

    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid className="spacing" direction="column" container spacing={8}>
              <Grid item md={1} xs={12}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid
                md={12}
                xs={12}
                sm={12}
                className="spacing"
                direction="row"
                container
                spacing={8}
              >
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} />
                <Grid item xs={12} md={8} sm={12}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid
                        md={12}
                        xs={12}
                        direction="column"
                        container
                        spacing={8}
                      >
                        <Grid direction="row" container>
                          <Grid item md={12} xs={12} sm={12}>
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
                            <Grid item xs={12} sm={12} md={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                Is your home in a(n)?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="left">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={5} xs={12}>
                            <Checkbox
                              checked={this.state.q11hoa}
                              onChange={this.onChange("q11hoa")}
                              value="q11hoa"
                              className={`${classes.hoa} ${classes.checkbox}`}
                            />
                            <Typography
                              className={`${classes.hoatext} ${
                                classes.titleStraight
                              }`}
                            >
                              HOA
                            </Typography>
                          </Grid>
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={5} xs={12}>
                            <Checkbox
                              checked={this.state.q11agerestrict}
                              onChange={this.onChange("q11agerestrict")}
                              value="a11agerestrict"
                              className={`${classes.age} ${classes.checkbox}`}
                            />
                            <Typography
                              className={`${classes.agetext} ${
                                classes.titleStraight
                              }`}
                            >
                              Age Restricted Community
                            </Typography>
                          </Grid>
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={5} xs={12}>
                            <Checkbox
                              checked={this.state.q11gatedcomm}
                              onChange={this.onChange("q11gatedcomm")}
                              value="q11gatedcomm"
                              className={`${classes.gated} ${classes.checkbox}`}
                              fill="white"
                              color="primary"
                            />
                            <Typography
                              className={`${classes.gatedtext} ${
                                classes.titleStraight
                              }`}
                            >
                              Gated Community
                            </Typography>
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
                              variant="contained"
                              color="primary"
                              onClick={this.localSubmit}
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

NeighboHoodExt.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NeighboHoodExt);
