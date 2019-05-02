import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
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
  above: { position: "relative", left: "-0.9em" },
  ground: { position: "relative", right: "0.8em" },
  community: { position: "relative", right: "0.5em" },
  none: { position: "relative", right: "2.68em" }
});

class Pool extends React.Component {
  state = {
    spaTub: false,
    inGroundpool: false,
    communitypool: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let spaTub = localStorage.getItem("spaTub");
    let inGroundpool = localStorage.getItem("inGroundpool");
    let communitypool = localStorage.getItem("communitypool");

    if (spaTub == "true") {
      this.setState({ spaTub: true });
    } else {
      this.setState({ spaTub: false });
    }

    if (inGroundpool == "true") {
      this.setState({ inGroundpool: true });
    } else {
      this.setState({ inGroundpool: false });
    }

    if (communitypool == "true") {
      this.setState({ communitypool: true });
    } else {
      this.setState({ communitypool: false });
    }
  };

  submit = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("spaTub", this.state.spaTub);
    localStorage.setItem("inGroundpool", this.state.inGroundpool);
    localStorage.setItem("communitypool", this.state.communitypool);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q21" {...props} />;
    const backButton = props => <Link to="/homesurvey/q19" {...props} />;
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
                                Does your home have a pool or spa?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.spaTub}
                                onChange={this.onChange("spaTub")}
                                value="spaTub"
                                color="primary"
                              />
                            }
                            label={
                              <Typography className={classes.titleStraight}>
                                Spa / Hot tub
                              </Typography>
                            }
                            className={classes.above}
                          />
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.inGroundpool}
                                onChange={this.onChange("inGroundpool")}
                                value="inGroundpool"
                                color="primary"
                              />
                            }
                            label={
                              <Typography className={classes.titleStraight}>
                                Yes In Ground
                              </Typography>
                            }
                            className={classes.ground}
                          />
                        </Grid>
                        <Grid item md={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.communitypool}
                                onChange={this.onChange("communitypool")}
                                value="communitypool"
                                color="primary"
                              />
                            }
                            label={
                              <Typography className={classes.titleStraight}>
                                Yes Community
                              </Typography>
                            }
                            className={classes.community}
                          />
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

Pool.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pool);
