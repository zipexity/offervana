import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import APIserver from "../../Utils/api/APIserver";
import { Typography } from "@material-ui/core";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";

const styles = theme => ({
  root: {
    flewGrow: 1
  },
  hide: {
    visibility: "hidden"
  },
  LeftArrow: {
    marginLeft: theme.spacing.unit
  },
  leftButton: {
    marginTop: "1em",
    backgroundColor: "#46A1BA"
  },
  mainHead: {
    fontSize: "48px !important"
  },
  typography: {
    color: "#5E5E5E",
    fontSize: "20px",
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
  title: {
    color: "#5E5E5E",
    fontSize: "22px",
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
    backgroundColor: "#e3e3e3",
    height: "105%",
    boxShadow: "4px 4px 15px grey"
  },
  agelock: {
    position: "relative",
    right: "2em"
  },
  secHead: {
    fontSize: "30px !important"
  }
});

class ViewSurvey extends React.Component {
  state = {
    survey: []
  };

  componentDidMount = () => {
    APIserver.isLogged().then(res => {
      if (res.data.role === "agent") {
        this.surveyData();
      } else {
        window.location.replace("/");
      }
    });
  };

  surveyData = () => {
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    let user = this.props.history.location.search.split("=");
    this.setState({ UserId: user[1] });
    APIserver.multiofferUserReturn(user[1]).then(res => {
      this.setState({ agentId: res.data.AgentId });
      APIserver.surveyReturn(UserId).then(res => {
        console.log(res.data);
        this.setState({ survey: res.data });
      });
    });
  };

  render() {
    const backButton = props => (
      <Link to={`/dashboard?AgentId=${this.state.agentId}`} {...props} />
    );
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid direction="column" container spacing={24}>
          <Grid item md={1}>
            <p style={{ visibility: "hidden" }}>t</p>
          </Grid>
          <Grid direction="row" container spacing={24}>
            <Grid align="center" item md={1} xs={false} sm={false} />
            <Grid align="center" item xs={12} md={10} sm={12}>
              <SurveyDiv>
                <Grid direction="row" container spacing={16}>
                  <Grid item md={2} xs={2} sm={2}>
                    <Button
                      className={classes.leftButton}
                      size="small"
                      variant="contained"
                      color="primary"
                      component={backButton}
                    >
                      <LeftArrow className={classes.LeftArrow} />
                    </Button>
                  </Grid>
                  <Grid item md={8} sm={10} xs={10}>
                    <Typography
                      className={`${classes.typography} ${classes.mainHead}`}
                      variant="h3"
                    >
                      Survey Answers
                    </Typography>
                    <hr />
                  </Grid>
                </Grid>
                {this.state.survey.map((item, key) => {
                  console.log(item);
                  return (
                    <div>
                      <div>
                        <Grid item md={12} xs={12} sm={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Specs Of The Property
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Age Restricted Community:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.agelock}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Bathrooms:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.bathrooms}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Chemical Contamination:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.chemcontam}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Community Pool:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.communitypool}
                            </Typography>
                          </Grid>

                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Crown Molds:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.crownmold}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Eight Foot Doors:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.eightfeetdoor}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Extra Live Space:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.extraroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Permitted Extra Room:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.extralive}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Garage Spaces/Car Ports:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.garagespots}
                            </Typography>
                          </Grid>

                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Gated Community:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.gatedcom}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              HOA:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hoa}
                            </Typography>
                          </Grid>
                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Home Squarefootage:
                            </Typography>
                          </Grid>
                          <Grid item md={1} xs={6} sm={6}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.homesqft}
                            </Typography>
                          </Grid>

                          <Grid item md={3} xs={6} sm={6}>
                            <Typography className={classes.typography}>
                              Home Status:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.homestatus}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              In Ground Pool:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.inGroundpool}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Home Listed:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.listed}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Plantation Shutters:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.plantationshutter}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Popcorn Ceilings:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.popcornceil}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Power Lines:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.powerlines}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Recessed Doors:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.recesseddoor}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Solar Panels:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.solarpanels}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Stories:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.stories}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Two Inch Blinds:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.twoinchblind}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Vaulted Ceilings:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.vaultedceil}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Washer/Dryer Replacement:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.washerdryer}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Waste System:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.wastesystem}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Water Heater Replacement:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.waterheater}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Well:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.well}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Year Built:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.yearbuilt}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>
                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Kitchen
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Appliance Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.applyRemod}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Back Splash:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileBackSplash}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Built In Microwave
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.buildinMicro}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Cabinet Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.cabinetRemod}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Countertop Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.countertopRemod}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Counter Type:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.countertype}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Dishwasher Needs Replaced:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.dishwasher}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Double Oven:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.doubleOven}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Kitchen Island:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.island}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Kitchen Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.ktRemod}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Appliance Color:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.ktapply}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Double Oven:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.doubleOven}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Kitchen Island:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.island}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Kitchen Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.ktRemod}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Appliance Color:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.ktapply}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Kitchen Condition:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.ktcondition}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              New Cabinets:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.newcabinets}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Fridge Needs Replacement:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.refrigerator}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Sep Cook Top:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.sepCookTop}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Stove Needs Replacement:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.stove}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Walk In Pantry:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.walkpantry}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Wall Oven:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.wallOven}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>

                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Flooring
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpet}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Kitchen:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetLocationKitchen}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Livespace/Liveroom:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetLocationLivingroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Mbath:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetLocationMbathroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Mbedroom:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetLocationMbedroom}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Other Room(s):
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetLocationOther}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Carpet Quality:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.carpetQual}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Flooring Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.flooringRemod}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwood}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Kitchen:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodLocationKitchen}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Livespace/Liveroom
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodLocationLivingroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Mbath:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodLocationMbathroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Mbedroom:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodLocationMbedroom}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Other Room(s):
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodLocationOther}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Hardwood Quality:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.hardwoodQual}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminate}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Kitchen:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateLocationKitchen}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Livespace/Liveroom
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateLocationLivingroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Mbath:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateLocationMbathroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Mbedroom:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateLocationMbedroom}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Other Room(s):
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateLocationOther}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Laminate Quality:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.laminateQual}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Main Floor Replaced:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.mainfloorReplace}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Other Floor Type:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.otherfloortype}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tile}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Kitchen:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileLocationKitchen}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Livespace/Liveroom
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileLocationLivingroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Mbath:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileLocationMbathroom}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Mbedroom:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileLocationMbedroom}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Other Room(s):
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileLocationOther}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tile Quality:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tileQual}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>

                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Bathroom
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Bath Remodel:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.bathremod}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Double Sink:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.doubleSink}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Granite Tiling:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.graniteTile}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Mbath Condition:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.masterbathcondition}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Seperate Tub:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.sepTub}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Tiled Showers:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.tiledShowers}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Updated Floors:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.updatedFloors}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>

                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Paint
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Exterior Repaint:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.extRepaint}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Facade:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.facade}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Interior Paint:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.interiorpaintcondition}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Wall Color:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.wallcolor}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>

                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            Landscaping/Backyard
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Backland Scape:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.backlandscape}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Firepit:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.firepit}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Front landscape:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.frontlandscape}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Gazebo:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.gazebo}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Pavers:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.pavers}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              RV Gate:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.rvgate}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Spa/Hot Tub:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.spaTub}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Sport Court:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.sportCourt}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Sprinklers:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.sprinklers}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Fence:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.yardfence}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>

                      <div>
                        <Grid item md={12} align="center">
                          <Typography
                            className={`${classes.typography} ${
                              classes.secHead
                            }`}
                          >
                            User
                          </Typography>
                        </Grid>
                        <Grid container direction="row" spacing={16}>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Working With Builder:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.builder}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Clients Agent:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.clientAgent}
                            </Typography>
                          </Grid>

                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              How Found Us:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.foundus}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Wants To Sell By:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.time}
                            </Typography>
                          </Grid>
                          <Grid item md={3}>
                            <Typography className={classes.typography}>
                              Relationship to Home:
                            </Typography>
                          </Grid>
                          <Grid item md={1}>
                            <Typography
                              className={`${classes.title} ${classes.agelock}`}
                            >
                              {item.user}
                            </Typography>
                          </Grid>
                        </Grid>
                        <hr />
                      </div>
                    </div>
                  );
                })}
              </SurveyDiv>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ViewSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewSurvey);
