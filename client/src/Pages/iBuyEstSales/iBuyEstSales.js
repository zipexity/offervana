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
import Button from "@material-ui/core/Button";

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
  button: {
    backgroundColor: "#46A1BA",
    width: "70%",
    color: "#F1F3F3",
    padding: "16px 32px",
    textDecoration: "none",
    fontFamily: "VAGRounded Bold",
    fontSize: "18px",
    marginTop: "3.5em",
    border: "0.4px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "#529aae"
    },
    "&:hover": {
      backgroundColor: "#529aae",
      color: "white",
      padding: "18px",
      width: "72%"
    }
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
    position: "relative"
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
  input: {
    border: "0.3px solid #46A1BA",
    boxShadow: "2px 2px 5px grey",
    padding: "20px",
    "&:focus": {
      border: "1.3px solid #46A1BA",
      outline: "none",
      color: "black"
    },
    width: "80%",
    height: "30px",
    outline: "none",
    position: "relative",
    right: "2em",
    top: "-1em"
  },
  backButton: {
    position: "relative",
    left: "2.5em",
    top: "1em"
  },
  hidden: {
    visibility: "hidden"
  },
  offer: {
    position: "relative",
    right: "1.4em",
    [theme.breakpoints.down("sm")]: {
      right: "0em"
    }
  },
  mortage: {
    position: "relative",
    right: "0.78em",
    top: "0.5em",
    [theme.breakpoints.down("sm")]: {
      top: "0em",
      right: "0em"
    }
  },
  homeSale: {
    position: "relative",
    left: "0.65em",
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  sendButton: {
    fontSize: "38px",
    borderRadius: "1em",
    position: "relative",
    top: "-0.35em",
    right: "0.5em",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("sm")]: {
      top: "0em",
      right: "0em"
    }
  },
  estRepair: {
    fontSize: "14px !important"
  }
});

class iBuyEstSales extends React.Component {
  state = {};

  componentDidMount = () => {
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    let offerHold = [];
    this.setState({ userid: UserId });
    APIserver.offerReturn(UserId).then(res => {
      res.data.map((item, key) => {
        offerHold.push({
          offerType: item.type,
          offerGross: parseFloat(item.gross.replace(/,/g, "")),
          offerNet: parseFloat(item.net.replace(/,/g, "")),
          inspection: parseFloat(item.fees.replace(/,/g, "")),
          repairEstimate: parseFloat(item.repairEstimate.replace(/,/g, "")),
          bestOffer: item.bestOffer,
          UserId: item.UserId
        });
      });
      this.setState({ offers: offerHold });

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
        a.ibuyofferNet < b.ibuyofferNet
          ? 1
          : (a.ibuyofferNet === b.ibuyofferNet) - 1
      );
      console.log(sortedOffers);
      this.setState({
        ibuyofferType: sortedOffers[0].ibuyofferType,
        ibuyofferGross: sortedOffers[0].ibuyofferGross,
        ibuyofferNet: sortedOffers[0].ibuyofferNet,
        ibuyinspection: sortedOffers[0].ibuyinspection,
        ibuyoffervanaCut: sortedOffers[0].ibuyoffervanaCut,
        ibuyrepairest: sortedOffers[0].ibuyrepairest,
        ibuyescrowCut: sortedOffers[0].ibuyescrowCut,
        ibuyibuyerCut: sortedOffers[0].ibuyibuyerCut,
        ibuytotal: sortedOffers[0].ibuytotal,
        ibuybestOffer: sortedOffers[0].ibuybestOffer
      });
    }
  };

