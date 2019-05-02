import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Offervanalogo from "../../Utils/Images/Offervanalogo.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Checkmark from "../../Utils/Images/Check mark.svg";
import Dash from "../../Utils/Images/Dash.svg";
const styles = theme => ({
  cardHolder: {
    marginLeft: "18px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginBottom: "0em"
    }
  },
  Typography: {
    color: "#6b7381",
    fontSize: "20px",
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
  cards: {
    display: "inline-block",
    fontFamily: "VAGRounded Bold",
    backgroundColor: "#dadde7",
    textAlign: "center",
    fontSize: "24px",
    color: "#36454f",
    fontWeight: "600",
    width: "100%",
    height: "3em",
    paddingTop: "1em",
    position: "relative",
    top: "0px !important"
  },
  market: {
    backgroundColor: "#f5f8fb",
    borderRadius: "4px",
    width: "80%",
    overflow: "hidden",
    paddingBottom: "8.5em",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginRight: "2em",
      zIndex: "0"
    }
  },
  headerTwo: {
    backgroundColor: "#46A1BA",
    display: "inline-block",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: "600",
    width: "100%",
    height: "4em"
  },
  list: {
    padding: "12px 32px",
    display: "block",
    marginTop: "-2em"
  },
  listItem: {
    marginTop: "1.5em",
    fontSize: "20px",
    fontFamily: "VAGRounded",
    listStyleType: "none"
  },
  li: {
    listStyleType: "none"
  },
  ibuyers: {
    backgroundColor: "#f5f8fb",
    borderRadius: "4px",
    width: "80%",
    overflow: "hidden",
    paddingBottom: "0em",
    position: "relative",
    right: "30px",
    zIndex: "0",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-1.5em",
      right: "0px",
      width: "100%",
      zIndex: "0"
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "-1.5em",
      right: "0px",
      width: "100%",
      zIndex: "0"
    }
  },
  offervana: {
    backgroundColor: "#ffffff",
    boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: "99",
    borderRadius: "4px",
    overflow: "hidden",
    width: "100%",
    right: "1.5em",
    top: "-1.5em",
    paddingBottom: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      right: "0em",
      zIndex: "0"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      right: "0em",
      zIndex: "0"
    },
    [theme.breakpoints.down("md")]: {
      width: "100.5%",
      right: "0em",
      zIndex: "99"
    }
  },
  image: {
    width: "200px",
    margin: "20px auto"
  },
  checkHold: {
    width: "55px",
    height: "55px",
    // float: "left",
    position: "relative",
    top: "-15px",
    right: "20px"
  },
  checkHoldNew: {
    [theme.breakpoints.down("sm")]: {
      right: "50px !important"
    },
    [theme.breakpoints.down("xs")]: {
      right: "20px !important"
    }
  },
  check: {
    width: "100%",
    height: "100%"
  },
  dashHold: {
    width: "60px",
    height: "60px",
    float: "left",
    position: "relative",
    top: "-20px",
    right: "18px"
  },
  dash: {
    width: "100%",
    height: "100%"
  },
  maxPrice: {
    position: "relative",
    right: "37px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "5%"
    }
  },
  fidicRep: {
    position: "relative",
    right: "30px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "5%"
    }
  },
  unCertSale: {
    position: "relative",
    right: "45px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "5%"
    }
  },
  incovenLife: {
    position: "relative",
    right: "74px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "25%"
    }
  },
  unqualBuyer: {
    position: "relative",
    right: "120px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "28%"
    }
  },
  openHouses: {
    position: "relative",
    right: "132px",
    width: "450px",
    [theme.breakpoints.down("sm")]: {
      right: "10%"
    },
    [theme.breakpoints.down("xs")]: {
      right: "37%"
    }
  }
});

