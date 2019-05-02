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
    display: "none"
  },
  show: {
    display: "block"
  },
  // yes: { marginRight: "4em" },
  no: { marginRight: "1.155em" },
  lic: { marginRight: "1.87em" },
  unlic: {}
});

class ExtraRoom extends React.Component {
  state = {
    q18extraroom: localStorage.getItem("q18extraroom"),
    extralive: localStorage.getItem("extralive"),
    hidden: this.props.classes.hide,
    buttonStatus: true
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });

    if (value === "yes") {
      this.setState({ hidden: this.props.classes.show });
    } else if (
      value === "licensedLiveSpace" ||
      value === "unlicensedLiveSpace"
    ) {
      this.setState({ hidden: this.props.classes.show });
    } else {
      this.setState({ hidden: this.props.classes.hide });
    }
    this.check(name, value);
  };

  check = (name, value) => {
    console.log(value);
    if (value === "yes") {
    }
    if (value === "no") {
      this.setState({ buttonStatus: false });
    }
  };

  handleExtra = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.setState({ buttonStatus: false });
  };

  componentDidMount = () => {
    if (!localStorage.getItem("extralive")) {
    } else {
      this.setState({ hidden: this.props.classes.show });
      this.setState({ buttonStatus: false });
    }
    let val = localStorage.getItem("q18extraroom");
    console.log("tee", val);
    this.check("name", val);
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    if (this.state.q18extraroom === "no") {
      localStorage.setItem("q18extraroom", this.state.q18extraroom);
      localStorage.removeItem("extralive");
    } else if (this.state.q18extraroom === "yes") {
      localStorage.setItem("q18extraroom", this.state.q18extraroom);
      localStorage.setItem("extralive", this.state.extralive);
    }
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom", "left");
    const submitButton = props => <Link to="/homesurvey/q5" {...props} />;
    const backButton = props => <Link to="/homesurvey/q3" {...props} />;
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
                <Grid item sm={12} xs={12} md={8}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid direction="column" container spacing={8}>
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
                                component={backButton}
                                onClick={this.goBack}
                              />
                            </Grid>
                            <Grid
                              item
                              className="heading-h5"
                              md={12}
                              sm={12}
                              xs={12}
                              align="center"
                            >
                              <Typography
                                variant="h5"
                                color="inherit"
                                className={classes.title}
                              >
                                Have you or the previous owner made any
                                additions to the home since it was built?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={12} xs={12} align="center">
                            <RadioGroup
                              aria-label="q18extraroom"
                              name="q18extraroom"
                              value={this.state.q18extraroom}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="yes"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Yes
                                  </Typography>
                                }
                                className={classes.yes}
                              />
                              <FormControlLabel
                                value="no"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    No
                                  </Typography>
                                }
                                className={classes.no}
                              />
                            </RadioGroup>
                          </Grid>
                          <Grid item md={12} xs={12} align="center">
                            <RadioGroup
                              aria-label="extralive"
                              name="extralive"
                              value={this.state.extralive}
                              onChange={this.handleExtra}
                              className={`mitted-radio ${this.state.hidden}`}
                            >
                              <FormControlLabel
                                value="licensedLiveSpace"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Permitted
                                  </Typography>
                                }
                                className={classes.lic}
                              />
                              <FormControlLabel
                                value="unlicensedLiveSpace"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Unpermitted
                                  </Typography>
                                }
                                className={classes.unlic}
                              />
                              <FormControlLabel
                                value="notsureLiveSpace"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Not Sure
                                  </Typography>
                                }
                                className={classes.unlic}
                              />
                            </RadioGroup>
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
                              // size="large"
                              color="primary"
                              variant="contained"
                              fullWidth
                              disabled={this.state.buttonStatus}
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

ExtraRoom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExtraRoom);
