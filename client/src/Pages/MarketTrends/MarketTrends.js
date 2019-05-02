import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Offervanalogo from "../../Utils/Images/Offervanalogo.png";
import Grid from "@material-ui/core/Grid";
import BackButton from "../../Components/BackButton/BackButton";
import { Typography } from "@material-ui/core";
import APIserver from "../../Utils/api/APIserver";
import Send from "@material-ui/icons/Send";
import calenderhouse from "../../Utils/Images/calenderhouse.png";
import graphhouse from "../../Utils/Images/graphhouse.png";
import markethouse from "../../Utils/Images/markethouse.png";
import targethouse from "../../Utils/Images/targethouse.png";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const styles = theme => ({
  root: {
    width: "90%",
    overflowX: "auto"
  },

  title: {
    color: "#5E5E5E",
    fontSize: "22px",
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
    fontSize: "24px",
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
  imageHold: {
    width: "350px",
    height: "55px",
    position: "relative",
    top: "1em",
    [theme.breakpoints.down("sm")]: {
      top: "1em"
    },
    [theme.breakpoints.down("xs")]: {
      top: "1em"
    }
  },
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  header: {
    fontSize: "32px !important"
  },
  hr: {
    width: "400px"
  },
  backButton: {
    position: "relative",
    left: "2.5em",
    top: "1em"
  },
  hidden: {
    visibility: "hidden"
  },
  houseDiv: {
    width: "125px",
    height: "100px"
  },
  markethouseImage: {
    widht: "100%",
    height: "100%"
  }
});

class MarketTrends extends React.Component {
  state = {};

  componentDidMount = () => {};

  componentDidMount = () => {
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    this.setState({ userid: UserId });
    APIserver.isLogged().then(res => {
      if (
        Object.keys(res.data).length === 0 &&
        res.data.constructor === Object
      ) {
        return;
      } else {
        if (res.data.role === "client") {
          APIserver.multiofferUserReturn().then(response => {
            if (response.data) {
              if (
                Object.keys(response.data).length === 0 &&
                response.data.constructor === Object
              ) {
                return;
              } else {
                this.setState({
                  marketHistoryNum: response.data.marketHistoryNum,
                  marketHistoryPerc: response.data.marketHistoryPerc,
                  oneYearNum: response.data.oneYearNum,
                  oneYearPerc: response.data.oneYearPerc,
                  projDom: response.data.projDom,
                  proprangeOne: response.data.proprangeOne,
                  proprangeTwo: response.data.proprangeTwo
                });
              }
            } else {
              this.props.history.push(`/createuser`);
            }
          });
        } else if (res.data.role === "agent") {
          console.log("yes");
          APIserver.multiofferUserReturn(this.state.userid).then(response => {
            console.log(response.data);
            if (response.data) {
              if (
                Object.keys(response.data).length === 0 &&
                response.data.constructor === Object
              ) {
                return;
              } else {
                console.log(response.data);
                this.setState({
                  marketHistoryNum: response.data.marketHistoryNum,
                  marketHistoryPerc: response.data.marketHistoryPerc,
                  oneYearNum: response.data.oneYearNum,
                  oneYearPerc: response.data.oneYearPerc,
                  projDom: response.data.projDom,
                  proprangeOne: response.data.proprangeOne,
                  proprangeTwo: response.data.proprangeTwo
                });
              }
            } else {
            }
          });
        }
      }
    });
  };

  render() {
    const backButton = props => (
      <Link to={`/multi?id=${this.state.userid}`} {...props} />
    );
    const { classes } = this.props;
    return (
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <div className={classes.flex}>
          <MuiThemeProvider theme={theme}>
            <Grid direction="column" container spacing={8}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid direction="row" container spacing={8}>
                <Grid item md={1} xs={false} sm={false} />
                <Grid item md={1} xs={false} sm={false} />
                <Grid item md={1} xs={false} sm={false} />
                <Grid item md={6} sm={12} xs={12}>
                  <SurveyDiv>
                    <Grid container direction="row" spacing={24}>
                      <Grid item md={1} sm={1} xs={1}>
                        <div className={classes.backButton}>
                          <BackButton
                            size="small"
                            variant="contained"
                            color="primary"
                            component={backButton}
                          />
                        </div>
                      </Grid>
                      <Grid item md={10} sm={12} xs={12} align="center">
                        <div className={classes.imageHold}>
                          <img src={Offervanalogo} className={classes.image} />
                        </div>
                      </Grid>
                      <Grid item md={12} xs={12} sm={12} align="center">
                        <Typography
                          className={`${classes.title} ${classes.header}`}
                        >
                          Market Trends
                        </Typography>
                        <hr className={classes.hr} />
                      </Grid>
                      <Grid item md={1} xs={1} sm={1} />
                      <Grid item md={3} xs={3} sm={3}>
                        <div className={classes.houseDiv}>
                          <img
                            src={markethouse}
                            className={classes.markethouseImage}
                          />
                        </div>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3}>
                        <Typography className={classes.titleStraight}>
                          Property Value Range
                        </Typography>
                      </Grid>
                      <Grid item md={4} xs={4} sm={4}>
                        <Typography className={classes.title}>
                          ${this.state.proprangeOne} - $
                          {this.state.proprangeTwo}
                        </Typography>
                      </Grid>
                      <Grid item md={1} sm={false} xs={false} />
                      <Grid item md={1} sm={1} xs={1} />
                      <Grid item md={3} sm={3} xs={3}>
                        <div className={classes.houseDiv}>
                          <img
                            src={targethouse}
                            className={classes.markethouseImage}
                          />
                        </div>
                      </Grid>
                      <Grid item md={3} sm={3} xs={3}>
                        <Typography className={classes.titleStraight}>
                          30 Day Market History
                        </Typography>
                      </Grid>
                      <Grid item md={3} sm={3} xs={3} align="right">
                        <Typography className={classes.title}>
                          ${this.state.marketHistoryNum}
                        </Typography>
                        <Typography className={classes.title}>
                          ({this.state.marketHistoryPerc}%)
                        </Typography>
                      </Grid>
                      <Grid item md={2} xs={2} sm={2} />
                      <Grid item md={1} xs={1} sm={1} />
                      <Grid item md={3} xs={3} sm={3}>
                        <div className={classes.houseDiv}>
                          <img
                            src={graphhouse}
                            className={classes.markethouseImage}
                          />
                        </div>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3}>
                        <Typography className={classes.titleStraight}>
                          One Year Forecast
                        </Typography>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3} align="right">
                        <Typography className={classes.title}>
                          ${this.state.oneYearNum}
                        </Typography>
                        <Typography className={classes.title}>
                          ({this.state.oneYearPerc}%)
                        </Typography>
                      </Grid>
                      <Grid item md={2} xs={2} sm={2} />
                      <Grid item md={1} xs={1} sm={1} />
                      <Grid item md={3} xs={3} sm={3}>
                        <div className={classes.houseDiv}>
                          <img
                            src={calenderhouse}
                            className={classes.markethouseImage}
                          />
                        </div>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3}>
                        <Typography className={classes.titleStraight}>
                          Projected Days On Market
                        </Typography>
                      </Grid>
                      <Grid item md={3} xs={3} sm={3} align="right">
                        <Typography className={classes.title}>
                          {this.state.projDom}
                        </Typography>
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

MarketTrends.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MarketTrends);
