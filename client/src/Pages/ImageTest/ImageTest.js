import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import APIserver from "../../Utils/api/APIserver";
import Lottie from "react-lottie";
import animationData from "./animations";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Footer from "../HomePage/footer";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});
const styles = theme => ({
  root: {
    flewGrow: 1,
    marginTop: "10px",
    marginBottom: "200px"
  },
  Typography: {
    color: "5E5E5E",
    fontSize: "28px",
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
  formBox: {
    width: "100%"
  },
  title: {
    color: "white",
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
  Button: {
    fontFamily: "VAGRounded",
    fontSize: "24px",
    backgroundColor: "#46A1BA",
    width: "50%",
    color: "white",
    padding: "8px",
    textDecoration: "none",
    margin: "4px 2px",
    borderRadius: "0.1em",
    border: "0.5px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      outline: "none"
    },
    boxShadow: "2px 2px 5px grey",
    [theme.breakpoints.down("sm")]: {
      width: "60%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%"
    }
  },
  form: {
    padding: "12px 20px !important"
  },
  hide: {
    visibility: "hidden"
  },
  imageDiv: {
    width: "250px",
    height: "250px",
    marginTop: "3em",
    marginLeft: "1em",
    marginRight: "1em"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageTitleDiv: {
    backgroundColor: "#46A1BA",
    height: "50px",
    borderRadius: "0.1em"
  },
  textinDiv: {
    position: "relative",
    top: "0.3em",
    fontSize: "24px"
  },
  finishedButton: {
    width: "100%",
    color: "#F1F3F3",
    textDecoration: "none",
    fontFamily: "VAGRounded Bold",
    fontSize: "18px",
    border: "0.4px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "#529aae",
      color: "#F1F3F3"
    },
    "&:hover": {
      backgroundColor: "#529aae",
      color: "#F1F3F3",
      width: "100%"
    }
  },
  submitButton: {
    width: "30% !important"
  }
});

class ImageTest extends React.Component {
  state = {
    userid: null,
    images: [],
    imageSteps: [
      "Front of House",
      "Back of House",
      "Living Area",
      "Master Bathroom",
      "Master Bedroom",
      "Flooring"
    ],
    bathroomExtras: [],
    kitchenExtras: [],
    backyardExtras: [],
    backyardLandScape: "",
    extraRooms: [],
    pool: ""
  };

  componentDidMount = () => {
    APIserver.isLogged().then(res => {
      if (!res.data) {
        this.props.history.push("/api/login");
      } else {
        if (res.data.role === "agent") {
          let tempUser = this.props.history.location.search.split("=");
          let userId = tempUser[1];
          this.setState({ userid: userId });
          APIserver.imageReturn(this.state.userid).then(image => {
            let imageHolder = [];
            image.data.map((item, key) => {
              imageHolder.push({
                id: item.id,
                url: item.url
              });
            });
            this.setState({ images: imageHolder });
            this.findSurvey();
          });
        } else {
          APIserver.singleUserReturn(res.data.id).then(response => {
            this.setState({ userid: response.data.id });
            APIserver.imageReturn(this.state.userid).then(image => {
              let imageHolder = [];
              image.data.map((item, key) => {
                imageHolder.push({
                  id: item.id,
                  url: item.url
                });
              });
              this.setState({ images: imageHolder });
              this.findSurvey();
            });
          });
        }
      }
    });
  };

  findSurvey = () => {
    APIserver.surveyReturn(this.state.userid).then(res => {
      let info = res.data[0];
      this.setState({ surveyData: info });
      console.log(res.data);
      this.findBathExtras();
      this.findKitchenExtras();
      this.findBackyardExtras();
      this.findextraRooms();
      this.combineArrays();
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
    let pool;
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
    }

    switch (this.state.surveyData.pool) {
      case "aboveGround":
        pool = "Above Ground Pool";
        break;
      case "inGround":
        pool = "In Ground Pool";
        break;
      case "community":
        pool = "Community Pool";
        break;
      case "no":
        pool = "No Pool";
        break;
      default:
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

  combineArrays = () => {
    this.setState({
      imageSteps: [
        "Front of House",
        "Back of House",
        "Living Area",
        "Master Bathroom",
        "Master Bedroom",
        "Flooring",
        this.state.backyardLandScape,
        this.state.pool
      ]
    });
    this.state.backyardExtras.map((item, key) => {
      this.setState({ imageSteps: [...this.state.imageSteps, item] });
    });

    this.state.extraRooms.map((item, key) => {
      this.setState({ imageSteps: [...this.state.imageSteps, item] });
    });

    this.state.kitchenExtras.map((item, key) => {
      this.setState({ imageSteps: [...this.state.imageSteps, item] });
    });
  };

  render() {
    const { classes } = this.props;
    const multiOfferPlatform = props => (
      <Link to={`/multi?UserId=${this.state.userid}`} {...props} />
    );
    return (
      <div>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid direction="column" container spacing={24}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid direction="row" container spacing={24}>
                <Grid align="center" item md={1} xs={false} sm={false} />
                <Grid align="center" item xs={12} md={10} sm={12}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12} sm={12}>
                      <Grid direction="column" container spacing={24}>
                        <Grid item md={12} sm={12} xs={12}>
                          <Grid container direction="row" align="center">
                            <Grid item md={4} xs={12} sm={6}>
                              <Grid item md={4} sm={6} xs={12}>
                                <Button
                                  size="large"
                                  variant="contained"
                                  color="primary"
                                  component={multiOfferPlatform}
                                  className={classes.finishedButton}
                                >
                                  Done Submitting
                                </Button>
                              </Grid>
                            </Grid>
                            <Grid item md={12} xs={12} sm={12} align="center">
                              <Typography className={classes.Typography}>
                                Please Upload An Image Of:{" "}
                                {
                                  this.state.imageSteps[
                                    this.state.images.length
                                  ]
                                }
                              </Typography>
                            </Grid>
                            <Grid item md={12} xs={12} sm={12} align="center">
                              <Grid container direction="row" align="center">
                                <Grid item md={12} xs={12} sm={12}>
                                  <form
                                    className={classes.formBox}
                                    action={`/api/imagesupload?UserId=${
                                      this.state.userid
                                    }`}
                                    method="post"
                                    encType="multipart/form-data"
                                  >
                                    <Grid item md={12} sm={12} xs={12}>
                                      <input
                                        className={`${classes.Button} ${
                                          classes.form
                                        }`}
                                        type="file"
                                        name="image"
                                      />
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12}>
                                      <input
                                        className={`${classes.Button} ${
                                          classes.submitButton
                                        }`}
                                        type="submit"
                                        name="submit"
                                      />
                                    </Grid>
                                  </form>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid align="center" item md={12} xs={12}>
                          <Grid container direction="row" spacing={24}>
                            {this.state.images.map((item, key) => {
                              return (
                                <Grid item md={4} xs={12} sm={6}>
                                  <div className={classes.imageDiv}>
                                    <div className={classes.imageTitleDiv}>
                                      <Typography
                                        className={`${classes.title} ${
                                          classes.textinDiv
                                        }`}
                                      >
                                        {this.state.imageSteps[key]}
                                      </Typography>
                                    </div>
                                    <img
                                      src={item.url}
                                      className={classes.image}
                                    />
                                  </div>
                                </Grid>
                              );
                            })}
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
        <Footer />
      </div>
    );
  }
}

ImageTest.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageTest);
