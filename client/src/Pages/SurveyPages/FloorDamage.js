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
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";

import dmgCarpet from "../../Utils/Images/Flooring/Carpet/damaged.jpeg";
import lightCarpet from "../../Utils/Images/Flooring/Carpet/light.jpg";
import newCarpet from "../../Utils/Images/Flooring/Carpet/new.jpg";

import dmgHardwood from "../../Utils/Images/Flooring/Hardwood/Damaged.jpg";
import lightHardwood from "../../Utils/Images/Flooring/Hardwood/Light Damage.jpg";
import newHardwood from "../../Utils/Images/Flooring/Hardwood/No Damage.jpg";

import dmgLaminate from "../../Utils/Images/Flooring/Laminate/Damaged.jpg";
import lightLaminate from "../../Utils/Images/Flooring/Laminate/Light Damage.jpg";
import newLaminate from "../../Utils/Images/Flooring/Laminate/No Damage.jpg";

import dmgTile from "../../Utils/Images/Flooring/Tile/Tile Damaged.jpg";
import lightTile from "../../Utils/Images/Flooring/Tile/Average Condition.jpg";
import newTile from "../../Utils/Images/Flooring/Tile/Tile Flooring.jpeg";

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
  checkbox: {
    color: "#00A2FF",
    "&:hover": {
      color: "#0082cc"
    }
  },
  image: {
    height: "12em",
    width: "15em",
    position: "relative",
    zIndex: "0",
    borderRadius: "1em",
    "&:hover": {
      margin: "0em",
      animationName: "image",
      animationDuration: "0.5s",
      height: "13em",
      width: "16em",
      zIndex: "999999"
    }
  },
  hide: {
    display: "none"
  },
  show: {
    display: "block"
  }
});

class FloorDamage extends React.Component {
  state = {
    buttonStatus: true,
    hiddenTile: this.props.classes.hide,
    hiddenCarpet: this.props.classes.hide,
    hiddenHardwood: this.props.classes.hide,
    hiddenLaminate: this.props.classes.hide,
    tileQual: localStorage.getItem("tileQual"),
    carpetQual: localStorage.getItem("carpetQual"),
    hardwoodQual: localStorage.getItem("hardwoodQual"),
    laminateQual: localStorage.getItem("laminateQual")
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
    switch (name) {
      case "tileQual":
        if (value === "dmgTile") {
          this.setState({ buttonStatus: false });
        }
        if (value === "lightDmgTile") {
          this.setState({ buttonStatus: false });
        }
        if (value === "likeNewTile") {
          this.setState({ buttonStatus: false });
        }
        break;
      case "carpetQual":
        if (value === "dmgCarpet") {
          this.setState({ buttonStatus: false });
        }
        if (value === "lightDmgCarpet") {
          this.setState({ buttonStatus: false });
        }
        if (value === "likeNewCarpet") {
          this.setState({ buttonStatus: false });
        }
        break;
      case "hardwoodQual":
        if (value === "dmgHardwood") {
          this.setState({ buttonStatus: false });
        }
        if (value === "lightDmgHardwood") {
          this.setState({ buttonStatus: false });
        }
        if (value === "likeNewHardwood") {
          this.setState({ buttonStatus: false });
        }
        break;
      case "laminateQual":
        if (value === "dmgLaminate") {
          this.setState({ buttonStatus: false });
        }
        if (value === "lightDmgLaminate") {
          this.setState({ buttonStatus: false });
        }
        if (value === "likeNewLaminate") {
          this.setState({ buttonStatus: false });
        }
        break;
      default:
        return;
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
    this.checkCondition();
  };

  checkCondition = () => {
    let tile = localStorage.getItem("tileQual");
    let carpet = localStorage.getItem("carpetQual");
    let wood = localStorage.getItem("hardwoodQual");
    let lam = localStorage.getItem("laminateQual");

    let names = ["tileQual", "carpetQual", "hardwoodQual", "laminateQual"];
    let values = [tile, carpet, wood, lam];
    names.map((item, key) => {
      this.check(names[key], values[key]);
    });
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("tileQual", this.state.tileQual);
    localStorage.setItem("carpetQual", this.state.carpetQual);
    localStorage.setItem("hardwoodQual", this.state.hardwoodQual);
    localStorage.setItem("laminateQual", this.state.laminateQual);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q27" {...props} />;
    const backButton = props => <Link to="/homesurvey/q25" {...props} />;
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
                                Flooring condition
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={false} xs={2} />
                          <Grid
                            item
                            md={12}
                            xs={10}
                            className={this.state.hiddenTile}
                          >
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="tileQual"
                                name="tileQual"
                                value={this.state.tileQual}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="dmgTile"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Damaged Tile
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={dmgTile}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="lightDmgTile"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Lightly Damaged Tile
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={lightTile}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="likeNewTile"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Like New Tile
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={newTile}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item md={false} xs={2} />
                          <Grid
                            item
                            md={12}
                            xs={10}
                            className={this.state.hiddenCarpet}
                          >
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="carpetQual"
                                name="carpetQual"
                                value={this.state.carpetQual}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="dmgCarpet"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Damaged Carpet
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={dmgCarpet}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="lightDmgCarpet"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Lightly Damaged Carpet
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={lightCarpet}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="likeNewCarpet"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Like New Carpet
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={newCarpet}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item md={false} xs={2} />
                          <Grid
                            item
                            md={12}
                            xs={10}
                            className={this.state.hiddenHardwood}
                          >
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="hardwoodQual"
                                name="hardwoodQual"
                                value={this.state.hardwoodQual}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="dmgHardwood"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Damaged Hardwood
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={dmgHardwood}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="lightDmgHardwood"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Lightly Damaged Hardwood
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={lightHardwood}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="likeNewHardwood"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Like New Hardwood
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={newHardwood}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                          <Grid item md={false} xs={2} />
                          <Grid
                            item
                            md={12}
                            xs={10}
                            className={this.state.hiddenLaminate}
                          >
                            <FormControl component="fieldset">
                              <RadioGroup
                                aria-label="laminateQual"
                                name="laminateQual"
                                value={this.state.laminateQual}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="dmgLaminate"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Damaged Laminate
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={dmgLaminate}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="lightDmgLaminate"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Lightly Damaged Laminate
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={lightLaminate}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                                <FormControlLabel
                                  value="likeNewLaminate"
                                  control={<Radio color="primary" />}
                                  label={
                                    <div>
                                      <Typography
                                        className={classes.titleStraight}
                                      >
                                        Like New Laminate
                                      </Typography>
                                      <img
                                        className={classes.image}
                                        src={newLaminate}
                                      />
                                    </div>
                                  }
                                  className={`field-set ${classes.none}`}
                                />
                              </RadioGroup>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid class="get-start-button" item md={4} xs={12}>
                            <SurveyButton
                              size="large"
                              color="primary"
                              disabled={this.state.buttonStatus}
                              variant="contained"
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

FloorDamage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloorDamage);
