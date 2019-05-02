import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";
import PieChart from "react-minimal-pie-chart";
import Send from "@material-ui/icons/Send";
import Checkmark from "../../Utils/Images/Check mark.svg";
import Dash from "../../Utils/Images/Dash.svg";
import ContractModal from "../../Components/ContractModal/ContractModal";
import "./multioffer.css";
const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#eee" } // This is just green.A700 as hex.
  }
});

// #EDF0F0

const styles = theme => ({
  flex: {
    flexGrow: 1,
    marginTop: "5.3em"
  },
  hide: {
    visibility: "hidden"
  },
  typographyRounded: {
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
  mainDiv: {
    backgroundColor: "#F1F3F3",
    height: "130%",
    boxShadow: "4px 4px 15px grey",
    marginTop: "1.5em"
  },
  topDiv: {
    backgroundColor: "#F1F3F3",
    position: "relative",
    right: "100px",
    [theme.breakpoints.down("xs")]: {
      right: "0px"
    },
    [theme.breakpoints.down("sm")]: {
      right: "0px"
    }
  },
  midDiv: {
    backgroundColor: "white"
  },
  botDiv: {
    backgroundColor: "#F1F3F3",
    paddingBottom: "2em"
  },
  panels: {
    backgroundColor: "white",
    boxShadow: "4px 4px 15px grey",
    paddingBottom: "1em",
    width: "70%",
    marginLeft: "7.5em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: "0em"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0em"
    }
  },
  panelLeft: {
    paddingBottom: "4.6em !important"
  },
  panelTwo: {
    backgroundColor: "white",
    boxShadow: "4px 4px 15px grey",
    paddingBottom: "8.3em",
    position: "relative",
    left: "90px",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      left: "0px !important"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      left: "0px !important"
    }
  },
  iBuyerPanelHead: {
    marginTop: "1em",
    paddingTop: "0.5em"
  },
  offerPanelHead: {
    marginTop: "1em"
  },
  marketPanelHead: {
    marginTop: "1em",
    paddingTop: "0.5em"
  },
  pieHold: {
    width: "7em",
    height: "7em",
    marginTop: "0.5em"
  },

  link: {
    position: "relative",
    right: "30px",
    "&:link": {
      color: "black",
      textDecoration: "none"
    },
    "&:visited": {
      color: "black",
      textDecoration: "none"
    },
    "&:hover": {
      color: "black",
      textDecoration: "underline"
    },
    "&:active": {
      color: "black",
      textDecoration: "none"
    }
  },
  disabledLink: {
    position: "relative",
    right: "30px",
    "&:link": {
      color: "black",
      textDecoration: "none"
    },
    "&:visited": {
      color: "black",
      textDecoration: "none"
    },
    "&:hover": {
      color: "black",
      textDecoration: "underline"
    },
    "&:active": {
      color: "black",
      textDecoration: "none"
    }
  },
  marketbuyDiv: {
    position: "relative",
    backgroundColor: "white",
    boxShadow: "0px 4px 15px grey",
    height: "350px",
    width: "110%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "350px"
    }
  },
  ibuyDiv: {
    backgroundColor: "#EDF0F0",
    boxShadow: "0px 4px 15px grey",
    height: "350px",
    width: "110%",
    position: "relative",
    right: "24px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      right: "0px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      right: "0px",
      height: "350px"
    }
  },
  profhold: {
    width: "5em",
    height: "5em",
    backgroundColor: "#46A1BA",
    boxShadow: "2px 2px 3px grey",
    borderRadius: "10em"
  },
  test: {
    width: "7.5em",
    backgroundColor: "#000",
    marginRight: "-10em"
  },
  textField: {
    fontFamily: "VAGRounded"
  },
  button: {
    fontFamily: "VAGRounded",
    color: "white",
    width: "100%",
    position: "relative",
    top: "-0.7em",
    backgroundColor: "#46A1BA",
    "&:hover": {
      backgroundColor: "#46A1BB"
    },
    [theme.breakpoints.down("xs")]: {
      top: "0em"
    }
  },
  buttoniBuySide: {
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "20px"
    }
  },
  botDivPara: {
    marginTop: "0.5em",
    fontSize: "18px"
  },
  bestOffersText: {
    fontSize: "20px"
  },
  moreInfo: {
    position: "relative",
    zIndex: "3",
    fontSize: "14px",
    textAlign: "center",
    verticalAlign: "center",
    width: "1.3em",
    height: "1.3em",
    backgroundColor: "#46A1BA",
    borderRadius: "10em",
    color: "white"
  },
  moreInfoNet: {
    top: "1.5em",
    right: "5em"
  },
  moreInfoGross: {
    top: "1.5em",
    right: "5em"
  },
  sendButton: {
    fontSize: "38px",
    borderRadius: "1em",
    position: "relative",
    top: "0.65em",
    left: "0.2em",
    "&:hover": {
      cursor: "pointer",
      fontSize: "42px",
      top: "0.55em"
    }
  },
  projSalesTime: {
    fontSize: "19.5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px"
    }
  },
  tooltip: {
    backgroundColor: "white"
  },
  lightTooltip: {
    backgroundColor: "#46A1BA",
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    fontFamily: "VAGRounded"
  },
  haloHold: {
    position: "relative",
    width: "100px",
    height: "100px",
    top: "0px",
    zIndex: "0"
  },
  halo: {
    width: "100%",
    height: "100%",
    mixBlendMode: "multiply"
  },
  topMarginMiddlePanel: {
    marginTop: "10px"
  },
  youpickCloseDate: {
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px"
    }
  },
  checkHold: {
    width: "60px",
    height: "60px",
    float: "left",
    position: "relative",
    top: "-18px",
    right: "10px",
    marginRight: "10px"
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
    top: "-21px",
    right: "5px",
    marginRight: "10px",
    zIndex: "99"
  },
  dash: {
    width: "100%",
    height: "100%"
  },
  compareDiv: {
    position: "relative",
    left: "100px",
    [theme.breakpoints.down("sm")]: {
      left: "0px"
    }
  },
  compareHome: {
    float: "left",
    width: "100%",
    left: "5px ",
    top: "-58px",
    fontSize: "18px"
  },
  ibuyprojcash: {
    float: "left",
    width: "100%",
    left: "5px ",
    top: "-58px",
    fontSize: "18px"
  },
  reviewInstaDiv: {
    float: "left",
    width: "100%",
    left: "5px ",
    top: "-58px",
    fontSize: "18px"
  },
  projCashMarket: {
    float: "left",
    width: "100%",
    left: "5px ",
    top: "-58px",
    fontSize: "18px"
  },
  checkMarketCompare: {
    position: "relative",
    right: "12px",
    top: "-10px"
  },
  ibuyhomecompare: {
    float: "left",
    width: "100%",
    left: "5px",
    top: "-58px",
    fontSize: "18px"
  },
  checkIbuyCompare: {
    position: "relative",
    right: "23.5px",
    top: "-10px"
  },
  indDiv: {
    position: "relative",
    fontSize: "20px",
    right: "50px",
    top: "30px",
    marginBottom: "20px"
  },
  homesurveyDiv: {
    position: "relative",
    fontSize: "20px",
    right: "67.5px",
    top: "30px",
    marginBottom: "20px"
  },
  homesurveyiBuyDiv: {
    fontSize: "20px",
    position: "relative",
    right: "67.5px"
  },
  reviewInstantOffers: {
    position: "relative",
    right: "42px",
    top: "-45px"
  },
  checkibuyCashClose: {
    position: "relative",
    right: "30px",
    top: "-80px"
  },
  marketTrends: {
    position: "relative",
    right: "64px",
    fontSize: "20px"
  },
  address: {
    fontSize: "18px",
    width: "100%"
  },
  marketProj: {
    position: "relative",
    top: "-45px",
    right: "32px"
  },
  sellerSavings: {
    position: "relative",
    top: "-80px",
    right: "73px",
    fontSize: "20px"
  }
});