  checkRepair = () => {
    if (this.state.ibuyrepairest > 1) {
      return (
        <div>
          <Typography
            className={`${this.props.classes.titleStraight} ${
              this.props.classes.estRepair
            }`}
          >
            Est Repair Cost
          </Typography>
          <Typography
            className={`${this.props.classes.titleStraight} ${
              this.props.classes.estRepair
            }`}
          >
            ($
            {this.giveMehcommas(
              parseFloat(this.state.ibuyrepairest).toFixed(2)
            )}
            )
          </Typography>
        </div>
      );
    } else {
      return;
    }
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  giveMehcommas = x => {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  sendMessage = () => {
    let newTotal =
      this.state.ibuyofferNet -
      parseFloat(this.state.mortgagepay.replace(/,/g, ""));
    this.setState({ ibuyofferNet: newTotal.toFixed(2) });
  };

  render() {
    const backButton = props => (
      <Link to={`/multi?id=${this.state.userid}`} {...props} />
    );
    console.log(this.state);
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
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} sm={1} />
                <Grid item md={1} xs={false} sm={1} />
                <Grid item xs={12} md={6} sm={8}>
                  <SurveyDiv>
                    <Grid container direction="row" spacing={24}>
                      <Grid item md={1} xs={1} sm={1}>
                        <div className={classes.backButton}>
                          <BackButton
                            size="small"
                            variant="contained"
                            color="primary"
                            component={backButton}
                          />
                        </div>
                      </Grid>
                      <Grid item md={10} xs={12} sm={12} align="center">
                        <div className={classes.imageHold}>
                          <img src={Offervanalogo} className={classes.image} />
                        </div>
                      </Grid>

                      <Grid item md={12} xs={12} sm={12} align="center">
                        <Typography
                          className={`${classes.title} ${classes.header}`}
                        >
                          Projected Sale Proceeds
                        </Typography>
                        <hr className={classes.hr} />
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={false}
                        sm={false}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={3} xs={4} sm={4} align="right">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.offer
                          }`}
                        >
                          Gross offer
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={4}
                        xs={3}
                        sm={3}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          ${this.giveMehcommas(this.state.ibuyofferGross)}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={false}
                        sm={false}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={5} sm={5} align="left">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.homeSale
                          }`}
                        >
                          ibuyer Service Charge
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={2}
                        sm={2}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          {this.state.ibuyinspection}% ($
                          {this.giveMehcommas(
                            parseFloat(this.state.ibuyibuyerCut).toFixed(2)
                          )}
                          )
                        </Typography>
                        {this.checkRepair()}
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={false}
                        sm={false}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.mortage
                          }`}
                        >
                          Mortage Payoff
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={false}
                        sm={false}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={6} sm={6} align="left">
                        <input
                          className={`${classes.input}`}
                          name="mortgagepay"
                          type="text"
                          placeholder="$240,000"
                          value={this.state.mortgagepay}
                          onChange={this.handleInputChange}
                        />
                        <Send
                          onClick={this.sendMessage}
                          color="primary"
                          className={classes.sendButton}
                        />
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={1}
                        sm={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={5} xs={5} sm={5} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.offerCharge
                          }`}
                        >
                          Offervana Service Charge
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={2}
                        xs={2}
                        sm={2}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          1% (${this.giveMehcommas(this.state.ibuyoffervanaCut)}
                          )
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={1}
                        sm={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={6} xs={6} sm={6} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.escrow
                          }`}
                        >
                          Title, Escrow, Misc. Closing Cost
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={1}
                        sm={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          1% (${this.giveMehcommas(this.state.ibuyescrowCut)})
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        xs={1}
                        sm={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={5} xs={5} sm={5} align="center">
                        <Typography
                          className={`${classes.title} ${classes.header} ${
                            classes.proceeds
                          }`}
                        >
                          Projected Proceeds
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={2}
                        xs={1}
                        sm={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography
                          className={`${classes.title} ${classes.header}`}
                        >
                          ${this.giveMehcommas(this.state.ibuyofferNet)}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item md={12} align="center">
                      <Button
                        onClick={this.renderOffer}
                        size="large"
                        color="primary"
                        variant="contained"
                        className={classes.button}
                      >
                        Reset
                      </Button>
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

iBuyEstSales.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(iBuyEstSales);
