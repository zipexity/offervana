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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
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
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 155
  },
  owner: { width: "100px" },
  rep: { width: "100px" },
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
  }
});

class OwnerAgent extends React.Component {
  state = {
    q37user: localStorage.getItem("q37user"),
    buttonStatus: true,
    agent: localStorage.getItem("userhasAgent"),
    formBlock: this.props.classes.blockHide,
    agentBlock: this.props.classes.blockHide,
    agentName: localStorage.getItem("agentName"),
    agentEmail: localStorage.getItem("agentEmail"),
    agentComp: localStorage.getItem("agentComp")
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "agent") {
      if (value === "yesAgent") {
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
  };

  check = (name, value) => {
    if (value === "owner") {
      this.setState({ buttonStatus: false });
    }
    if (value === "rep") {
      this.setState({ buttonStatus: false });
      this.setState({ agent: "noAgent" });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q37user");
    this.check("name", val);
  };

  submit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q37user", this.state.q37user);
    localStorage.setItem("userhasAgent", this.state.agent);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q34" {...props} />;
    const backButton = props => <Link to="/homesurvey/q32" {...props} />;
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
                                Relationship to Home
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControl component="fieldset">
                            <RadioGroup
                              aria-label="q37user"
                              name="q37user"
                              value={this.state.q37user}
                              onChange={this.handleChange}
                            >
                              <FormControlLabel
                                value="owner"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Owner
                                  </Typography>
                                }
                                className={classes.owner}
                              />
                              <FormControlLabel
                                value="rep"
                                control={<Radio color="primary" />}
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Agent
                                  </Typography>
                                }
                                className={classes.rep}
                              />
                            </RadioGroup>
                          </FormControl>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid className="get-start-button" item md={4} xs={12}>
                            <SurveyButton
                              size="large"
                              color="primary"
                              disabled={this.state.buttonStatus}
                              variant="contained"
                              onClick={this.submit}
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

OwnerAgent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OwnerAgent);