class Multioffer extends React.Component {
  state = {
    multiline: "",
    offers: [],
    market: [],
    ibuyer: [],
    agent: "",
    disabledLink: `${this.props.history.location.pathname}${
      this.props.history.location.search
    }`,
    projDom: "",
    ibuycomparables: "",
    open: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    APIserver.isLogged().then(res => {
      if (
        Object.keys(res.data).length === 0 &&
        res.data.constructor === Object
      ) {
        return;
      } else {
        if (res.data.role === "client") {
          APIserver.singleUserReturn().then(response => {
            if (response.data) {
              if (
                Object.keys(response.data).length === 0 &&
                response.data.constructor === Object
              ) {
                return;
              } else {
                let offerHold = [];
                let params = this.props.history.location.search.split("=");
                let UserId = params[1];
                this.setState({ userid: UserId });
                APIserver.multiofferUserReturn(UserId).then(response => {
                  console.log(response.data);
                  if (response.data === null) {
                    return;
                  } else {
                    if (response.data.status === "created") {
                      this.props.history.push("/api/surveys/:id");
                    }
                    this.setState({
                      user: {
                        firstname: response.data.firstname,
                        lastname: response.data.lastname,
                        phone: response.data.phone,
                        status: response.data.status
                      }
                    });
                    this.setState({ comparables: response.data.comparables });
                    this.setState({
                      ibuycomparables: response.data.ibuycomparables
                    });
                    this.setState({ projDom: response.data.projDom });
                    this.setState({
                      linkList: {
                        marketTrends: response.data.marketTrends,
                        negotiateOffer: response.data.negotiateOffer,
                        reviewInstant: response.data.reviewInstant,
                        saleTime: response.data.saleTime,
                        settleSheet: response.data.settleSheet,
                        detailsUpgrades: response.data.detailsUpgrades,
                        agentOffer: response.data.agentOffer,
                        iandD: response.data.iandD
                      }
                    });
                    this.setState({ address: response.data.address });
                    this.setState({ agent: response.data.Agent });
                    APIserver.offerReturn(UserId).then(res => {
                      res.data.map((item, key) => {
                        offerHold.push({
                          offerType: item.type,
                          offerGross: parseFloat(item.gross.replace(/,/g, "")),
                          offerNet: parseFloat(item.net.replace(/,/g, "")),
                          inspection: parseInt(item.fees),
                          repairEstimate: parseFloat(
                            item.repairEstimate.replace(/,/g, "")
                          ),
                          bestOffer: item.bestOffer,
                          agentDiscount: parseInt(item.agentDiscount),
                          UserId: item.UserId
                        });
                      });
                      this.setState({ offers: offerHold });
                      this.renderOffer();
                    });
                  }
                });
              }
            } else {
              this.props.history.push(`/createuser`);
            }
          });
        } else if (res.data.role === "agent") {
          let offerHold = [];
          let params = this.props.history.location.search.split("=");
          let UserId = params[1];
          this.setState({ userid: UserId });
          APIserver.multiofferUserReturn(UserId).then(response => {
            console.log(response.data);
            this.setState({
              user: {
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                phone: response.data.phone,
                status: response.data.status
              }
            });
            this.setState({ comparables: response.data.comparables });
            this.setState({
              ibuycomparables: response.data.ibuycomparables
            });
            this.setState({ projDom: response.data.projDom });
            this.setState({
              linkList: {
                marketTrends: response.data.marketTrends,
                negotiateOffer: response.data.negotiateOffer,
                reviewInstant: response.data.reviewInstant,
                saleTime: response.data.saleTime,
                settleSheet: response.data.settleSheet,
                detailsUpgrades: response.data.detailsUpgrades,
                agentOffer: response.data.agentOffer,
                iandD: response.data.iandD
              }
            });
            this.setState({ address: response.data.address });
            this.setState({ agent: response.data.Agent });
            APIserver.offerReturn(UserId).then(res => {
              res.data.map((item, key) => {
                offerHold.push({
                  offerType: item.type,
                  offerGross: parseFloat(item.gross.replace(/,/g, "")),
                  offerNet: parseFloat(item.net.replace(/,/g, "")),
                  inspection: parseFloat(item.fees),
                  repairEstimate: parseFloat(
                    item.repairEstimate.replace(/,/g, "")
                  ),
                  bestOffer: item.bestOffer,
                  agentDiscount: parseFloat(item.agentDiscount),
                  UserId: item.UserId
                });
              });
              this.setState({ offers: offerHold });

              this.renderOffer();
            });
          });
        }
      }
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
      console.log(offersWithNet);
      let sortedOffers = offersWithNet.sort((a, b) =>
        a.ibuyofferNet < b.ibuyofferNet
          ? 1
          : (a.ibuyofferNet === b.ibuyofferNet) - 1
      );
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
      this.state.offers.map((item, key) => {
        if (
          item.offerType === "Market" ||
          item.offerType === "market" ||
          item.offerType === "agent" ||
          item.offerType === "Agent"
        ) {
          let agentCut = (6 / 100) * item.offerGross;
          let agentForgiveness = (item.agentDiscount / 100) * agentCut;
          let realAgentCut = agentCut - agentForgiveness;
          let escrowCut = (1 / 100) * item.offerGross;
          let total = agentCut + escrowCut - agentForgiveness;
          let newNet = item.offerGross - total;
          this.setState({
            marketofferType: item.offerType,
            marketofferGross: item.offerGross,
            marketofferNet: newNet,
            marketinspection: item.inspection,
            marketescrowCut: escrowCut,
            marketagentCut: agentCut,
            marketagentDiscount: item.agentDiscount,
            marketrealAgentCut: realAgentCut,
            markettotal: total,
            marketbestOffer: item.bestOffer
          });
        } else {
          console.log("nothin");
        }
      });
    }
  };

  testFloat = n => {
    return Number(n) === n && n % 1 !== 0;
  };

  giveMehcommas = (x, y) => {
    if (x === undefined || x === NaN || x === null) {
      return "TBD";
    } else {
      if (this.testFloat(x) === true) {
        let floatNum = parseFloat(x).toFixed(2);
        let splitNum = String(floatNum).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return splitNum;
      } else {
        let splitNum = String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return splitNum;
      }
    }
  };

  checkIbuyCompare = (x, y) => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;

      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <a
            className={`ibuyhomecompare ${this.props.classes.disabledLink} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.ibuyhomecompare}`}
            href={link}
            disabled
          >
            {y}
          </a>
        </div>
      );
    }
    return (
      <div>
        <div className={this.props.classes.checkHold}>
          <img src={Checkmark} className={this.props.classes.check} />
        </div>
        <a
          className={`ibuyhomecompare ${this.props.classes.link} ${
            this.props.classes.typographyStraight
          } ${this.props.classes.ibuyhomecompare}`}
          target="_blank"
          href={x}
          disabled
        >
          {y}
        </a>
      </div>
    );
  };

  checkMarketCompare = (x, y) => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;
      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <a
            className={`compareHome ${this.props.classes.disabledLink} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.compareHome}`}
            href={link}
            disabled
          >
            {y}
          </a>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.props.classes.checkHold}>
            <img src={Checkmark} className={this.props.classes.check} />
          </div>
          <a
            className={`compareHome ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.compareHome}`}
            target="_blank"
            href={x}
            disabled
          >
            {y}
          </a>
        </div>
      );
    }
  };

  checkibuyCashClose = (x, y) => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;
      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <Link
            className={`ibuyprojcash ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.ibuyprojcash}`}
            to={link}
          >
            Projected Cash At Close
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.props.classes.checkHold}>
            <img src={Checkmark} className={this.props.classes.check} />
          </div>
          <Link
            className={`ibuyprojcash ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.ibuyprojcash}`}
            to={`/ibuyestsales?id=${this.state.userid}`}
          >
            Projected Cash At Close
          </Link>
        </div>
      );
    }
  };

  marketTrends = x => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;
      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <Link
            className={` ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            }`}
            to={link}
            disabled
          >
            Market Trends
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.props.classes.checkHold}>
            <img src={Checkmark} className={this.props.classes.check} />
          </div>
          <Link
            className={` ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            }`}
            to={`/markettrends?id=${this.state.userid}`}
          >
            Market Trends
          </Link>
        </div>
      );
    }
  };

  checkmarketcashClose = (x, y) => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;
      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <Link
            className={`proj-cash-market ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.projCashMarket}`}
            disabled
            to={Link}
          >
            Projected Cash At Close
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.props.classes.checkHold}>
            <img src={Checkmark} className={this.props.classes.check} />
          </div>
          <Link
            className={`proj-cash-market ${this.props.classes.link} ${
              this.props.classes.typographyStraight
            } ${this.props.classes.projCashMarket}`}
            to={`/estsales?id=${this.state.userid}`}
          >
            Projected Cash At Close
          </Link>
        </div>
      );
    }
  };

  checksellerSavings = (x, y) => {
    if (x === undefined || x === NaN || x === null || x === "") {
      let linkOne = this.props.history.location.pathname;
      let linkTwo = this.props.history.location.search;
      let link = linkOne + linkTwo;
      return (
        <div>
          <div className={this.props.classes.dashHold}>
            <img src={Dash} className={this.props.classes.dash} />
          </div>
          <Link
            className={`${this.props.classes.link} ${
              this.props.classes.typographyStraight
            }`}
            to={link}
            disabled
          >
            Agent Offer
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <div className={this.props.classes.checkHold}>
            <img src={Checkmark} className={this.props.classes.check} />
          </div>
          <Link
            className={`${this.props.classes.link} ${
              this.props.classes.typographyStraight
            }`}
            to={`/agentoffer?id=${this.state.userid}`}
          >
            Agent Offer
          </Link>
        </div>
      );
    }
  };

  checkNull = x => {
    if (x === null || x === undefined || x === NaN) {
      return "TBD";
    } else {
      return x;
    }
  };

  sendMessage = () => {
    APIserver.sendmessage(
      this.state.agent.AccountId,
      `${this.state.user.firstname} ${this.state.user.lastname}`,
      this.state.multiline,
      this.state.user.status
    ).then(response => {});
  };

  render() {
    const { classes } = this.props;
    let linkOne = this.props.history.location.pathname;
    let linkTwo = this.props.history.location.search;
    let link = linkOne + linkTwo;
    return (
      <div className={classes.flex}>
        <MuiThemeProvider theme={theme}>
          <Grid container direction="row" align="center">
            <Grid className={classes.topDiv} item md={12} align="center">
              <Grid container direction="row">
                <Grid item md={4} xs={12} sm={12}>
                  <div className={`${classes.panels} ${classes.panelLeft}`}>
                    <Typography
                      className={`${classes.iBuyerPanelHead} ${
                        classes.typographyRounded
                      }`}
                      variant="h5"
                    >
                      iBuyer Control Panel
                    </Typography>
                    <div className={classes.pieHold}>
                      <PieChart
                        data={[
                          {
                            title: "One",
                            value: 10,
                            color: "#46A1BA"
                          },
                          {
                            title: "Two",
                            value: 15,
                            color: "#72b9ca"
                          },
                          {
                            title: "Three",
                            value: 20,
                            color: "#357a8e"
                          }
                        ]}
                        lineWidth={25}
                        animate
                      />
                    </div>
                    <Grid container direction="column" align="center">
                      <Grid
                        item
                        md={12}
                        className={`indDiv ${classes.links} ${classes.indDiv}`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="Information About Working With Us"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          <div>
                            <div className={classes.checkHold}>
                              <img src={Checkmark} className={classes.check} />
                            </div>
                            <Link
                              className={`${classes.link} ${
                                classes.typographyStraight
                              }`}
                              onClick={this.handleOpen}
                              to={link}
                            >
                              Intro & Disclosure
                            </Link>
                          </div>
                        </Tooltip>
                        <ContractModal
                          open={this.state.open}
                          onClose={this.handleClose}
                        />
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`homesurveyiBuyDiv ${
                          classes.homesurveyiBuyDiv
                        }`}
                        align="center"
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="View your Home Survey answers"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          <div>
                            <div className={classes.checkHold}>
                              <img src={Checkmark} className={classes.check} />
                            </div>
                            <Link
                              className={`${classes.link} ${
                                classes.typographyStraight
                              }`}
                              to={`/detailsupgrades?id=${this.state.userid}`}
                            >
                              Home Survey
                            </Link>
                          </div>
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`checkIbuyCompare ${classes.links} ${
                          classes.checkIbuyCompare
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="Details on how the ibuyer valued your home"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.checkIbuyCompare(
                            this.state.ibuycomparables,
                            "Home Comparables Used"
                          )}
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`reviewInstantOffers ${classes.links} ${
                          classes.reviewInstantOffers
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="right"
                          title="All ibuyer offers"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          <div>
                            <div className={classes.checkHold}>
                              <img src={Checkmark} className={classes.check} />
                            </div>
                            <Link
                              className={`${classes.link} ${
                                classes.typographyStraight
                              } ${classes.reviewInstaDiv}`}
                              to={`/profilemain?id=${this.state.userid}`}
                            >
                              Review Instant Offers
                            </Link>
                          </div>
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`checkibuyCashClose ${classes.links} ${
                          classes.checkibuyCashClose
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="right"
                          title="Put in your mortgage payoff, see the breakdown of all the costs taking the ibuyer offer and your projected net proceeds"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.checkibuyCashClose(this.state.ibuyofferGross)}
                        </Tooltip>
                      </Grid>
                      <Grid item md={12} className={classes.links}>
                        <Link className={classes.hide} to="#">
                          Negotiate Offer
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                  sm={12}
                  className={`${classes.multiofferDiv} ${classes.compareDiv}`}
                  align="center"
                >
                  <Typography
                    className={`${classes.offerPanelHead} ${
                      classes.typographyRounded
                    }`}
                    variant="h4"
                  >
                    Multioffer Platform
                  </Typography>
                  {/* <div className={classes.haloHold}>
                    <img src={checkmark} className={classes.halo} />
                  </div> */}
                  <Typography
                    className={`${classes.typographyStraight} ${
                      classes.address
                    }`}
                  >
                    {this.state.address}
                  </Typography>
                  <Grid container direction="row">
                    <Grid item md={6} xs={6} sm={6}>
                      <div className={`${classes.ibuyDiv} ibuyDiv`}>
                        <Typography
                          className={classes.typographyRounded}
                          variant="h6"
                        >
                          Leading iBuyer Offer
                        </Typography>
                        <Grid container direction="column" align="center">
                          <div>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                {this.state.ibuyofferType}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                placement="left"
                                title="Gross Offer"
                                className={classes.zIndex}
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoGross
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                ${this.giveMehcommas(this.state.ibuyofferGross)}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                title={`iBuyer service charge ${
                                  this.state.ibuyinspection
                                }%, title & escrow Fees 1%, Offervana service fee 1%, Estimated repair costs $ ${this.giveMehcommas(
                                  this.state.ibuyrepairest
                                )}`}
                                placement="left"
                                className={classes.zIndex}
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoNet
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                - ${this.giveMehcommas(this.state.ibuytotal)}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                title="Net Offer"
                                placement="left"
                                className={classes.zIndex}
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoNet
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                ${this.giveMehcommas(this.state.ibuyofferNet)}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                placement="right"
                                title="Sell Now, Or Wait A While. The Choice Is Yours!"
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`you-pick-close ${
                                    classes.typographyStraight
                                  } ${classes.youpickCloseDate}`}
                                >
                                  You Pick The Close Date
                                </Typography>
                              </Tooltip>
                            </Grid>
                          </div>
                          <Grid
                            item
                            md={12}
                            className={classes.topMarginMiddlePanel}
                          >
                            <Button
                              className={`${classes.button} ${
                                classes.buttoniBuySide
                              }`}
                              color="primary"
                            >
                              Accept Offer
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid item md={6} xs={6} sm={6}>
                      <div className={`${classes.marketbuyDiv} marketbuyDiv`}>
                        <Typography
                          className={classes.typographyRounded}
                          variant="h6"
                        >
                          Market Sales Offer
                        </Typography>
                        <Grid container direction="column" align="center">
                          <div>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                {this.state.marketofferType}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                placement="left"
                                title="Gross Offer"
                                className={classes.zIndex}
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoGross
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                $
                                {this.giveMehcommas(
                                  this.state.marketofferGross
                                )}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                title={`Home sale charge ${
                                  this.state.marketinspection
                                }%, title & escrow Fees 1%, agent discount ${
                                  this.state.marketagentDiscount
                                }%`}
                                placement="left"
                                className={classes.zIndex}
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoNet
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                - ${this.giveMehcommas(this.state.markettotal)}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                placement="left"
                                title="Net Offer"
                                classes={{ tooltip: classes.lightTooltip }}
                                className={classes.zIndex}
                              >
                                <Typography
                                  className={`${classes.moreInfo} ${
                                    classes.moreInfoNet
                                  }`}
                                >
                                  ?
                                </Typography>
                              </Tooltip>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.bestOffersText
                                }`}
                              >
                                ${this.giveMehcommas(this.state.marketofferNet)}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={12}
                              className={classes.topMarginMiddlePanel}
                            >
                              <Tooltip
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 200 }}
                                placement="right"
                                title="Let Us Handle The Work While You Make The Most Money"
                                classes={{ tooltip: classes.lightTooltip }}
                              >
                                <Typography
                                  className={`projSalesTime ${
                                    classes.typographyStraight
                                  } ${classes.projSalesTime}`}
                                >
                                  {this.checkNull(this.state.projDom)} Days
                                  Projected Sales Time
                                </Typography>
                              </Tooltip>
                            </Grid>
                          </div>
                          <Grid
                            item
                            md={12}
                            className={classes.topMarginMiddlePanel}
                          >
                            <Button className={classes.button} color="primary">
                              Accept Offer
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={4} xs={12} sm={12}>
                  <div
                    className={`panel-two ${classes.panels} ${
                      classes.panelTwo
                    }`}
                  >
                    <Typography
                      className={`${classes.marketPanelHead} ${
                        classes.typographyRounded
                      }`}
                      variant="h5"
                    >
                      Market Control Panel
                    </Typography>
                    <div className={classes.pieHold}>
                      <PieChart
                        data={[
                          {
                            title: "One",
                            value: 10,
                            color: "#46A1BA"
                          },
                          {
                            title: "Two",
                            value: 15,
                            color: "#72b9ca"
                          },
                          {
                            title: "Three",
                            value: 20,
                            color: "#357a8e"
                          }
                        ]}
                        lineWidth={25}
                        animate
                      />
                    </div>
                    <Grid container direction="column" align="center">
                      <Grid
                        item
                        md={12}
                        xs={12}
                        sm={12}
                        className={`homesurveyDiv ${classes.links} ${
                          classes.homesurveyDiv
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="View your Home Survey answers"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          <div>
                            <div className={classes.checkHold}>
                              <img src={Checkmark} className={classes.check} />
                            </div>
                            <Link
                              className={`${classes.link} ${
                                classes.typographyStraight
                              }`}
                              to={`/detailsupgrades?id=${this.state.userid}`}
                            >
                              Home Survey
                            </Link>
                          </div>
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`marketTrends ${classes.links} ${
                          classes.marketTrends
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="Market Trends In Your Area"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.marketTrends(this.state.projDom)}
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`checkMarketCompare ${classes.links} ${
                          classes.checkMarketCompare
                        }`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="Compare Your Home To Similar Homes On The Market"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.checkMarketCompare(
                            this.state.comparables,
                            "Comparable Homes Factored"
                          )}
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`fromTop marketProj ${classes.links} ${
                          classes.marketProj
                        } ${classes.fromTop}`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="Put in your mortgage payoff, see the breakdown of all the costs when taking the agent offer and putting your home on the market and your projected net proceeds"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.checkmarketcashClose(this.state.marketofferNet)}
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        md={12}
                        className={`fromTop sellerSavings ${classes.links} ${
                          classes.sellerSavings
                        } ${classes.fromTop}`}
                      >
                        <Tooltip
                          TransitionComponent={Zoom}
                          TransitionProps={{ timeout: 200 }}
                          placement="left"
                          title="View Your Agents Offer"
                          classes={{ tooltip: classes.lightTooltip }}
                        >
                          {this.checksellerSavings(this.state.marketofferGross)}
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid item md={12}>
                  <p className={classes.hide}>t</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={classes.midDiv} item md={12} xs={12} sm={12}>
              <Grid container direction="row" align="center">
                <Grid item md={3} xs={false} sm={false}>
                  <div className={classes.hide}>
                    <Typography
                      className={`${classes.iBuyerPanelHead} ${
                        classes.typographyStraight
                      }`}
                      variant="h5"
                    >
                      iBuyer Control Panel
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  sm={12}
                  className={classes.multiofferDiv}
                >
                  <Typography
                    className={classes.typographyStraight}
                    variant="h4"
                  >
                    Have Any Questions?
                  </Typography>
                  <Grid container direction="row">
                    <Grid item md={12} xs={12} sm={12}>
                      <div className={classes.messageDiv}>
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Message Your Agent"
                          multiline
                          rowsMax="10"
                          value={this.state.multiline}
                          onChange={this.handleChange("multiline")}
                          className={classes.textField}
                          margin="normal"
                          variant="outlined"
                          color="primary"
                        />
                        <Send
                          onClick={this.sendMessage}
                          color="primary"
                          className={classes.sendButton}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={false} sm={false}>
                  <div className={classes.hide}>
                    <Typography
                      className={`${classes.marketPanelHead} ${
                        classes.typographyStraight
                      }`}
                      variant="h5"
                    >
                      Market Control Panel
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid className={classes.botDiv} item md={12} xs={12} sm={12}>
              <Grid container direction="row" align="center">
                <Grid item md={3} xs={false} sm={false}>
                  <div className={classes.hide}>
                    <Typography
                      className={`${classes.iBuyerPanelHead} ${
                        classes.typographyStraight
                      }`}
                      variant="h5"
                    >
                      iBuyer Control Panel
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  sm={12}
                  className={classes.multiofferDiv}
                >
                  <Grid container direction="row">
                    <Grid item md={12}>
                      <div className={classes.messageDiv}>
                        <Typography
                          className={`${classes.botDivPara} ${
                            classes.typographyStraight
                          }`}
                        >
                          Hello I am {this.state.agent.firstname}{" "}
                          {this.state.agent.lastname}, an agent with JK Realty,
                          the local affliate Real Estate Brokerage and I am here
                          to present you your offers and work with you to bring
                          you the best offer and option possible
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={3} xs={false} sm={false}>
                  <div className={classes.hide}>
                    <Typography
                      className={`${classes.marketPanelHead} ${
                        classes.typographyStraight
                      }`}
                      variant="h5"
                    >
                      Market Control Panel
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={4} xs={12} sm={12}>
                  <Typography
                    className={classes.typographyStraight}
                    variant="h5"
                  >
                    {this.state.agent.firstname} {this.state.agent.lastname}
                  </Typography>
                  <Typography
                    className={classes.typographyStraight}
                    variant="h5"
                  >
                    Realtor
                  </Typography>
                  <Typography
                    className={classes.typographyStraight}
                    variant="h5"
                  >
                    JK Realty/Offervana Division
                  </Typography>
                </Grid>
                <Grid item md={4} xs={12} sm={12}>
                  <div className={classes.profhold} />
                </Grid>
                <Grid item md={4} xs={12} sm={12}>
                  <Typography
                    className={classes.typographyStraight}
                    variant="h5"
                  >
                    {this.state.agent.email}
                  </Typography>
                  <Typography
                    className={classes.typographyStraight}
                    variant="h5"
                  >
                    {this.state.agent.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

Multioffer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Multioffer);
