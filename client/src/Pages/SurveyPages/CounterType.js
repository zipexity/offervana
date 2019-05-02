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
import Corian from "../../Utils/Images/Pics of Countertops/Corian.jpg";
import Formica from "../../Utils/Images/Pics of Countertops/Formica.jpeg";
import Granite from "../../Utils/Images/Pics of Countertops/Granite (2).jpg";
import GraniteTile from "../../Utils/Images/Pics of Countertops/Granite Tile.jpg";
import Quartz from "../../Utils/Images/Pics of Countertops/Quartz (2).jpg";
import RegTile from "../../Utils/Images/Pics of Countertops/Reg. Tile.jpg";
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
  "@keyframes image": {
    from: { height: "12em", width: "15em", zIndex: "1" },
    to: { height: "13em", width: "16em", zIndex: "999999" }
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
  granite: { marginRight: "3.3em" },
  graniteT: { marginRight: "3.45em" },
  tile: { marginRight: "4.12em" },
  corian: { marginRight: "5.3em" },
  formica: { marginRight: "4.75em" },
  quartz: { marginRight: "5.2em" },
  image: {
    height: "12em",
    width: "15em",
    zIndex: "1",
    borderRadius: "1em",
    position: "relative",
    "&:hover": {
      margin: "0em",
      animationName: "image",
      animationDuration: "0.2s",
      height: "13em",
      width: "16em",
      zIndex: "999999"
    }
  }
});

class CounterType extends React.Component {
  state = {
    q42countertype: localStorage.getItem("q42countertype"),
    buttonStatus: true
  };

  handleChange = e => {
    let value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.check(name, value);
  };

  check = (name, value) => {
    console.log(value);
    if (value === "Tile") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Granite Tile") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Formica") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Corian") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Granite Slab") {
      this.setState({ buttonStatus: false });
    }
    if (value === "Quartz") {
      this.setState({ buttonStatus: false });
    }
  };

  componentDidMount = () => {
    let val = localStorage.getItem("q42countertype");
    this.check("name", val);
  };

  submitAnswers = () => {
    localStorage.setItem("q42countertype", this.state.q42countertype);
    localStorage.setItem("comingFrom", "left");
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q8" {...props} />;
    const backButton = props => <Link to="/homesurvey/q6" {...props} />;
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
                            <Grid item md={12} xs={12} sm={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                What type of countertops are in your kitchen?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item md={12} xs={12} align="center">
                          <Grid container direction="row">
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                              <FormControl component="fieldset">
                                <RadioGroup
                                  aria-label="q42countertype"
                                  name="q42countertype"
                                  value={this.state.q42countertype}
                                  onChange={this.handleChange}
                                >
                                  <FormControlLabel
                                    value="Corian"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Corian
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={Corian}
                                        />
                                      </div>
                                    }
                                  />
                                  <FormControlLabel
                                    value="Formica"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Formica
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={Formica}
                                        />
                                      </div>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                              <FormControl component="fieldset">
                                <RadioGroup
                                  aria-label="q42countertype"
                                  name="q42countertype"
                                  value={this.state.q42countertype}
                                  onChange={this.handleChange}
                                >
                                  <FormControlLabel
                                    value="Granite Slab"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Granite Slab
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={Granite}
                                        />
                                      </div>
                                    }
                                  />
                                  <FormControlLabel
                                    value="Granite Tile"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Granite Tile
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={GraniteTile}
                                        />
                                      </div>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item lg={4} md={6} sm={6} xs={12}>
                              <FormControl component="fieldset">
                                <RadioGroup
                                  aria-label="q42countertype"
                                  name="q42countertype"
                                  value={this.state.q42countertype}
                                  onChange={this.handleChange}
                                >
                                  <FormControlLabel
                                    value="Quartz"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Quartz
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={Quartz}
                                        />
                                      </div>
                                    }
                                  />
                                  <FormControlLabel
                                    value="Tile"
                                    control={<Radio color="primary" />}
                                    label={
                                      <div>
                                        <Typography
                                          className={classes.titleStraight}
                                        >
                                          Tile
                                        </Typography>
                                        <img
                                          className={classes.image}
                                          src={RegTile}
                                        />
                                      </div>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </Grid>
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
                            lg={4}
                            xs={12}
                          >
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

CounterType.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CounterType);
