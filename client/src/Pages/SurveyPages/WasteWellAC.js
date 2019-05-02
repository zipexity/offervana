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
  mainDiv: {
    backgroundColor: "#F1F3F3",
    height: "125%",
    boxShadow: "4px 4px 15px grey",
    borderRadius: "1em"
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
  sewertext: {
    marginTop: "35px"
  },
  ac: {
    marginTop: "35px"
  },
  well: {
    marginTop: "35px"
  },
  hide: {
    visibility: "hidden"
  },
  radioButton: {
    "&:hover": {
      color: "#0082cc"
    }
  },
  sewer: {
    marginLeft: "-7em"
  },
  septic: {
    marginLeft: "-7em"
  },
  wallac: {
    marginLeft: "-2.2em"
  },
  cenac: { marginLeft: "-2.265em" },
  wellyes: {
    marginLeft: "-6.1em"
  },
  wellno: {
    marginLeft: "-6.1em"
  },
  cenacDiv: {
    width: "100px",
    marginLeft: "0px",
    paddingLeft: "0px"
  },
  centacText: {
    marginLeft: "-40px"
  }
});

class WasteWellAC extends React.Component {
  state = {
    q8wastesystem: localStorage.getItem("q8wastesystem"),
    q8acunit: localStorage.getItem("q8acunit"),
    q8well: localStorage.getItem("q8well"),
    buttonStatus: true
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
    this.check(true);
  };

  check = e => {
    let waste = false;
    let well = false;

    if (this.state.q8wastesystem) {
      waste = true;
    }
    if (this.state.q8well) {
      well = true;
    }
    if (waste === true && well === true) {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    this.check();
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q8wastesystem", this.state.q8wastesystem);
    localStorage.setItem("q8well", this.state.q8well);
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q4" {...props} />;
    const backButton = props => <Link to="/homesurvey/q2" {...props} />;
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid className="spacing" direction="column" container spacing={8}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid className="spacing" direction="row" container spacing={8}>
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv className="spacing">
                    <Grid item md={12} xs={12} sm={12}>
                      <Grid
                        className="spacing"
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
                            <Grid item xs={12} sm={12} md={8} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                Select all that apply
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          className="spacing"
                          container
                          align="center"
                          direction="row"
                          spacing={8}
                        >
                          <Grid item md={false} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid
                            className="heading-h5"
                            item
                            md={8}
                            xs={12}
                            sm={12}
                          >
                            <Typography
                              className={`${classes.titleStraight} ${
                                classes.sewertext
                              }`}
                              variant="h5"
                            >
                              Sewer or Septic:
                            </Typography>
                          </Grid>
                          <Grid item md={2} sm={12} xs={12}>
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="q8wastesystem"
                                name="q8wastesystem"
                                value={this.state.q8wastesystem}
                                onChange={this.handleChange}
                              >
                                <FormControlLabel
                                  value="Sewer"
                                  control={<Radio color="primary" />}
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Sewer
                                    </Typography>
                                  }
                                  className={classes.sewer}
                                />
                                <FormControlLabel
                                  value="Septic"
                                  control={<Radio color="primary" />}
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Septic
                                    </Typography>
                                  }
                                  className={classes.septic}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid
                            className="heading-h5"
                            item
                            md={8}
                            xs={12}
                            sm={12}
                          >
                            <Typography
                              className={`${classes.titleStraight} ${
                                classes.well
                              }`}
                              variant="h5"
                            >
                              Well:
                            </Typography>
                          </Grid>
                          <Grid item md={2} sm={12} xs={12}>
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="q8well"
                                name="q8well"
                                value={this.state.q8well}
                                onChange={this.handleChange}
                              >
                                <FormControlLabel
                                  value="well"
                                  control={<Radio color="primary" />}
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Yes
                                    </Typography>
                                  }
                                  className={classes.wellyes}
                                />
                                <FormControlLabel
                                  value="nowell"
                                  control={<Radio color="primary" />}
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      No
                                    </Typography>
                                  }
                                  className={classes.wellno}
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
                              onClick={this.submitAnswers}
                              component={submitButton}
                              disabled={this.state.buttonStatus}
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

WasteWellAC.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WasteWellAC);