function HomePageCards(props) {
  const { classes } = props;
  return (
    <Grid
      container
      direction="row"
      align="center"
      className={classes.cardHolder}
    >
      <Grid item md={4} xs={12} sm={12} align="right">
        <div className={classes.market}>
          <Grid item md={12} sm={12} align="center">
            <div className="list-of-markit">
              <Typography className={classes.cards} variant="h4">
                Listed On Market
              </Typography>
            </div>
            <ul className={`ul-list ${classes.list}`}>
              <li className={`list-li ${classes.listItem}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div
                      className={`icon-cover ${classes.checkHold} ${
                        classes.checkHoldNew
                      }`}
                    >
                      <img
                        src={Checkmark}
                        className={`check-icon ${classes.check}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Maximized sales price
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div
                      className={`icon-cover ${classes.checkHold} ${
                        classes.checkHoldNew
                      }`}
                    >
                      <img
                        src={Checkmark}
                        className={`check-icon ${classes.check}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.fidicRep}`}
                    >
                      Fiduciary representation
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div className={`icon-cover ${classes.checkHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.unCertSale}`}
                    >
                      Uncertain sales time
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div className={`icon-cover ${classes.checkHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.incovenLife}`}
                    >
                      Inconvenient lifestyle
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div className={`icon-cover ${classes.checkHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.unqualBuyer}`}
                    >
                      Possible unqualified buyers
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} sm={2} xs={2}>
                    <div className={`icon-cover ${classes.checkHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} sm={10} xs={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.openHouses}`}
                    >
                      Hours of open houses
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            </ul>
          </Grid>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12}>
        <div className={classes.offervana}>
          <div className={classes.headerTwo}>
            <img
              className={`offical-logo ${classes.image}`}
              src={Offervanalogo}
            />
          </div>
          <ul className={`ul-list ${classes.list}`}>
            <li className={`list-li ${classes.listItem}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Proprietary Multioffer Platform
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    All your iBuyer offers in one place
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Agent offer and market trends
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Transparency of fees and net proceeds
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Side by side comparison
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Agent representation and negotiation for offer, inspection
                    and closing
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Avoid hours of submissions
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li className={`list-li ${classes.li}`}>
              <Grid container direction="row">
                <Grid item md={2} xs={2} sm={2}>
                  <div className={`icon-cover ${classes.checkHold}`}>
                    <img
                      src={Checkmark}
                      className={`check-icon ${classes.check}`}
                    />
                  </div>
                </Grid>
                <Grid item md={10} xs={10} sm={10}>
                  <Typography
                    className={`${classes.Typography} ${classes.maxPrice}`}
                  >
                    Avoid countless text messages, emails, and phone calls from
                    iBuyers and agents
                  </Typography>
                </Grid>
              </Grid>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item md={4} xs={12} sm={12} align="left">
        <div className={classes.ibuyers}>
          <Grid item md={12} xs={12} sm={12} align="center">
            <div>
              <Typography className={classes.cards} variant="h4">
                iBuyers
              </Typography>
            </div>
            <ul className={`ul-list ${classes.list}`}>
              <li className={`list-li ${classes.listItem}`}>
                <Grid container direction="row">
                  <Grid item md={2} xs={2} sm={2}>
                    <div
                      className={`icon-cover ${classes.checkHold} ${
                        classes.checkHoldNew
                      }`}
                    >
                      <img
                        src={Checkmark}
                        className={`check-icon ${classes.check}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={10} xs={10} sm={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Close on your timeline
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} xs={2} sm={2}>
                    <div
                      className={`icon-cover ${classes.checkHold} ${
                        classes.checkHoldNew
                      }`}
                    >
                      <img
                        src={Checkmark}
                        className={`check-icon ${classes.check}`}
                      />
                    </div>
                  </Grid>
                  <Grid item md={10} xs={10} sm={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Sell with no showings, animal boarding or interruption of
                      lifestyle
                    </Typography>
                  </Grid>
                </Grid>
              </li>

              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} xs={2} sm={2}>
                    <div className={`icon-cover ${classes.dashHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} xs={10} sm={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Hours of submitting your property and uploading photos to
                      multiple websites
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} xs={2} sm={2}>
                    <div className={`icon-cover ${classes.dashHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} xs={10} sm={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Countless text messages, emails, and phone calls from each
                      company
                    </Typography>
                  </Grid>
                </Grid>
              </li>
              <li className={`list-li ${classes.li}`}>
                <Grid container direction="row">
                  <Grid item md={2} xs={2} sm={2}>
                    <div className={`icon-cover ${classes.dashHold}`}>
                      <img src={Dash} className={`dash-icon ${classes.dash}`} />
                    </div>
                  </Grid>
                  <Grid item md={10} xs={10} sm={10}>
                    <Typography
                      className={`${classes.Typography} ${classes.maxPrice}`}
                    >
                      Uncertain variable fees
                    </Typography>
                  </Grid>
                </Grid>
              </li>
            </ul>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

HomePageCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePageCards);
