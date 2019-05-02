import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableComponent from "../../Components/TableComponent/TableComponent";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" } // Purple and green play nicely together.
    // secondary: { main: "#00A2FF" } // This is just green.A700 as hex.
  }
});
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "black",
    color: theme.palette.common.black,
    fontSize: 20
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{ padding: 10 * 3, fontFamily: "VAGRounded" }}
    >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  tabs: {
    flexGrow: 1,
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    borderRadius: "1em",
    boxShadow: "4px 4px 15px grey"
  },
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(even)": {
      backgroundColor: "#F1F3F3"
    }
  },
  cell: {
    minWidth: 150
  },
  hide: {
    visibility: "hidden"
  },
  typography: {
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
  typographyStraight: {
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
  tabBar: {
    // padding: "25px"
  },
  Tab: {
    padding: "20px",
    overflow: "hidden",
    fontSize: "20px"
  }
});

class Dashboard extends React.Component {
  state = {
    surveysub: [],
    waitoffer: [],
    buildoffer: [],
    submitted: [],
    done: [],
    value: 0
  };

  componentDidMount = () => {
    this.updateTables();
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  viewSurvey = e => {
    this.props.history.push(`/viewsurveys?UserId=${e}`);
  };

  viewImages = e => {
    this.props.history.push(`/images?UserId=${e}`);
  };

  viewMop = e => {
    this.props.history.push(`/multi?id=${e}`);
  };

  submittedSurvey = e => {
    APIserver.updateUser({
      id: e,
      status: "waitoffer"
    }).then(ret => this.updateTables());
  };

  gotoffers = e => {
    APIserver.updateUser({
      id: e,
      status: "buildoffer"
    }).then(ret => this.updateTables());
  };

  offerbuilt = e => {
    this.props.history.push(`/buildoffer?UserId=${e}`);
  };

  offerDone = e => {
    APIserver.updateUser({
      id: e,
      status: "submittedoffer"
    }).then(ret => this.updateTables());
  };

  submittedOffer = e => {
    APIserver.updateUser({
      id: e,
      status: "done"
    }).then(ret => this.updateTables());
  };

  marketTrends = e => {
    this.props.history.push(`/buildmarkettrends?UserId=${e}`);
  };
  homeCompare = e => {
    this.props.history.push(`/buildcomparables?UserId=${e}`);
  };

  ibuyhomeCompare = e => {
    this.props.history.push(`/ibuybuildcomparables?UserId=${e}`);
  };

  goBackSubmitted = e => {
    APIserver.updateUser({
      id: e,
      status: "submittedoffer"
    }).then(ret => this.updateTables());
  };

  goBackBuildOffer = e => {
    APIserver.updateUser({
      id: e,
      status: "buildoffer"
    }).then(ret => this.updateTables());
  };
  goBackWaitOffer = e => {
    APIserver.updateUser({
      id: e,
      status: "waitoffer"
    }).then(ret => this.updateTables());
  };

  updateTables = () => {
    APIserver.isLogged().then(res => {
      if (res.data.role === "agent") {
        let params = this.props.history.location.search.split("=");
        let AgentId = params[1];
        APIserver.userReturn(AgentId).then(res => {
          let surveysubHold = [];
          let waitofferHold = [];
          let buildofferHold = [];
          let submittedHold = [];
          let doneHold = [];
          res.data.map((user, key) => {
            if (user.status === "surveysub") {
              surveysubHold.push({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                email: user.Account.email,
                status: user.status,
                createdAt: user.createdAt
              });
            }
            if (user.status === "waitoffer") {
              waitofferHold.push({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                email: user.Account.email,
                status: user.status,
                createdAt: user.createdAt
              });
            }
            if (user.status === "buildoffer") {
              buildofferHold.push({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                email: user.Account.email,
                status: user.status,
                createdAt: user.createdAt
              });
            }
            if (user.status === "submittedoffer") {
              submittedHold.push({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                email: user.Account.email,
                status: user.status,
                createdAt: user.createdAt
              });
            }
            if (user.status === "done") {
              doneHold.push({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                address: user.address,
                email: user.Account.email,
                status: user.status,
                createdAt: user.createdAt
              });
            }
          });
          this.setState({ surveysub: surveysubHold });
          this.setState({ waitoffer: waitofferHold });
          this.setState({ buildoffer: buildofferHold });
          this.setState({ submitted: submittedHold });
          this.setState({ done: doneHold });
        });
      } else {
        window.location.replace("/");
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.flex}>
        <MuiThemeProvider theme={theme}>
          <Grid direction="column" container spacing={24}>
            <Grid item md={1} />
            <Grid direction="row" container spacing={24}>
              <Grid align="center" item md={1} xs={false} />
              <Grid align="center" item xs={12} md={10}>
                <Grid item md={1}>
                  <p className={classes.hide}>t</p>
                </Grid>
                <SurveyDiv>
                  <Grid item md={1}>
                    <p className={classes.hide}>t</p>
                  </Grid>
                  <Grid item md={8}>
                    <Typography
                      variant="h4"
                      color="inherit"
                      className={classes.typography}
                    >
                      User List and Offers
                    </Typography>
                    <hr />
                  </Grid>
                  <Grid item md={1}>
                    <p className={classes.hide}>t</p>
                  </Grid>
                  <div className={classes.tabs}>
                    <AppBar
                      position="static"
                      color="default"
                      className={classes.tabBar}
                    >
                      <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="hide"
                      >
                        <Tab
                          className={`${classes.Tab} ${
                            classes.typographyStraight
                          }`}
                          label="New Users/Submissions"
                        />
                        <Tab
                          className={`${classes.Tab} ${
                            classes.typographyStraight
                          }`}
                          label="Submitting to ibuyers"
                        />
                        <Tab
                          className={`${classes.Tab} ${
                            classes.typographyStraight
                          }`}
                          label="Waiting on ibuyer offers/Agent Offer"
                        />
                        <Tab
                          className={`${classes.Tab} ${
                            classes.typographyStraight
                          }`}
                          label="User has all of their offers"
                        />
                        <Tab
                          className={`${classes.Tab} ${
                            classes.typographyStraight
                          }`}
                          label="Done"
                        />
                      </Tabs>
                    </AppBar>
                    {value === 0 && (
                      <TabContainer>
                        <TableComponent>
                          {this.state.surveysub.map((row, i) => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  component="th"
                                  scope="row"
                                >
                                  {row.firstname} {row.lastname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.phone}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.email}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.address}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.firstname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewSurvey(row.id)}
                                  >
                                    View Survey
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewImages(row.id)}
                                  >
                                    View Images
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewMop(row.id)}
                                  >
                                    View MoP
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.submittedSurvey(row.id)}
                                  >
                                    Survey Received
                                  </Button>
                                </CustomTableCell>
                              </TableRow>
                            );
                          })}
                        </TableComponent>
                      </TabContainer>
                    )}
                    {value === 1 && (
                      <TabContainer>
                        <TableComponent>
                          {this.state.waitoffer.map((row, i) => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  component="th"
                                  scope="row"
                                >
                                  {row.firstname} {row.lastname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.phone}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.email}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.address}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.firstname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewSurvey(row.id)}
                                  >
                                    View Survey
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewImages(row.id)}
                                  >
                                    View Images
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewMop(row.id)}
                                  >
                                    View MoP
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.gotoffers(row.id)}
                                  >
                                    Done Submitting
                                  </Button>
                                </CustomTableCell>
                              </TableRow>
                            );
                          })}
                        </TableComponent>
                      </TabContainer>
                    )}
                    {value === 2 && (
                      <TabContainer>
                        <TableComponent>
                          {this.state.buildoffer.map((row, i) => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  component="th"
                                  scope="row"
                                >
                                  {row.firstname} {row.lastname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.phone}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.email}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.address}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.firstname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewSurvey(row.id)}
                                  >
                                    View Survey
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewImages(row.id)}
                                  >
                                    View Images
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewMop(row.id)}
                                  >
                                    View MoP
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.offerbuilt(row.id)}
                                  >
                                    Build Offers
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.homeCompare(row.id)}
                                  >
                                    Home Comparables Market
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.ibuyhomeCompare(row.id)}
                                  >
                                    Home Comparables ibuy
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.marketTrends(row.id)}
                                  >
                                    Market Trends
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.goBackWaitOffer(row.id)}
                                  >
                                    Go Back
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.offerDone(row.id)}
                                  >
                                    Done Building
                                  </Button>
                                </CustomTableCell>
                              </TableRow>
                            );
                          })}
                        </TableComponent>
                      </TabContainer>
                    )}
                    {value === 3 && (
                      <TabContainer>
                        <TableComponent>
                          {this.state.submitted.map((row, i) => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  component="th"
                                  scope="row"
                                >
                                  {row.firstname} {row.lastname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.phone}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.email}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.address}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.firstname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewSurvey(row.id)}
                                  >
                                    View Survey
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewImages(row.id)}
                                  >
                                    View Images
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewMop(row.id)}
                                  >
                                    View MoP
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.homeCompare(row.id)}
                                  >
                                    Home Comparables Market
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.ibuyhomeCompare(row.id)}
                                  >
                                    Home Comparables ibuy
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.marketTrends(row.id)}
                                  >
                                    Market Trends
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.offerbuilt(row.id)}
                                  >
                                    Update Offers
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() =>
                                      this.goBackBuildOffer(row.id)
                                    }
                                  >
                                    Go Back
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.submittedOffer(row.id)}
                                  >
                                    Advance
                                  </Button>
                                </CustomTableCell>
                              </TableRow>
                            );
                          })}
                        </TableComponent>
                      </TabContainer>
                    )}
                    {value === 4 && (
                      <TabContainer>
                        <TableComponent>
                          {this.state.done.map((row, i) => {
                            return (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  component="th"
                                  scope="row"
                                >
                                  {row.firstname} {row.lastname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.phone}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.email}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.address}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.firstname}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={`${classes.cell} ${
                                    classes.typographyStraight
                                  }`}
                                  align="center"
                                >
                                  {row.createdAt}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewSurvey(row.id)}
                                  >
                                    View Survey
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewImages(row.id)}
                                  >
                                    View Images
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => this.viewMop(row.id)}
                                  >
                                    View MoP
                                  </Button>
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                  <Button
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.goBackSubmitted(row.id)}
                                  >
                                    Go Back
                                  </Button>
                                </CustomTableCell>
                              </TableRow>
                            );
                          })}
                        </TableComponent>
                      </TabContainer>
                    )}
                  </div>
                  <Grid item md={1}>
                    <p className={classes.hide}>t</p>
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

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
