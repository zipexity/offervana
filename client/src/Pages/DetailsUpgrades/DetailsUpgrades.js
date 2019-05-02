import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const styles = theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  LeftArrow: {
    marginLeft: theme.spacing.unit,
    color: "#F1F3F3"
  },
  backButton: {
    "&:hover": {
      backgroundColor: "#46A1BA"
    },
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      marginLeft: "2em"
    }
  },
  flex: {
    flexGrow: 1,
    marginTop: "5em"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  hide: {
    visibility: "hidden"
  },
  typography: {
    color: "#5E5E5E",
    fontSize: "18px",
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
  typographyStraight: {
    color: "#5E5E5E",
    fontSize: "16px",
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
  mainDiv: {
    backgroundColor: "#F1F3F3",
    height: "130%",
    boxShadow: "4px 4px 15px grey",
    marginTop: "1.5em",
    borderRadius: "1em"
  },
  hide: {
    visibility: "hidden"
  },
  button: {
    fontFamily: "Arial Rounded MT Bold"
  },
  divider: {
    color: "#5E5E5E"
  },
  upgradestext: {
    fontSize: "18px !important"
  },
  header: {
    fontSize: "32px !important"
  }
  // bedroom: {
  //   [theme.breakpoints.down("sm")]: {
  //     position: "relative",
  //     right: "10px"
  //   }
  // }
});

class DetailsUpgrades extends React.Component {
  state = {
    surveyData: "",
    offers: [],
    bathroomExtras: [],
    kitchenExtras: [],
    backyardExtras: [],
    backyardLandScape: "",
    extraRooms: [],
    pool: []
  };

  componentDidMount = () => {
    let offerHold = [];
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    this.setState({ userid: UserId });
    APIserver.detailsUpgradesReturn(UserId).then(res => {
      console.log(res.data[0]);
      let info = res.data[0];
      this.setState({ surveyData: info });

      this.findBathExtras();
      this.findKitchenExtras();
      this.findBackyardExtras();
      this.findextraRooms();
    });
  };

  findBathExtras = () => {
    let bathextras = [];

    if (this.state.surveyData.doubleSink === "true") {
      bathextras.push("Double Sink");
    }
    if (this.state.surveyData.graniteTile === "true") {
      bathextras.push("Granite Tile");
    }
    if (this.state.surveyData.sebTup === "true") {
      bathextras.push("Seperate Tub");
    }
    if (this.state.surveyData.tiledShowers === "true") {
      bathextras.push("Tiled Shower");
    }
    if (this.state.surveyData.updatedFloors === "true") {
      bathextras.push("Updated Flooring");
    }
    this.setState({ bathroomExtras: bathextras });
  };

  findKitchenExtras = () => {
    let kitchenextras = [];
    if (this.state.surveyData.island === "true") {
      kitchenextras.push("Island");
    }
    if (this.state.surveyData.tileBackSplash === "true") {
      kitchenextras.push("Tile Backsplash");
    }
    if (this.state.surveyData.newcabinets === "true") {
      kitchenextras.push("New Cabinets");
    }
    if (this.state.surveyData.walkpantry === "true") {
      kitchenextras.push("Walk In Pantry");
    }
    this.setState({ kitchenExtras: kitchenextras });
  };

  findBackyardExtras = () => {
    let backyardextras = [];
    let backyardlandscape;
    switch (this.state.surveyData.backlandscape) {
      case "lushGreens":
        backyardlandscape = "Lush Landscaping";
        break;
      case "noLandscape":
        backyardlandscape = "No Landscaping";
        break;
      case "noyard":
        backyardlandscape = "No Backyard";
        break;
      case "dirtGreenery":
        backyardlandscape = "Dirt/Rocks and Greenery";
        break;
      default:
        console.log("error");
    }

    let pool = [];

    if (this.state.surveyData.spaTub === "true") {
      pool.push("HotTub/Spa");
    }

    if (this.state.surveyData.inGroundpool) {
      pool.push("In Ground Pool");
    }

    if (this.state.surveyData.communitypool) {
      pool.push("Community Pool");
    }

    if (this.state.surveyData.bbq === "true") {
      backyardextras.push("Built In BBQ or Grill");
    }
    if (this.state.surveyData.coveredPatio === "true") {
      backyardextras.push("Covered Patio");
    }
    if (this.state.surveyData.firepit === "true") {
      backyardextras.push("Firepit");
    }
    if (this.state.surveyData.gazebo === "true") {
      backyardextras.push("Gazebo or Ramada");
    }
    if (this.state.surveyData.pavers === "true") {
      backyardextras.push("Pavers");
    }
    if (this.state.surveyData.rvgate === "true") {
      backyardextras.push("RV Gate");
    }
    if (this.state.surveyData.sportCourt === "true") {
      backyardextras.push("Sport Court");
    }
    if (this.state.surveyData.sprinklers === "true") {
      backyardextras.push("Spinklers/Drip System");
    }
    this.setState({ backyardExtras: backyardextras });
    this.setState({ backyardLandScape: backyardlandscape });
    this.setState({ pool: pool });
  };

  findextraRooms = () => {
    let extraRooms = [];
    if (this.state.surveyData.island === "yes") {
      extraRooms.push("Extra Living Space");
    }
    this.setState({ extraRooms: extraRooms });
  };
  render() {
    const imageUpload = props => (
      <Link to={`/images${this.props.history.location.search}`} {...props} />
    );
    const backButton = props => (
      <Link to={`/multi?id=${this.state.userid}`} {...props} />
    );
    const { classes } = this.props;
    return (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div className={classes.flex}>
          <MuiThemeProvider theme={theme}>
            <Grid direction="column" container spacing={24}>
              <Grid item md={1} />
              <Grid direction="row" container spacing={24}>
                <Grid align="center" item md={1} xs={false} sm={false} />
                <Grid align="center" item md={1} xs={false} sm={false} />
                <Grid item xs={12} md={8} sm={12}>
                  <div className={classes.mainDiv}>
                    <Grid item md={2}>
                      <p className={classes.hide}>t</p>
                    </Grid>
                    <Grid item md={2} sm={2} xs={2}>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        component={backButton}
                        className={classes.backButton}
                      >
                        <LeftArrow className={classes.LeftArrow} />
                      </Button>
                    </Grid>
                    <Grid align="center" container direction="row">
                      <Grid item md={2} sm={false} xs={false}>
                        <p className={classes.hide}>t</p>
                      </Grid>
                      <Grid item md={8} sm={12} xs={12}>
                        <Typography
                          variant="h4"
                          className={`${classes.typography} ${classes.header}`}
                        >
                          Your Home Survey
                        </Typography>
                        <hr />
                      </Grid>
                    </Grid>
                    <Grid align="center" item md={12} sm={12} xs={12}>
                      <Grid container direction="row" spacing={false}>
                        <Grid item md={1} sm={1} xs={2}>
                          <p className={classes.hide}>Bedrooms</p>
                        </Grid>
                        <Grid item md={2} sm={2} xs={4}>
                          <Typography
                            className={`${classes.typography} ${
                              classes.bedroom
                            }`}
                          >
                            Bedrooms
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.surveyData.bedrooms}
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={2} xs={4}>
                          <Typography className={classes.typography}>
                            Bathrooms
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.surveyData.bathrooms}
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={2} xs={4}>
                          <Typography className={classes.typography}>
                            Living Area
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.surveyData.homesqft}
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={2} xs={4}>
                          <Typography className={classes.typography}>
                            Floors
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.surveyData.stories}
                          </Typography>
                        </Grid>
                        <Grid item md={2} sm={2} xs={4}>
                          <Typography className={classes.typography}>
                            Garage Spaces
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.surveyData.garagespots}
                          </Typography>
                        </Grid>
                        <Grid item md={1} sm={2} xs={2}>
                          <p className={classes.hide}>Bedrooms</p>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid align="left" item md={12} sm={12} xs={12}>
                      <Typography
                        style={{ marginLeft: "1em" }}
                        className={`${classes.typography} ${
                          classes.upgradestext
                        }`}
                      >
                        Your Home And Upgrades
                      </Typography>
                    </Grid>
                    <Grid align="center" item md={12} sm={12} xs={12}>
                      <hr className={classes.divider} />
                    </Grid>
                    <Grid align="center" item md={12} sm={12} xs={12}>
                      <Grid container direction="row" spacing={false}>
                        <Grid item md={4} xs={4} sm={4}>
                          <Typography className={classes.typography}>
                            Year Built:
                            <Typography className={classes.typographyStraight}>
                              {this.state.surveyData.yearbuilt}
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={4} sm={4}>
                          <Typography className={classes.typography}>
                            Bathroom Features
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={4} sm={4}>
                          <Typography className={classes.typography}>
                            Kitchen Features
                          </Typography>
                        </Grid>
                        <Grid item md={4} xs={4} sm={4}>
                          <Typography className={classes.typography}>
                            Backyard:
                          </Typography>
                          <Typography className={classes.typographyStraight}>
                            {this.state.backyardLandScape}
                          </Typography>
                          {this.state.pool.map((item, key) => {
                            return (
                              <Typography
                                className={classes.typographyStraight}
                              >
                                {item}
                              </Typography>
                            );
                          })}
                        </Grid>
                        <Grid item md={4} xs={4} sm={4}>
                          {this.state.bathroomExtras.map((item, i) => {
                            return (
                              <Typography
                                className={classes.typographyStraight}
                              >
                                {item}
                              </Typography>
                            );
                          })}
                        </Grid>
                        <Grid item md={4} xs={4} sm={4}>
                          {this.state.kitchenExtras.map((item, i) => {
                            return (
                              <Typography
                                className={classes.typographyStraight}
                              >
                                {item}
                              </Typography>
                            );
                          })}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid align="left" item md={12} xs={12} sm={12}>
                      <Typography
                        style={{ marginLeft: "1em" }}
                        className={`${classes.typography} ${
                          classes.upgradestext
                        }`}
                      >
                        All Extras
                      </Typography>
                    </Grid>
                    <Grid align="center" item md={12} xs={12} sm={12}>
                      <hr className={classes.divider} />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                      <Grid container align="left">
                        {this.state.backyardExtras.map((item, i) => {
                          return (
                            <ul>
                              <Grid item md={12}>
                                <li>
                                  <Typography
                                    className={classes.typographyStraight}
                                  >
                                    {item}
                                  </Typography>
                                </li>
                              </Grid>
                            </ul>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </MuiThemeProvider>
        </div>
      </Slide>
    );
  }
}

DetailsUpgrades.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailsUpgrades);
