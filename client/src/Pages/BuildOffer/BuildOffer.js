import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver";
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
  deleteButton: {
    fontFamily: "VAGRounded",
    backgroundColor: "#46A1BA",
    fontSize: "32px",
    width: "80%",
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
    color: "white",
    fontSize: "24px",
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
  mainDiv: {
    backgroundColor: "#e3e3e3",
    height: "225%",
    boxShadow: "4px 4px 15px grey"
  },
  radio: {
    color: "#46A1BA"
  },
  renderBox: {
    fontFamily: "VAGRounded",
    backgroundColor: "#46A1BA",
    fontSize: "32px",
    width: "80%",
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
  }
});

class BuildOffer extends React.Component {
  state = {
    offerType: "",
    offerGross: "",
    offerNet: "",
    offerInspection: "",
    bestoffer: "",
    UserId: "",
    agentDiscount: "",
    repairEstimate: "",
    offerHold: [],
    updateOrNew: "Submit"
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  checkRepair = repair => {
    if (repair) {
      return repair;
    } else {
      return 0;
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.updateOrNew === "Submit") {
      APIserver.offerPost({
        type: this.state.offerType,
        gross: this.state.offerGross,
        net: this.state.offerNet,
        fees: this.state.offerInspection,
        repairEstimate: this.checkRepair(this.state.repairEstimate),
        bestOffer: this.state.bestoffer,
        agentDiscount: this.state.agentDiscount,
        UserId: this.state.UserId
      }).then(res => {
        alert(`Added Offer From ${res.data.type} To User ${this.state.UserId}`);
        this.setState({ offerType: "" });
        this.setState({ offerGross: "" });
        this.setState({ offerNet: "" });
        this.setState({ offerInspection: "" });
        this.setState({ agentDiscount: "" });
      });
    } else {
      APIserver.updateOffer({
        id: this.state.offerId,
        offer: this.state.offerType,
        gross: this.state.offerGross,
        net: this.state.offerNet,
        fees: this.state.offerInspection,
        repairEstimate: this.checkRepair(this.state.repairEstimate),
        bestOffer: this.state.bestoffer,
        agentDiscount: this.state.agentDiscount
      }).then(ret =>
        alert(
          `Updated Offer From ${ret.data.type} To User ${this.state.UserId}`
        )
      );
    }
  };

  deleteOffer = event => {
    console.log(event);
    APIserver.deleteOffer(event).then(ret => console.log(ret.data));
  };

  updateOffers = (id, offer, gross, net, fee, dis, repair) => {
    if (offer === "New") {
      this.setState({ updateOrNew: "Submit" });
    } else {
      this.setState({ updateOrNew: "Update" });
    }
    let offerOf = offer;
    let grossOf = gross;
    let netOf = net;
    let feeOf = fee;
    let repairOf = repair;
    let disOf = dis;
    if (offerOf === undefined || offerOf === NaN || offerOf === null) {
      offerOf = 0;
    }
    if (grossOf === undefined || grossOf === NaN || grossOf === null) {
      grossOf = 0;
    }
    if (netOf === undefined || netOf === NaN || netOf === null) {
      netOf = 0;
    }
    if (feeOf === undefined || feeOf === NaN || feeOf === null) {
      feeOf = 0;
    }
    if (repairOf === undefined || repairOf === NaN || repairOf === null) {
      repairOf = 0;
    }
    if (disOf === undefined || disOf === NaN || disOf === null) {
      disOf = 0;
    }
    this.setState({ offerId: id });
    this.setState({ offerType: offerOf });
    this.setState({ offerGross: grossOf });
    this.setState({ offerNet: netOf });
    this.setState({ offerInspection: feeOf });
    this.setState({ repairEstimate: repairOf });
    this.setState({ agentDiscount: disOf });
  };

  componentDidMount = () => {
    let offerHold = [
      {
        offerType: "New",
        offerGross: "",
        offerNet: "",
        inspection: "",
        bestOffer: "",
        agentDiscount: ""
      }
    ];
    let user = this.props.history.location.search.split("=");
    this.setState({ UserId: user[1] });
    APIserver.multiofferUserReturn(user[1]).then(res => {
      this.setState({
        agentId: res.data.AgentId
      });
      APIserver.offerReturn(res.data.id).then(response => {
        response.data.map((item, key) => {
          offerHold.push({
            id: item.id,
            offerType: item.type,
            offerGross: item.gross,
            offerNet: item.net,
            inspection: item.fees,
            repairEstimate: item.repairEstimate,
            bestOffer: item.bestOffer,
            agentDiscount: item.agentDiscount,
            UserId: item.UserId
          });
        });
        this.setState({ offerHold: offerHold });
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
                        <Grid item md={12} sm={12} xs={12}>
                          <Grid direction="row" container>
                            <Grid
                              item
                              md={12}
                              sm={12}
                              xs={12}
                              className={classes.hide}
                            >
                              t
                            </Grid>
                          </Grid>
                          <Grid direction="row" container>
                            <Grid item md={1} sm={1} xs={1} />
                            <Grid item md={1} sm={1} xs={1}>
                              <BackButton
                                size="small"
                                variant="contained"
                                color="primary"
                                component={backButton}
                              />
                            </Grid>
                            <Grid item md={8} sm={10} xs={10} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={classes.typography}
                              >
                                Build Offers
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container direction="row" align="center">
                        <Grid item md={12} sm={12} xs={12}>
                          <form action="post">
                            <Grid item md={1} sm={false} xs={false} />
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.offerType}
                                onChange={this.handleInputChange}
                                type="text"
                                name="offerType"
                                placeholder="Where is Offer From?"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.offerGross}
                                onChange={this.handleInputChange}
                                type="text"
                                name="offerGross"
                                placeholder="What is the Gross Offer?"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.offerNet}
                                onChange={this.handleInputChange}
                                type="text"
                                name="offerNet"
                                placeholder="What is the Net Offer?"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.offerInspection}
                                onChange={this.handleInputChange}
                                type="text"
                                name="offerInspection"
                                placeholder="What is the Offer Inspection Price?"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.repairEstimate}
                                onChange={this.handleInputChange}
                                type="text"
                                name="repairEstimate"
                                placeholder="Estimated Repair Costs?"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.form}
                                value={this.state.agentDiscount}
                                onChange={this.handleInputChange}
                                type="text"
                                name="agentDiscount"
                                placeholder="Agent Discount %"
                              />
                            </Grid>
                            <Grid item md={8} sm={12} xs={12}>
                              <input
                                className={classes.loginButton}
                                onClick={this.handleFormSubmit}
                                type="submit"
                                value={this.state.updateOrNew}
                              />
                            </Grid>
                          </form>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                          <Typography className={classes.typography}>
                            Click An Offer To Edit
                          </Typography>
                          <Grid container direction="row">
                            {this.state.offerHold.map((item, key) => {
                              return (
                                <Grid item md={12} sm={12} xs={12}>
                                  <Grid container direction="row">
                                    <Grid item md={6} sm={12} xs={12}>
                                      <div
                                        className={classes.renderBox}
                                        onClick={() =>
                                          this.updateOffers(
                                            item.id,
                                            item.offerType,
                                            item.offerGross,
                                            item.offerNet,
                                            item.inspection,
                                            item.repairEstimate,
                                            item.agentDiscount
                                          )
                                        }
                                      >
                                        <Typography
                                          className={classes.typographyStraight}
                                        >
                                          Update: {item.offerType}
                                        </Typography>
                                      </div>
                                    </Grid>
                                    <Grid item md={6} xs={12} sm={12}>
                                      <input
                                        className={classes.deleteButton}
                                        onClick={() =>
                                          this.deleteOffer(item.id)
                                        }
                                        type="submit"
                                        value={`Delete: ${item.offerType}`}
                                      />
                                    </Grid>
                                  </Grid>
                                </Grid>
                              );
                            })}
                          </Grid>
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

BuildOffer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BuildOffer);
