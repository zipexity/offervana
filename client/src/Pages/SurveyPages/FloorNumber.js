import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  carpet: {
    fontSize: "24px",
    marginRight: "0.5em"
  }
});

class FloorNumber extends React.Component {
  state = {
    carpetNumber: localStorage.getItem("carpetNumber"),
    tileNumber: localStorage.getItem("tileNumber"),
    laminateNumber: localStorage.getItem("laminateNumber"),
    hardwoodNumber: localStorage.getItem("hardwoodNumber"),
    hiddenTile: this.props.classes.hide,
    hiddenCarpet: this.props.classes.hide,
    hiddenHardwood: this.props.classes.hide,
    hiddenLaminate: this.props.classes.hide,
    buttonStatus: true
  };

  componentDidMount = () => {
    this.check();
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.check();
  };

  check = () => {
    let tile = false;
    let lam = false;
    let carp = false;
    let hard = false;

    if (this.state.carpetNumber) {
      carp = true;
    }
    if (this.state.tileNumber) {
      tile = true;
    }
    if (this.state.hardwoodNumber) {
      hard = true;
    }
    if (this.state.laminateNumber) {
      lam = true;
    }
    if (carp === true || tile === true || hard === true || lam === true) {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let til = localStorage.getItem("q43tile");
    let lam = localStorage.getItem("q43laminate");
    let wood = localStorage.getItem("q43hardwood");
    let carp = localStorage.getItem("q43carpet");

    if (til == "true") {
      this.setState({ hiddenTile: this.props.classes.show });
    } else {
    }

    if (lam == "true") {
      this.setState({ hiddenLaminate: this.props.classes.show });
    } else {
    }

    if (wood == "true") {
      this.setState({ hiddenHardwood: this.props.classes.show });
    } else {
    }

    if (carp == "true") {
      this.setState({ hiddenCarpet: this.props.classes.show });
    } else {
    }
    this.check();
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("carpetNumber", this.state.carpetNumber);
    localStorage.setItem("tileNumber", this.state.tileNumber);
    localStorage.setItem("laminateNumber", this.state.laminateNumber);
    localStorage.setItem("hardwoodNumber", this.state.hardwoodNumber);
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
                <Grid align="center" item md={1} xs={false} />
                <Grid align="center" item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid direction="column" container spacing={8}>
                        <Grid direction="row" container>
                          <Grid item md={11} xs={10}>
                            <ProgressBarExample />
                          </Grid>
                        </Grid>
                        <Grid item md={12} xs={10} />
                        <Grid item md={12}>
                          <Grid direction="row" container>
                            <Grid item md={1} />
                            <Grid item md={1}>
                              <BackButton
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={this.goBack}
                                component={backButton}
                              />
                            </Grid>
                            <Grid item md={8} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={classes.title}
                              >
                                How Many Rooms Are Your Different Types Of
                                Flooring In?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenLaminate}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Laminate
                          </Typography>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="laminateNumber"
                              name="laminateNumber"
                              value={this.state.laminateNumber}
                              onChange={this.handleChange}
                              row
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    1
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    2
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    3
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="4+"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    4+
                                  </Typography>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenCarpet}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Carpet
                          </Typography>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="carpetNumber"
                              name="carpetNumber"
                              value={this.state.carpetNumber}
                              onChange={this.handleChange}
                              row
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    1
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    2
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    3
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="4+"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    4+
                                  </Typography>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenHardwood}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Hardwood
                          </Typography>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="hardwoodNumber"
                              name="hardwoodNumber"
                              value={this.state.hardwoodNumber}
                              onChange={this.handleChange}
                              row
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    1
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    2
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    3
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="4+"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    4+
                                  </Typography>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenTile}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Tile
                          </Typography>
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="tileNumber"
                              name="tileNumber"
                              value={this.state.tileNumber}
                              onChange={this.handleChange}
                              row
                            >
                              <FormControlLabel
                                value="1"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    1
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="2"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    2
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="3"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    3
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="4+"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    4+
                                  </Typography>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
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
                              disabled={this.state.buttonStatus}
                              component={submitButton}
                              onClick={this.submitAnswers}
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

FloorNumber.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloorNumber);
