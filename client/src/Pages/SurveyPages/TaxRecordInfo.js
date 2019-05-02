import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
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
  input: {
    border: "0.3px solid #46A1BA",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #46A1BA",
      outline: "none",
      color: "black"
    },
    width: "100%",
    height: "30px",
    outline: "none"
  },
  dropDownInput: {
    height: "40px",
    backgroundColor: "white",
    position: "relative",
    top: "-20px"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 155,
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      right: "10px"
    }
  },
  blockHide: {
    display: "none"
  },
  blockShow: {
    display: "block"
  },
  stories: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "25px"
    }
  }
});

class TaxRecordInfo extends React.Component {
  state = {
    q1buildyear: localStorage.getItem("q1buildyear"),
    q1homesqft: localStorage.getItem("q1homesqft"),
    q1bedrooms: localStorage.getItem("q1bedrooms"),
    q1bathrooms: localStorage.getItem("q1bathrooms"),
    q1garagespaces: localStorage.getItem("q1garagespaces"),
    buttonStatus: true,
    stories: localStorage.getItem("q1stories"),
    labelWidth: 0,
    extra: this.props.classes.blockHide
  };

  componentDidMount = () => {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
    this.check();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === "stories") {
      if (event.target.value === "Single level, basement") {
        console.log("?");
        this.setState({ extra: this.props.classes.blockShow });
      } else if (event.target.value === "2 story, basement") {
        console.log("2?");
        this.setState({ extra: this.props.classes.blockShow });
      } else {
        this.setState({ extra: this.props.classes.blockHide });
      }
    }
    this.check();
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
    this.check();
  };
  check = () => {
    let build = false;
    let home = false;
    let bed = false;
    let bath = false;
    let story = false;
    let garage = false;

    if (this.state.q1buildyear) {
      build = true;
    }
    if (this.state.q1homesqft) {
      home = true;
    }
    if (this.state.q1bedrooms) {
      bed = true;
    }
    if (this.state.q1bathrooms) {
      bath = true;
    }
    if (this.state.stories) {
      story = true;
    }
    if (
      build === true &&
      home === true &&
      bed === true &&
      bath === true &&
      story === true
    ) {
      this.setState({ buttonStatus: false });
    }
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q1buildyear", this.state.q1buildyear);
    localStorage.setItem("q1homesqft", this.state.q1homesqft);
    localStorage.setItem("q1bedrooms", this.state.q1bedrooms);
    localStorage.setItem("q1bathrooms", this.state.q1bathrooms);
    localStorage.setItem("q1stories", this.state.stories);
    localStorage.setItem("q1garagespaces", this.state.q1garagespaces);
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q2" {...props} />;
    const backButton = props => <Link to="/abouthome" {...props} />;
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid className="spacing" direction="column" container spacing={8}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid direction="row" container spacing={8}>
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv>
                    <Grid className="spacing" item md={12} xs={12}>
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
                                Lets get started with some basic info
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <FormControl component="fieldset">
                          <Grid
                            align="center"
                            container
                            direction="row"
                            spacing={24}
                          >
                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${classes.titleStraight}`}
                                  >
                                    Year Built:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <input
                                    className={`${classes.topleftInput} ${
                                      classes.input
                                    }`}
                                    name="q1buildyear"
                                    type="text"
                                    placeholder="ex: 2005"
                                    value={this.state.q1buildyear}
                                    onChange={this.handleInputChange}
                                    onClick={this.buildYearTrack}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${classes.titleStraight}`}
                                  >
                                    Square Footage:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <input
                                    className={classes.input}
                                    name="q1homesqft"
                                    type="text"
                                    placeholder="ex: 3200"
                                    value={this.state.q1homesqft}
                                    onChange={this.handleInputChange}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${classes.titleStraight}`}
                                  >
                                    Bedrooms:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <input
                                    className={classes.input}
                                    name="q1bedrooms"
                                    type="text"
                                    placeholder="ex: 3"
                                    value={this.state.q1bedrooms}
                                    onChange={this.handleInputChange}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${classes.titleStraight}`}
                                  >
                                    Bathrooms:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <input
                                    className={classes.input}
                                    name="q1bathrooms"
                                    type="text"
                                    placeholder="ex: 2"
                                    value={this.state.q1bathrooms}
                                    onChange={this.handleInputChange}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${
                                      classes.titleStraight
                                    } ${classes.stories}`}
                                  >
                                    Stories:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                  >
                                    <InputLabel
                                      ref={ref => {
                                        this.InputLabelRef = ref;
                                      }}
                                      htmlFor="stories"
                                    />
                                    <Select
                                      value={this.state.stories}
                                      onChange={this.handleChange}
                                      color="primary"
                                      className={`${classes.input} ${
                                        classes.dropDownInput
                                      }`}
                                      input={
                                        <Input
                                          labelWidth={this.state.labelWidth}
                                          name="stories"
                                          id="stories"
                                        />
                                      }
                                    >
                                      <MenuItem value="Single level">
                                        Single Level
                                      </MenuItem>
                                      <MenuItem value="2 story">
                                        2 Story
                                      </MenuItem>
                                      <MenuItem value="Tri level">
                                        Tri Level
                                      </MenuItem>
                                      <MenuItem value="Single level, basement">
                                        Single Level, Basement
                                      </MenuItem>
                                      <MenuItem value="2 story, basement">
                                        2 Story, Basement
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>

                            <Grid item md={12} xs={12} sm={10} xl={6} lg={6}>
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7}>
                                  <Typography
                                    className={`lable ${classes.titleStraight}`}
                                  >
                                    Garage Spaces/Carports:
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <input
                                    className={classes.input}
                                    name="q1garagespaces"
                                    type="text"
                                    placeholder="ex: 2"
                                    value={this.state.q1garagespaces}
                                    onChange={this.handleInputChange}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              xs={12}
                              sm={10}
                              className={this.state.extra}
                            >
                              <Grid
                                className="full-width"
                                container
                                direction="row"
                              >
                                <Grid item md={12} xs={12} sm={7} xl={6} lg={6}>
                                  <Typography
                                    className={`lable ${
                                      classes.titleStraight
                                    } ${classes.stories}`}
                                  >
                                    Finished?
                                  </Typography>
                                </Grid>
                                <Grid item md={12} xs={12} sm={5}>
                                  <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                  >
                                    <InputLabel
                                      ref={ref => {
                                        this.InputLabelRef = ref;
                                      }}
                                      htmlFor="storyinfo"
                                    />
                                    <Select
                                      value={this.state.storyinfo}
                                      onChange={this.handleChange}
                                      color="primary"
                                      className={`${classes.input} ${
                                        classes.dropDownInput
                                      }`}
                                      input={
                                        <Input
                                          labelWidth={this.state.labelWidth}
                                          name="storyinfo"
                                          id="storyinfo"
                                        />
                                      }
                                    >
                                      <MenuItem value="finished basement">
                                        Finished Basement
                                      </MenuItem>
                                      <MenuItem value="unfinished basement">
                                        Unfinished Basement
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </FormControl>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false} sm={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid
                            className="get-start-button"
                            item
                            md={4}
                            xs={12}
                            sm={12}
                          >
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

TaxRecordInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TaxRecordInfo);
