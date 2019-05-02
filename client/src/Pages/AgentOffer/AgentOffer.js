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
import Fence from "../SurveyPages/Fence";
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
    right: "10px",
    top: "1em",
    [theme.breakpoints.down("xs")]: {
      width: "290px",
      height: "45px"
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
  input: {
    border: "0.3px solid #46A1BA",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #46A1BA",
      outline: "none",
      color: "black"
    },
    width: "150px",
    height: "30px",
    outline: "none"
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
    left: "3.8em",
    [theme.breakpoints.down("xs")]: {
      left: "0em"
    },
    [theme.breakpoints.down("sm")]: {
      left: "0em"
    }
  },
  mortage: {
    position: "relative",
    left: "2.2em",
    [theme.breakpoints.down("xs")]: {
      left: "-1.28em",
      width: "200px"
    },
    [theme.breakpoints.down("sm")]: {
      left: "-1.28em",
      width: "200px"
    }
  },
  escrow: {
    position: "relative",
    left: "1.5em"
  },
  homeSale: {
    position: "relative",
    left: "2.1em",
    [theme.breakpoints.down("xs")]: {
      left: "-0.65em",
      width: "150px"
    },
    [theme.breakpoints.down("sm")]: {
      left: "-0.65em",
      width: "150px"
    }
  },
  agentDis: {
    position: "relative",
    left: "0.8em"
  }
});

class AgentOffer extends React.Component {
  state = {
    marketOffer: []
  };

  componentDidMount = () => {
    let params = this.props.history.location.search.split("=");
    let UserId = params[1];
    let offerHold = [];
    this.setState({ userid: UserId });
    APIserver.offerReturn(UserId).then(res => {
      console.log(res.data);
      res.data.map((item, key) => {
        offerHold.push({
          offerType: item.type,
          offerGross: parseFloat(item.gross.replace(/,/g, "")),
          offerNet: parseFloat(item.net.replace(/,/g, "")),
          inspection: parseInt(item.fees),
          bestOffer: item.bestOffer,
          agentDiscount: parseInt(item.agentDiscount),
          UserId: item.UserId
        });
      });
      console.log(offerHold);
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
        console.log("yes");
        let fee = (item.inspection / 100) * item.offerGross;
        let agentdis = (item.agentDiscount / 100) * fee;
        let cut = fee - agentdis;
        this.setState({
          offerType: item.offerType,
          offerGross: item.offerGross,
          offerNet: item.offerNet,
          inspection: item.inspection,
          discount: agentdis,
          totalFee: cut,
          agentDiscount: item.agentDiscount,
          bestOffer: item.bestOffer
        });
      }
    });
  };

  handleInputChange = e => {
    let value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: parseFloat(value.replace(/,/g, ""))
    });
  };

  giveMehcommas = x => {
    return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  render() {
    console.log(this.state);
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
                <Grid item md={1} xs={false} sm={1} />
                <Grid item md={1} xs={false} sm={false} />
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
                          Agent Offer Discount
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
                      <Grid item md={4} xs={5} sm={5}>
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.offer
                          }`}
                        >
                          Offervana Seller Credit
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
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.agentDis
                          }`}
                        >
                          %{this.state.agentDiscount}
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
                      <Grid item md={4} xs={4} sm={4} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.homeSale
                          }`}
                        >
                          Seller Savings
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        xs={3}
                        sm={3}
                        align="right"
                        className={classes.hidden}
                      >
                        t
                      </Grid>
                      <Grid item md={4} xs={4} sm={4} align="left">
                        <Typography className={`${classes.titleStraight}`}>
                          ${this.giveMehcommas(this.state.discount)}
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
                      <Grid item md={4} xs={4} sm={4} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.mortage
                          }`}
                        >
                          Reduced Home Sales Charge
                        </Typography>
                      </Grid>
                      <Grid item md={6} xs={6} sm={6} align="center">
                        <Typography
                          className={`${classes.titleStraight} ${
                            classes.escrow
                          }`}
                        >
                          ${this.giveMehcommas(this.state.totalFee)}
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

AgentOffer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AgentOffer);
