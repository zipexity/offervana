import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";

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
    fontSize: "18px",
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
  button: {
    backgroundColor: theme.palette.primary,
    width: "65%",
    fontFamily: "VAGRounded Bold",
    color: "#F1F3F3",
    padding: "16px 32px",
    textDecoration: "none",
    marginTop: "1em",
    border: "0.4px solid #F1F3F3",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "#529aae",
      color: "#F1F3F3"
    },
    "&:hover": {
      backgroundColor: "#529aae",
      color: "#F1F3F3"
    }
  },
  hide: {
    visibility: "hidden"
  }
});

class PostSurvey extends React.Component {
  state = {
    survey: {},
    userid: null
  };

  componentDidMount = () => {
    APIserver.isLogged()
      .then(res => {
        if (
          Object.keys(res.data).length === 0 &&
          res.data.constructor === Object
        ) {
        } else {
          APIserver.singleUserReturn().then(response => {
            console.log("user response", response);
            this.setState({ userid: response.data.id });
            APIserver.surveyReturn(response.data.id).then(srv => {
              if (srv.data.length === 0) {
                let yearbuilt = parseInt(localStorage.getItem("q1buildyear"));
                let homesqft = parseInt(localStorage.getItem("q1homesqft"));
                let lotsize = parseInt(localStorage.getItem("q3lotsize"));
                let bedrooms = parseInt(localStorage.getItem("q1bedrooms"));
                let bathrooms = parseInt(localStorage.getItem("q1bathrooms"));
                let stories = localStorage.getItem("q1stories");
                let garagespots = parseInt(
                  localStorage.getItem("q1garagespaces")
                );
                let wastesystem = localStorage.getItem("q8wastesystem");
                let unitAC = "ac";
                let well = localStorage.getItem("q8well");
                let hoa = localStorage.getItem("q11hoa");
                let agelock = localStorage.getItem("q11agerestrict");
                let walkpantry = localStorage.getItem("q13walkpantry");
                let popcornceil = localStorage.getItem("q14popcornceil");
                let gatedcom = localStorage.getItem("q11gatedcomm");
                let chemcontam = localStorage.getItem("q16chemcontam");
                let foundationIss = localStorage.getItem("q16foundationIss");
                let solarpanels = localStorage.getItem("q16solarpanels");
                let extraroom = localStorage.getItem("q18extraroom");
                let extralive = localStorage.getItem("extralive");
                let ktapply = localStorage.getItem("q19ktapply");
                let island = localStorage.getItem("q20island");
                let newcabinets = localStorage.getItem("q20newCabinets");
                let tileBackSplash = localStorage.getItem("q20tileBackSplash");
                let ktRemod = localStorage.getItem("q21ktRemod");
                let ktcondition = localStorage.getItem("q22ktcondition");
                let doubleSink = localStorage.getItem("q23doubleSink");
                let graniteTile = localStorage.getItem("q23graniteTile");
                let sepTub = localStorage.getItem("q23sepTub");
                let tiledShowers = localStorage.getItem("q23tiledShowers");
                let updatedFloors = localStorage.getItem("q23updatedFloors");
                let bathremod = localStorage.getItem("q24bathremod");
                let masterbathcondition = localStorage.getItem(
                  "q25masterbathcondition"
                );
                let interiorpaintcondition = localStorage.getItem(
                  "q26interiorpaintcondition"
                );
                let wallcolor = localStorage.getItem("q27wallcolor");
                let frontlandscape = localStorage.getItem("q29frontyard");
                let backlandscape = localStorage.getItem("q30backyard");
                let yardfence = localStorage.getItem("q31yard");
                let powerlines = localStorage.getItem("q32powerlines");

                let bbq = localStorage.getItem("q34bbq");
                let coveredPatio = localStorage.getItem("q34coveredPatio");
                let firepit = localStorage.getItem("q34firepit");
                let gazebo = localStorage.getItem("q34gazebo");
                let yardhasnone = localStorage.getItem("q34none");
                let pavers = localStorage.getItem("q34pavers");
                let rvgate = localStorage.getItem("q34rvgate");
                let sportCourt = localStorage.getItem("q34sportCourt");
                let sprinklers = localStorage.getItem("q34sprinklers");
                let facade = localStorage.getItem("q35facade");
                let homestatus = localStorage.getItem("q36homestatus");
                let user = localStorage.getItem("q37user");
                let listed = localStorage.getItem("q38listed");
                let builder = localStorage.getItem("q39builder");
                let time = localStorage.getItem("q40time");
                let crownmold = localStorage.getItem("q41crownmold");
                let eightfeetdoor = localStorage.getItem("q41eightfeetdoor");
                let plantationshutter = localStorage.getItem(
                  "q41plantationshutter"
                );
                let recesseddoor = localStorage.getItem("q41recesseddoor");
                let tenfeetceil = localStorage.getItem("q41tenfeetceil");
                let twoinchblind = localStorage.getItem("q41twoinchblind");
                let vaultedceil = localStorage.getItem("q41vaultedceil");
                let countertype = localStorage.getItem("q42countertype");
                let carpet = localStorage.getItem("q43carpet");
                let hardwood = localStorage.getItem("q43hardwood");
                let laminate = localStorage.getItem("q43laminate");
                let tile = localStorage.getItem("q43tile");
                let otherfloortype = localStorage.getItem("q43other");
                let tileQual = localStorage.getItem("tileQual");
                let carpetQual = localStorage.getItem("carpetQual");
                let hardwoodQual = localStorage.getItem("hardwoodQual");
                let laminateQual = localStorage.getItem("laminateQual");

                let lamKit = localStorage.getItem("laminateLocationKitchen");
                let lamLiv = localStorage.getItem("laminateLocationLivingroom");
                let lamMbath = localStorage.getItem(
                  "laminateLocationMbathroom"
                );
                let lamMbed = localStorage.getItem("laminateLocationMbedroom");
                let lamOther = localStorage.getItem("laminateLocationOther");

                let carpKit = localStorage.getItem("carpetLocationKitchen");
                let carpLiv = localStorage.getItem("carpetLocationLivingroom");
                let carpMbath = localStorage.getItem("carpetLocationMbathroom");
                let carpMbed = localStorage.getItem("carpetLocationMbedroom");
                let carpOther = localStorage.getItem("carpetLocationOther");

                let hardKit = localStorage.getItem("hardwoodLocationKitchen");
                let hardLiv = localStorage.getItem(
                  "hardwoodLocationLivingroom"
                );
                let hardMbath = localStorage.getItem(
                  "hardwoodLocationMbathroom"
                );
                let hardMbed = localStorage.getItem("hardwoodLocationMbedroom");
                let hardOther = localStorage.getItem("hardwoodLocationOther");

                let tileKit = localStorage.getItem("tileLocationKitchen");
                let tileLiv = localStorage.getItem("tileLocationLivingroom");
                let tileMbath = localStorage.getItem("tileLocationMbathroom");
                let tileMbed = localStorage.getItem("tileLocationMbedroom");
                let tileOther = localStorage.getItem("tileLocationOther");

                let refrigerator = localStorage.getItem("refrigerator");
                let dishwasher = localStorage.getItem("dishwasher");
                let stove = localStorage.getItem("stove");
                let waterheater = localStorage.getItem("waterheater");
                let washerdryer = localStorage.getItem("washerdryer");

                let spaTub = localStorage.getItem("spaTub");
                let inGroundpool = localStorage.getItem("inGroundpool");
                let communitypool = localStorage.getItem("communitypool");

                let doubleOven = localStorage.getItem("doubleOven");
                let sepCookTop = localStorage.getItem("sepCookTop");
                let buildinMicro = localStorage.getItem("buildinMicro");
                let wallOven = localStorage.getItem("wallOven");

                let clientAgent = localStorage.getItem("clientAgent");

                let rooftype = localStorage.getItem("q44rooftype");
                let foundus = localStorage.getItem("q45foundus");

                let applyRemod = localStorage.getItem("applyRemod");
                let countertopRemod = localStorage.getItem("countertopRemod");
                let cabinetRemod = localStorage.getItem("cabinetsRemod");
                let flooringRemod = localStorage.getItem("flooringRemod");

                let mainfloorReplace = localStorage.getItem(
                  "mainflooringReplace"
                );
                let extRepaint = localStorage.getItem("extPaint");
                let userConcerns = localStorage.getItem("userConcerns");
                APIserver.surveyPost({
                  yearbuilt: yearbuilt,
                  homesqft: homesqft,
                  bedrooms: bedrooms,
                  bathrooms: bathrooms,
                  stories: stories,
                  garagespots: garagespots,
                  wastesystem: wastesystem,
                  unitAC: unitAC,
                  well: well,
                  hoa: hoa,
                  agelock: agelock,
                  walkpantry: walkpantry,
                  popcornceil: popcornceil,
                  gatedcom: gatedcom,
                  chemcontam: chemcontam,
                  foundationIss: foundationIss,
                  solarpanels: solarpanels,
                  extraroom: extraroom,
                  // extralive: extralive,
                  ktapply: ktapply,
                  island: island,
                  newcabinets: newcabinets,
                  tileBackSplash: tileBackSplash,
                  ktRemod: ktRemod,
                  ktcondition: ktcondition,
                  doubleSink: doubleSink,
                  graniteTile: graniteTile,
                  sepTub: sepTub,
                  tiledShowers: tiledShowers,
                  updatedFloors: updatedFloors,
                  bathremod: bathremod,
                  masterbathcondition: masterbathcondition,
                  interiorpaintcondition: interiorpaintcondition,
                  wallcolor: wallcolor,
                  frontlandscape: frontlandscape,
                  backlandscape: backlandscape,
                  yardfence: yardfence,
                  powerlines: powerlines,
                  bbq: bbq,
                  coveredPatio: coveredPatio,
                  firepit: firepit,
                  gazebo: gazebo,
                  yardhasnone: yardhasnone,
                  pavers: pavers,
                  rvgate: rvgate,
                  sportCourt: sportCourt,
                  sprinklers: sprinklers,
                  facade: facade,
                  homestatus: homestatus,
                  user: user,
                  listed: listed,
                  builder: builder,
                  time: time,
                  crownmold: crownmold,
                  eightfeetdoor: eightfeetdoor,
                  plantationshutter: plantationshutter,
                  recesseddoor: recesseddoor,
                  tenfeetceil: tenfeetceil,
                  twoinchblind: twoinchblind,
                  vaultedceil: vaultedceil,
                  countertype: countertype,
                  carpet: carpet,
                  hardwood: hardwood,
                  laminate: laminate,
                  otherfloortype: otherfloortype,
                  tile: tile,
                  tileQual: tileQual,
                  carpetQual: carpetQual,
                  hardwoodQual: hardwoodQual,
                  laminateQual: laminateQual,
                  laminateLocationKitchen: lamKit,
                  laminateLocationLivingroom: lamLiv,
                  laminateLocationMbathroom: lamMbath,
                  laminateLocationMbedroom: lamMbed,
                  laminateLocationOther: lamOther,

                  carpetLocationKitchen: carpKit,
                  carpetLocationLivingroom: carpLiv,
                  carpetLocationMbathroom: carpMbath,
                  carpetLocationMbedroom: carpMbed,
                  carpetLocationOther: carpOther,

                  hardwoodLocationKitchen: hardKit,
                  hardwoodLocationLivingroom: hardLiv,
                  hardwoodLocationMbathroom: hardMbath,
                  hardwoodLocationMbedroom: hardMbed,
                  hardwoodLocationOther: hardOther,

                  refrigerator: refrigerator,
                  dishwasher: dishwasher,
                  stove: stove,
                  waterheater: waterheater,
                  washerdryer: washerdryer,

                  spaTub: spaTub,
                  inGroundpool: inGroundpool,
                  communitypool: communitypool,

                  doubleOven: doubleOven,
                  sepCookTop: sepCookTop,
                  buildinMicro: buildinMicro,
                  wallOven: wallOven,

                  clientAgent: clientAgent,

                  applyRemod: applyRemod,
                  countertopRemod: countertopRemod,
                  cabinetRemod: cabinetRemod,
                  flooringRemod: flooringRemod,

                  extRepaint: extRepaint,

                  mainfloorReplace: mainfloorReplace,

                  tileLocationKitchen: tileKit,
                  tileLocationLivingroom: tileLiv,
                  tileLocationMbathroom: tileMbath,
                  tileLocationMbedroom: tileMbed,
                  tileLocationOther: tileOther,
                  rooftype: rooftype,
                  foundus: foundus,
                  userConcerns: userConcerns,
                  UserId: response.data.id
                }).then(tsk => {
                  APIserver.updateUser({
                    id: response.data.id,
                    status: "surveysub",
                    detailsUpgrades: true,
                    iandD: true
                  }).then(ret => console.log("survey submitted", ret));
                });
              } else {
                console.log("youve already submitted");
                if (response.data.status === "created") {
                  APIserver.updateUser({
                    id: response.data.id,
                    status: "surveysub",
                    detailsUpgrades: true,
                    iandD: true
                  }).then(ret => console.log("survey submitted", ret));
                }
              }
            });
          });
        }
      })
      .catch(err => {
        if (err) console.log(err);
      });
  };

