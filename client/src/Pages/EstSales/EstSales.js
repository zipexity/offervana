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
    position: "relative",
    left: "7em"
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
  offer: { position: "relative", right: "0em" },
  mortage: {
    position: "relative",
    right: "0.78em"
  },
  sendButton: {
    fontSize: "38px",
    borderRadius: "1em",
    position: "relative",
    top: "0.1em",
    right: "2em",
    "&:hover": {
      cursor: "pointer"
    }
  },
  editGrossShow: {
    display: "block"
  },
  editGrossHide: {
    display: "none"
  },
  listPrice: {
    fontSize: "10px !important",
    position: "relative",
    top: "-10px"
  },
  grossText: {
    position: "relative",
    top: "-10px",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

class EstSales extends React.Component {
  state = {
    marketOffer: [],
    mortgagepay: "",
    editGross: this.props.classes.editGrossHide,
    offerText: this.props.classes.editGrossShow
  };

  componentDidMount = () => {
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    this.setState({ userid: UserId });
    this.dataRender();
  };

  dataRender = () => {
    let offerHold = [];
    APIserver.offerReturn(this.state.userid).then(res => {
      res.data.map((item, key) => {
        console.log(item);
        offerHold.push({
          offerType: item.type,
          offerGross: parseFloat(item.gross.replace(/,/g, "")),
          offerNet: parseFloat(item.net.replace(/,/g, "")),
          inspection: parseFloat(item.fees.replace(/,/g, "")),
          agentDiscount: parseFloat(item.agentDiscount.replace(/,/g, "")),
          bestOffer: item.bestOffer,
          UserId: item.UserId
        });
      });
      this.setState({ offers: offerHold });

      this.renderOffer();
    });
  };

  renderOffer = () => {
    this.state.offers.map((item, key) => {
      if (
        item.offerType === "market" ||
        item.offerType === "Market" ||
        item.offerType === "agent" ||
        item.offerType === "Agent"
      ) {
        let agentCut = (6 / 100) * item.offerGross;
        let agentGift = (item.agentDiscount / 100) * agentCut;
        let realAgentCut = agentCut - agentGift;
        let escrowCut = (1 / 100) * item.offerGross;
        let total = item.offerGross - realAgentCut - escrowCut;
        this.setState({
          offerType: item.offerType,
          offerGross: item.offerGross,
          offerNet: item.offerNet,
          inspection: item.inspection,
          agentForgiveness: item.agentDiscount,
          realAgentCut: realAgentCut,
          escrowCut: escrowCut,
          agentGift: agentGift,
          agentCut: agentCut,
          total: total,
          bestOffer: item.bestOffer
        });
      }
    });
  };

  calcOffer = () => {
    this.state.offers.map((item, key) => {
      if (
        item.offerType === "market" ||
        item.offerType === "Market" ||
        item.offerType === "agent" ||
        item.offerType === "Agent"
      ) {
        let agentCut = (6 / 100) * this.state.offerGross;
        let agentGift = (this.state.agentForgiveness / 100) * agentCut;
        let realAgentCut = agentCut - agentGift;
        let escrowCut = (1 / 100) * this.state.offerGross;
        let total =
          this.state.offerGross -
          realAgentCut -
          escrowCut -
          this.state.mortgagepay;
        console.log("#####", total);
        this.setState({
          offerType: item.offerType,
          offerGross: item.offerGross,
          offerNet: item.offerNet,
          inspection: item.inspection,
          agentForgiveness: item.agentDiscount,
          realAgentCut: realAgentCut,
          escrowCut: escrowCut,
          agentGift: agentGift,
          agentCut: agentCut,
          total: total,
          bestOffer: item.bestOffer
        });
      }
    });
  };

  giveMehcommas = x => {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  sendMessage = () => {
    if (this.state.mortgagepay) {
      console.log(this.state.mortgagepay);
    } else {
      this.setState({ mortgagepay: 0 });
    }
    this.calcOffer();
  };

  editGross = () => {
    this.setState({ editGross: this.props.classes.editGrossShow });
    this.setState({ offerText: this.props.classes.editGrossHide });
  };

  render() {
    const backButton = props => (
      <Link to={`/multi?id=${this.state.userid}`} {...props} />
    );
    const { classes } = this.props;
    console.log(this.state);
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
                <Grid item md={1} xs={false} />
                <Grid item md={1} xs={false} />
                <Grid item xs={12} md={6}>
                  <SurveyDiv>
                    <Grid container direction="row" spacing={24}>
                      <Grid item md={1}>
                        <div className={classes.backButton}>
                          <BackButton
                            size="small"
                            variant="contained"
                            color="primary"
                            component={backButton}
                          />
                        </div>
                      </Grid>
                      <Grid item md={10}>
                        <div className={classes.imageHold}>
                          <img src={Offervanalogo} className={classes.image} />
                        </div>
                      </Grid>

                      <Grid item md={12} align="center">
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
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={2} align="right">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.offer
                          }`}
                        >
                          List Price
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={5}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid
                        item
                        md={4}
                        align="left"
                        className={this.state.offerText}
                      >
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.listPrice
                          }`}
                        >
                          Click To Edit List Price
                        </Typography>
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.grossText
                          }`}
                          onClick={this.editGross}
                        >
                          ${this.giveMehcommas(this.state.offerGross)}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={4}
                        align="left"
                        className={this.state.editGross}
                      >
                        <input
                          className={`${classes.input}`}
                          name="offerGross"
                          type="text"
                          placeholder={this.giveMehcommas(
                            this.state.offerGross
                          )}
                          value={this.state.offerGross}
                          onChange={this.handleInputChange}
                        />
                      </Grid>
                      <Grid
                        item
                        md={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.homeSale
                          }`}
                        >
                          Home Sale Charge
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          6% (${this.giveMehcommas(this.state.agentCut)})
                        </Typography>
                        <Typography className={`${classes.titleStraight}`}>
                          - {this.giveMehcommas(this.state.agentForgiveness)}%
                          ($
                          {this.giveMehcommas(this.state.agentGift)})
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="center">
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
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="left">
                        <input
                          className={`${classes.input}`}
                          name="mortgagepay"
                          type="text"
                          placeholder="$240,000"
                          value={this.state.mortgagepay}
                          onChange={this.handleInputChange}
                        />
                      </Grid>
                      <Grid
                        item
                        md={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={6} align="center">
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
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          1% ($
                          {this.giveMehcommas(this.state.escrowCut)})
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={5} align="center">
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
                        md={1}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} align="left">
                        <Typography
                          className={`${classes.title} ${classes.header}`}
                        >
                          ${this.giveMehcommas(this.state.total)}
                        </Typography>
                      </Grid>
                      <Grid item md={1}>
                        <Send
                          onClick={this.sendMessage}
                          color="primary"
                          className={classes.sendButton}
                        />
                      </Grid>
                      <Grid item md={12} align="center">
                        <Button
                          onClick={this.dataRender}
                          size="large"
                          color="primary"
                          variant="contained"
                          className={classes.button}
                        >
                          Reset
                        </Button>
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

EstSales.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EstSales);
