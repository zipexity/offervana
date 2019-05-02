import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import Star from "@material-ui/icons/Grade";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "white",
    color: "#5E5E5E",
    fontSize: 20,
    fontFamily: "Arial Rounded MT Bold"
  },
  body: {
    fontSize: 16,
    color: "#5E5E5E",
    fontFamily: "Arial Rounded MT Bold"
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90%",
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
    marginLeft: "5em"
  },
  flex: {
    flexGrow: 1,
    marginTop: "3em"
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
    fontFamily: [
      "Arial Rounded MT Bold",
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
  button: {
    fontFamily: "Arial Rounded MT Bold"
  },
  farRight: {
    paddingLeft: "4.5em"
  },
  star: {
    position: "relative",
    zIndex: "99",
    right: "1em",
    top: "0.7em",
    color: "#46A1BA",
    width: "0.8em",
    height: "0.8em"
  },
  bestOffer: {
    fontSize: "22px !important",
    verticalAlign: "center",
    position: "relative",
    zIndex: "0",
    top: "-0.5em"
  }
});

class ProfilePage extends React.Component {
  state = {
    offers: [],
    bestoffer: [],
    offersWithNet: []
  };

  componentDidMount = () => {
    let offerHold = [];
    let bestOffer = [];
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    this.setState({ userid: UserId });
    APIserver.offerReturn(UserId).then(res => {
      console.log(res.data);
      res.data.map((item, key) => {
        if (
          item.type === "Market" ||
          item.type === "market" ||
          item.type === "agent" ||
          item.type === "Agent"
        ) {
        } else {
          if (item.bestOffer === "ibuyer") {
            bestOffer.push({
              offerType: item.type,
              offerGross: item.gross,
              offerNet: item.net,
              fees: item.fees,
              bestOffer: item.bestOffer,
              UserId: item.UserId
            });
          } else {
            offerHold.push({
              offerType: item.type,
              offerGross: parseFloat(item.gross.replace(/,/g, "")),
              offerNet: parseFloat(item.net.replace(/,/g, "")),
              inspection: parseFloat(item.fees),
              repairEstimate: parseFloat(item.repairEstimate.replace(/,/g, "")),
              bestOffer: item.bestOffer,
              agentDiscount: parseFloat(item.agentDiscount),
              UserId: item.UserId
            });
          }
        }
      });
      this.setState({ offers: offerHold });
      this.setState({ bestoffer: bestOffer });
      this.renderOffer();
    });
  };

  renderOffer = () => {
    if (this.state.offers.length > 1) {
      let ibuyOffers = [];

      this.state.offers.map((item, key) => {
        if (
          item.offerType === "Market" ||
          item.offerType === "market" ||
          item.offerType === "agent" ||
          item.offerType === "Agent"
        ) {
        } else {
          ibuyOffers.push(item);
        }
      });
      let offersWithNet = [];
      this.state.offers.map((item, key) => {
        let ibuyerCut = (item.inspection / 100) * item.offerGross;
        let offervanaCut = (1 / 100) * item.offerGross;
        let escrowCut = (1 / 100) * item.offerGross;
        let total = ibuyerCut + offervanaCut + escrowCut + item.repairEstimate;
        let ibuyNet = item.offerGross - ibuyerCut;
        let newNet = item.offerGross - total;
        offersWithNet.push({
          ibuyofferType: item.offerType,
          ibuyofferGross: item.offerGross,
          ibuyofferNet: newNet,
          ibuyNet: ibuyNet,
          ibuyinspection: item.inspection,
          ibuyrepairest: item.repairEstimate,
          ibuyoffervanaCut: offervanaCut,
          ibuyescrowCut: escrowCut,
          ibuyibuyerCut: ibuyerCut,
          ibuytotal: total,
          ibuybestOffer: item.bestOffer
        });
      });
      let sortedOffers = offersWithNet.sort((a, b) =>
        a.newNet < b.newNet ? 1 : (a.newNet === b.newNet) - 1
      );
      this.setState({ offersWithNet: sortedOffers });
    }
  };

  giveMehcommas = x => {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  render() {
    console.log(this.state.offersWithNet);
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
                <Grid align="center" item md={1} xs={false} />
                <Grid align="center" item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv>
                    <Grid item md={2}>
                      <p className={classes.hide}>t</p>
                    </Grid>
                    <Grid item md={2}>
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
                      <Grid item md={2}>
                        <p className={classes.hide}>t</p>
                      </Grid>
                      <Grid item md={8} xs={12} sm={12}>
                        <Typography variant="h4" className={classes.typography}>
                          All ibuyer offers
                        </Typography>
                        <hr />
                      </Grid>
                    </Grid>
                    <Grid align="center" item md={12}>
                      <Paper className={classes.root}>
                        <Table className={classes.table}>
                          <TableHead>
                            <TableRow>
                              <CustomTableCell align="left">
                                Buyer
                              </CustomTableCell>
                              <CustomTableCell align="left">
                                Gross Offer
                              </CustomTableCell>
                              <CustomTableCell align="center">
                                ibuyer service fee
                              </CustomTableCell>
                              <CustomTableCell align="center">
                                Repair Estimate
                              </CustomTableCell>
                              <CustomTableCell align="center">
                                ibuyer net offer
                              </CustomTableCell>
                              <CustomTableCell align="left">
                                Offervana service fee (1%)
                              </CustomTableCell>
                              <CustomTableCell align="left">
                                Title & escrow fee (1%)
                              </CustomTableCell>
                              <CustomTableCell align="left">
                                Net Offer
                              </CustomTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {this.state.bestoffer.map(row => (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  align="left"
                                  component="th"
                                  scope="row"
                                >
                                  <Star className={classes.star} />{" "}
                                  <Typography
                                    className={`${classes.bestOffer} ${
                                      classes.typography
                                    }`}
                                  >
                                    {row.offerType}
                                  </Typography>
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${row.offerGross}`}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${row.offerNet}`}
                                </CustomTableCell>
                                <CustomTableCell
                                  className={classes.farRight}
                                  align="left"
                                >
                                  {row.fees}%
                                </CustomTableCell>
                              </TableRow>
                            ))}
                            {this.state.offersWithNet.map(row => (
                              <TableRow className={classes.row} key={row.id}>
                                <CustomTableCell
                                  align="left"
                                  component="th"
                                  scope="row"
                                >
                                  {row.ibuyofferType}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(row.ibuyofferGross)}`}
                                </CustomTableCell>

                                <CustomTableCell
                                  className={classes.farRight}
                                  align="left"
                                >
                                  {row.ibuyinspection}% ($
                                  {this.giveMehcommas(
                                    row.ibuyibuyerCut.toFixed(2)
                                  )}
                                  )
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(row.ibuyrepairest)}`}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(row.ibuyNet)}`}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(
                                    row.ibuyoffervanaCut
                                  )}`}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(row.ibuyescrowCut)}`}
                                </CustomTableCell>
                                <CustomTableCell align="left">
                                  {`$${this.giveMehcommas(row.ibuyofferNet)}`}
                                </CustomTableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Paper>
                      <Grid item md={1}>
                        <p className={classes.hide}>t</p>
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

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