  render() {
    const submitButton = props => (
      <Link to={`/images?id=${this.state.userid}`} {...props} />
    );
    const profileButton = props => (
      <Link to={`/multi?id=${this.state.userid}`} {...props} />
    );
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Grid direction="column" container spacing={24}>
            <Grid item md={1}>
              <p style={{ visibility: "hidden" }}>t</p>
            </Grid>
            <Grid direction="row" container spacing={24}>
              <Grid align="center" item md={2} xs={false} />
              <Grid align="center" item xs={12} md={8}>
                <SurveyDiv>
                  <Grid item md={12}>
                    <Grid direction="row" container spacing={24}>
                      <Grid align="center" item md={1} sm={false} xs={false} />
                      <Grid align="center" item md={10} sm={12} xs={12}>
                        <Typography
                          variant="h4"
                          color="inherit"
                          className={classes.title}
                        >
                          Thank you for submitting your Home Survey!
                        </Typography>
                        <hr />
                      </Grid>
                      <Grid item md={12} xs={12} sm={12} align="center">
                        <Typography
                          color="inherit"
                          className={classes.titleStraight}
                          style={{ fontSize: "18px" }}
                        >
                          In order to get the best possible price for your home
                          please upload current and clear photos.
                        </Typography>
                      </Grid>
                      <Grid item md={12} xs={12} sm={12} align="center">
                        <Typography
                          color="inherit"
                          className={classes.titleStraight}
                          style={{ fontSize: "18px" }}
                        >
                          (Oh by the way, if you live in your home and it's a
                          bit messy - no worries, we can see past that; upload
                          your pics anyway.)
                        </Typography>
                      </Grid>
                      <Grid item md={4} xs={false}>
                        <p className={classes.hide}>t</p>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <Button
                          size="large"
                          color="primary"
                          variant="contained"
                          className={classes.button}
                          component={submitButton}
                        >
                          Submit Photos
                        </Button>
                      </Grid>
                      <Grid item md={4} xs={false}>
                        <p className={classes.hide}>t</p>
                      </Grid>
                      <Grid item md={4} xs={false}>
                        <p className={classes.hide}>t</p>
                      </Grid>
                      <Grid item md={4} xs={12}>
                        <Button
                          size="large"
                          color="primary"
                          variant="contained"
                          className={classes.button}
                          component={profileButton}
                        >
                          I'll Do It Later
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </SurveyDiv>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

PostSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostSurvey);
