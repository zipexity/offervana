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
  no: {
    width: "100px"
  },
  yes: {
    width: "100px"
  },
  blockHide: {
    display: "none"
  },
  blockShow: {
    display: "block"
  },
  input: {
    border: "0.3px solid #46A1BA",
    fontSize: "18px",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #46A1BA",
      outline: "none",
      color: "black"
    },
    width: "350px",
    height: "50px",
    outline: "none"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 155
  },
  agentConfirm: {
    fontSize: "24px !important",
    marginBottom: "15px"
  }
});

class HomeListed extends React.Component {
  state = {
    q38listed: localStorage.getItem("q38listed"),
    buttonStatus: true,
    formBlock: this.props.classes.blockHide,
    agentBlock: this.props.classes.blockHide,
    agentName: "",
    agentEmail: "",
    agentComp: ""
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    console.log(name, value);
    if (name === "q38listed") {
      if (value === "yes") {
        this.setState({ agentBlock: this.props.classes.blockShow });
      } else {
        this.setState({ agentBlock: this.props.classes.blockHide });
      }
    }
    this.setState({
      [name]: value
    });
    this.check(name, value);
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
    this.check(name, value);
  };

  check = (name, value) => {
    if (value === "no") {
      this.setState({ buttonStatus: false });
      this.setState({ formBlock: this.props.classes.blockHide });
      this.setState({ agentBlock: this.props.classes.blockHide });
    }
    if (value === "yes") {
      this.setState({ formBlock: this.props.classes.blockShow });
      this.setState({ buttonStatus: true });
    }
    let counter = 0;
    if (this.state.agentName.length >= 2) {
      counter++;
    }
    if (this.state.agentEmail.length >= 2) {
      counter++;
      if (this.state.agentComp.length >= 2) {
        counter++;
        if (counter === 3) {
          this.setState({ buttonStatus: false });
        }
      }
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q38listed");
    this.check("name", val);

    if (this.state.q38listed === "yes") {
      this.setState({ agentBlock: this.props.classes.blockShow });
    } else {
      this.setState({ agentBlock: this.props.classes.blockHide });
      this.setState({ buttonStatus: true });
    }
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q38listed", this.state.q38listed);
    let agentData =
      this.state.agentName +
      " " +
      this.state.agentEmail +
      " " +
      this.state.agentComp;
    localStorage.setItem("clientAgent", agentData);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    console.log(this.state);
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q33" {...props} />;
    const backButton = props => <Link to="/homesurvey/q31" {...props} />;
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
                                Is This Property Currently Listed?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="q38listed"
                              name="q38listed"
                              value={this.state.q38listed}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="no"
                                control={<Radio color="primary" />}
                                className={classes.no}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    No
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="yes"
                                control={<Radio color="primary" />}
                                className={classes.yes}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Yes
                                  </Typography>
                                }
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid item md={12} xs={12} align="center">
                          <div className={this.state.agentBlock}>
                            <Grid item md={10} xs={12} align="center">
                              <Typography
                                className={`heading-h4 ${classes.title} ${
                                  classes.agentConfirm
                                }`}
                              >
                                Great, thanks for letting us know. Since your
                                property is listed, we’ll need to reach out to
                                your agent. Please give us their name and
                                number.
                              </Typography>
                            </Grid>
                            <Grid className="input-perent" container direct="row" spacing={8}>
                              <Grid item md={12}>
                                <input
                                  className={`input-box ${classes.topleftInput} ${
                                    classes.input
                                  }`}
                                  name="agentName"
                                  type="text"
                                  placeholder="Agents First and Last Name"
                                  value={this.state.agentName}
                                  onChange={this.handleInputChange}
                                />
                              </Grid>
                              <Grid item md={12}>
                                <input
                                  className={`input-box ${classes.topleftInput} ${
                                    classes.input
                                  }`}
                                  name="agentEmail"
                                  type="text"
                                  placeholder="Agents Email"
                                  value={this.state.agentEmail}
                                  onChange={this.handleInputChange}
                                />
                              </Grid>
                              <Grid item md={12}>
                                <input
                                  className={`input-box ${classes.topleftInput} ${
                                    classes.input
                                  }`}
                                  name="agentComp"
                                  type="text"
                                  placeholder="Agents Real Estate Company"
                                  value={this.state.agentComp}
                                  onChange={this.handleInputChange}
                                />
                              </Grid>
                            </Grid>
                          </div>
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
                          <Grid className="get-start-button" item md={4} xs={12}>
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

HomeListed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeListed);
