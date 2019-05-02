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
import TextField from "@material-ui/core/TextField";
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
  blockHide: {
    display: "none"
  },
  blockShow: {
    display: "block"
  },
  roof: { position: "relative", right: "0.65em" },
  plumbing: { position: "relative" },
  electrical: { position: "relative", right: "0.13em" },
  heatingCool: { position: "relative" }
});

class NeighboHoodExt extends React.Component {
  state = {
    roof: false,
    plumbing: false,
    electrical: false,
    heatingCool: false,
    heatingCoolissue: "",
    electricalissue: "",
    plumbingissue: "",
    roofissue: "",
    roofIssue: this.props.classes.blockHide,
    plumbingIssue: this.props.classes.blockHide,
    electricalIssue: this.props.classes.blockHide,
    heatingCoolIssue: this.props.classes.blockHide
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
    console.log(name, e.target.checked);
    if (name === "roof" && e.target.checked === true) {
      this.setState({ roofIssue: this.props.classes.blockShow });
    } else {
      this.setState({ roofIssue: this.props.classes.blockHide });
    }

    if (name === "plumbing" && e.target.checked === true) {
      this.setState({ plumbingIssue: this.props.classes.blockShow });
    } else {
      this.setState({ plumbingIssue: this.props.classes.blockHide });
    }

    if (name === "electrical" && e.target.checked === true) {
      this.setState({ electricalIssue: this.props.classes.blockShow });
    } else {
      this.setState({ electricalIssue: this.props.classes.blockHide });
    }

    if (name === "heatingCool" && e.target.checked === true) {
      this.setState({ heatingCoolIssue: this.props.classes.blockShow });
    } else {
      this.setState({ heatingCoolIssue: this.props.classes.blockHide });
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  componentDidMount = () => {
    let roof = localStorage.getItem("roofissue");
    let plumbing = localStorage.getItem("plumbingissue");
    let electrical = localStorage.getItem("electricalissue");
    let heatingCool = localStorage.getItem("heatingCoolissue");

    if (roof) {
      let newroof = roof.split(" ");
      if (newroof[0] == "true") {
        this.setState({ roof: true });
        this.setState({ roofIssue: this.props.classes.blockShow });
      } else {
        this.setState({ roof: false });
      }
    }

    if (plumbing) {
      let newplumbing = plumbing.split(" ");
      if (newplumbing[0] == "true") {
        this.setState({ plumbing: true });
        this.setState({ plumbingIssue: this.props.classes.blockShow });
      } else {
        this.setState({ plumbing: false });
      }
    }

    if (electrical) {
      let newelectrical = electrical.split(" ");
      if (newelectrical[0] == "true") {
        this.setState({ electrical: true });
        this.setState({ electricalIssue: this.props.classes.blockShow });
      } else {
        this.setState({ electrical: false });
      }
    }

    if (heatingCool) {
      let newheatingCool = heatingCool.split(" ");
      if (newheatingCool[0] == "true") {
        this.setState({ heatingCool: true });
        this.setState({ heatingCoolIssue: this.props.classes.blockShow });
      } else {
        this.setState({ heatingCool: false });
      }
    }
  };

  localSubmit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem(
      "roofissue",
      this.state.roof + " " + this.state.roofissue
    );
    localStorage.setItem(
      "plumbingissue",
      this.state.plumbing + " " + this.state.plumbingissue
    );
    localStorage.setItem(
      "electricalissue",
      this.state.electrical + " " + this.state.electricalissue
    );
    localStorage.setItem(
      "heatingCoolissue",
      this.state.heatingCool + " " + this.state.heatingCoolissue
    );
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q32" {...props} />;
    const backButton = props => <Link to="/homesurvey/q30" {...props} />;

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
                                Are You Aware Of Any Of The Following Issues On
                                The Home?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.roof}
                                  onChange={this.onChange("roof")}
                                  value="roof"
                                  className={`${classes.roof} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.titleStraight}`}
                                >
                                  Roof
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid item md={12} className={this.state.roofIssue}>
                            <TextField
                              id="outlined-roofissue-flexible"
                              label="Please Explain"
                              multiline
                              rowsMax="10"
                              value={this.state.roofissue}
                              onChange={this.handleChange("roofissue")}
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              color="primary"
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.plumbing}
                                  onChange={this.onChange("plumbing")}
                                  value="plumbing"
                                  className={`${classes.plumbing} ${
                                    classes.checkbox
                                  }`}
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.titleStraight}`}
                                >
                                  Plumbing
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={12}
                            className={this.state.plumbingIssue}
                          >
                            <TextField
                              id="outlined-plumbingissue-flexible"
                              label="Please Explain"
                              multiline
                              rowsMax="10"
                              value={this.state.plumbingissue}
                              onChange={this.handleChange("plumbingissue")}
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              color="primary"
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.electrical}
                                  onChange={this.onChange("electrical")}
                                  value="electrical"
                                  className={`${classes.electrical} ${
                                    classes.checkbox
                                  }`}
                                  fill="white"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.titleStraight}`}
                                >
                                  Electrical
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={12}
                            className={this.state.electricalIssue}
                          >
                            <TextField
                              id="outlined-electricalissue-flexible"
                              label="Please Explain"
                              multiline
                              rowsMax="10"
                              value={this.state.electricalissue}
                              onChange={this.handleChange("electricalissue")}
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              color="primary"
                            />
                          </Grid>
                          <Grid item md={12} xs={12}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={this.state.heatingCool}
                                  onChange={this.onChange("heatingCool")}
                                  value="heatingCool"
                                  className={`${classes.heatingCool} ${
                                    classes.checkbox
                                  }`}
                                  fill="white"
                                  color="primary"
                                />
                              }
                              label={
                                <Typography
                                  className={`${classes.titleStraight}`}
                                >
                                  Heating or Cooling System
                                </Typography>
                              }
                            />
                          </Grid>
                          <Grid
                            item
                            md={12}
                            className={this.state.heatingCoolIssue}
                          >
                            <TextField
                              id="outlined-heatingCoolissue-flexible"
                              label="Please Explain"
                              multiline
                              rowsMax="10"
                              value={this.state.heatingCoolissue}
                              onChange={this.handleChange("heatingCoolissue")}
                              className={classes.textField}
                              margin="normal"
                              variant="outlined"
                              color="primary"
                            />
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid className="get-start-button" item md={4} xs={12}>
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
