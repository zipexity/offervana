import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import Slide from "@material-ui/core/Slide";
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
  form: {
    width: "75%",
    padding: "16px 32px",
    border: "1px solid #46A1BA",
    "&:focus": {
      border: "3px solid #46A1BA",
      outline: "none"
    },
    boxShadow: "2px 2px 5px grey",
    marginBottom: "8px"
  },
  loginButton: {
    fontFamily: "VAGRounded",
    backgroundColor: "#46A1BA",
    fontSize: "32px",
    width: "40%",
    color: "white",
    padding: "24px",
    textDecoration: "none",
    margin: "4px 2px",
    border: "0.5px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      border: "1.5px solid #46A1BA"
    },
    boxShadow: "2px 2px 5px grey",
    borderRadius: "1em"
  },
  hide: {
    visibility: "hidden"
  },
  typography: {
    color: "#5E5E5E",
    fontFamily: [
      "VAGRounded Bold",
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
    fontFamily: [
      "VAGRounded",
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
    height: "225%",
    boxShadow: "4px 4px 15px grey"
  },
  radio: {
    color: "#46A1BA"
  }
});

class BuildMarketTrends extends React.Component {
  state = {
    offerType: "",
    offerGross: "",
    offerNet: "",
    offerInspection: "",
    bestoffer: "",
    UserId: "",
    agentDiscount: "",
    proprangeOne: "",
    proprangeTwo: "",
    marketHistoryNum: "",
    marketHistoryPerc: "",
    oneYearNum: "",
    oneYearPerc: "",
    projDom: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.proprangeOne, this.state.proprangeTwo);
    APIserver.updateUser({
      id: this.state.UserId,
      proprangeOne: this.state.proprangeOne,
      proprangeTwo: this.state.proprangeTwo,
      marketHistoryNum: this.state.marketHistoryNum,
      marketHistoryPerc: this.state.marketHistoryPerc,
      oneYearNum: this.state.oneYearNum,
      oneYearPerc: this.state.oneYearPerc,
      projDom: this.state.projDom,
      marketTrends: true
    }).then(ret => alert("Added Data To Users Market Trends"));
  };

  componentDidMount = () => {
    let user = this.props.history.location.search.split("=");
    this.setState({ UserId: user[1] });
    APIserver.multiofferUserReturn(user[1]).then(res => {
      console.log(res.data.proprangeOne, res.data.proprangeTwo);
      if (res.data.proprangeOne === null) {
      } else {
        this.setState({ proprangeOne: res.data.proprangeOne });
      }
      if (res.data.proprangeTwo === null) {
      } else {
        this.setState({ proprangeTwo: res.data.proprangeTwo });
      }
      if (res.data.marketHistoryNum === null) {
      } else {
        this.setState({ marketHistoryNum: res.data.marketHistoryNum });
      }
      if (res.data.marketHistoryPerc === null) {
      } else {
        this.setState({ marketHistoryPerc: res.data.marketHistoryPerc });
      }
      if (res.data.oneYearNum === null) {
      } else {
        this.setState({ oneYearNum: res.data.oneYearNum });
      }
      if (res.data.oneYearPerc === null) {
      } else {
        this.setState({ oneYearPerc: res.data.oneYearPerc });
      }
      if (res.data.projDom === null) {
      } else {
        this.setState({ projDom: res.data.projDom });
      }
      this.setState({
        agentId: res.data.AgentId
      });
    });
  };

  render() {
    const { classes } = this.props;
    const backButton = props => (
      <Link to={`/dashboard?AgentId=${this.state.agentId}`} {...props} />
    );
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <Grid direction="column" container spacing={8}>
              <Grid item md={1}>
                <p style={{ visibility: "hidden" }}>t</p>
              </Grid>
              <Grid direction="row" container spacing={8}>
                <Grid item md={1} xs={false} sm={false} />
                <Grid item md={1} xs={false} sm={false} />
                <Grid item xs={12} md={8} sm={12}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12} sm={12}>
                      <Grid direction="column" container spacing={8}>
                        <Grid item md={12} xs={12} sm={12}>
                          <Grid direction="row" container>
                            <Grid
                              item
                              md={12}
                              xs={12}
                              sm={12}
                              className={classes.hide}
                            >
                              t
                            </Grid>
                          </Grid>
                          <Grid direction="row" container>
                            <Grid item md={1}>
                              <BackButton
                                size="small"
                                variant="contained"
                                color="primary"
                                component={backButton}
                              />
                            </Grid>
                            <Grid item md={8} xs={10} sm={10} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={classes.typography}
                              >
                                Build Market Trends
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" align="center">
                        <Grid item md={12} xs={12} sm={12}>
                          <form action="post">
                            <Grid item md={1} />
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Low Value Range
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.proprangeOne}
                                onChange={this.handleInputChange}
                                type="text"
                                name="proprangeOne"
                                placeholder="Low Value Range"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Highest Value Range
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.proprangeTwo}
                                onChange={this.handleInputChange}
                                type="text"
                                name="proprangeTwo"
                                placeholder="Highest Value Range"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Market History NUMBER
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.marketHistoryNum}
                                onChange={this.handleInputChange}
                                type="text"
                                name="marketHistoryNum"
                                placeholder="Market History NUMBER"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Market History Percent
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.marketHistoryPerc}
                                onChange={this.handleInputChange}
                                type="text"
                                name="marketHistoryPerc"
                                placeholder="Market History Percent"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                One Year NUMBER
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.oneYearNum}
                                onChange={this.handleInputChange}
                                type="text"
                                name="oneYearNum"
                                placeholder="One Year NUMBER"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                One Year PERCENT
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.oneYearPerc}
                                onChange={this.handleInputChange}
                                type="text"
                                name="oneYearPerc"
                                placeholder="One Year PERCENT"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Projected Days on Market
                              </Typography>
                              <input
                                className={classes.form}
                                value={this.state.projDom}
                                onChange={this.handleInputChange}
                                type="text"
                                name="projDom"
                                placeholder="Projected Days on Market"
                              />
                            </Grid>
                            <Grid item md={8} xs={12} sm={12}>
                              <input
                                className={classes.loginButton}
                                onClick={this.handleFormSubmit}
                                type="submit"
                                value="Submit"
                              />
                            </Grid>
                          </form>
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

BuildMarketTrends.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BuildMarketTrends);
