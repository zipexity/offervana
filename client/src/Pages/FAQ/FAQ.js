import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import history from "../../Components/History/history";
import Footer from "../HomePage/footer";

const styles = theme => ({
  topDiv: {
    backgroundColor: "white",
    paddingBottom: "5em"
  },
  heading: {
    fontSize: "26px !important",
    fontWeight: theme.typography.fontWeightRegular
  },
  root: {
    width: "100%",
    marginTop: "1.3em"
  },
  Typography: {
    color: "#36454f",
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
  TypographyStraight: {
    color: "#5E5E5E",
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
  }
});

class faq extends React.Component {
  state = {};

  componentDidMount = () => {
    history.push(this.props.location.pathname);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container direction="row" spacing={24}>
          <Grid align="center" item md={12}>
            <div className={classes.topDiv}>
              <Grid align="left" item md={12} className={classes.offervanaWork}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      How does OfferVana work?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      OfferVana is a multi offer platform that gives you the
                      power to submit your home for a cash offer in one place
                      and receive offers from all the major iBuyer’s including
                      OpenDoor, OfferPad, Zillow Offers, and dozens of other
                      local investors who buy homes cash.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid align="left" item md={12} className={classes.negotiate}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      Will OfferVana negotiate my cash offer with the iBuyer?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      Yes. In many circumstances we can negotiate with the
                      iBuyers by giving them an opportunity to meet or beat the
                      other iBuyers for your home. Many times we can find missed
                      upgrades, lot sizes, or better comps, to justify the
                      iBuyer coming up on their initial offer price.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>

              <Grid align="left" item md={12} className={classes.offervanaCost}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      Does OfferVana cost anything?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      No. OfferVana is a free service and will work with you to
                      find the best offer for your home. If you decide to sell
                      your home the conventional way our team charges the
                      typical 6% fee of which 3% goes to the buyers agent. There
                      are no other additional costs.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>

              <Grid align="left" item md={12} className={classes.offervanaSell}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      Can OfferVana sell my home?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      Yes. Offervana also works as a full service Real Estate
                      team that can sell your home the conventional way if you
                      decide to forgo the instant cash offer.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid
                align="left"
                item
                md={12}
                className={classes.offervanaCancel}
              >
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      If I list with the OfferVana team and then decide to sell
                      to a iBuyer, can I cancel my listing?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      Yes. You can cancel your listing at anytime to accept an
                      offer from an iBuyer. We would only require you to pay for
                      the marketing the OfferVana team did to include yard signs
                      and professional photos. Typically these fees are less
                      than $500.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid
                align="left"
                item
                md={12}
                className={classes.offervanaEqAdvance}
              >
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      How does the equity advance program work?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.TypographyStraight}>
                      We understand many times home owners need access to a
                      portion of their equity for moving expenses to their next
                      home or destination. If you accept an offer using our
                      multi offer platform or list your home at our suggested
                      price, OfferVana will loan up to % of your available
                      equity. Terms and conditions apply.
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
              <Grid align="left" item md={12}>
                <ExpansionPanel className={classes.root}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      className={`${classes.heading} ${classes.Typography}`}
                    >
                      Does my property qualify for the offers?
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography
                          className={`${classes.heading} ${classes.Typography}`}
                        >
                          OfferVana offers apply to homes that meet the
                          following criteria:
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <ul>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Single Family Homes, Townhouses, Duplexes, and
                              Condos. Unfortunately,
                              prefabricated/manufactured/mobile homes do not
                              qualify.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Homes built after 1950 in Maricopa County and San
                              Tan Valley, Arizona. *If your home was built
                              before 1950, still submit your property as we have
                              cash buyers that will buy those homes.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Homes that sit on a maximum of an acre of land and
                              not in a flood zone.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Homes that don’t have solar leases but only if the
                              solar lease have been pre-paid at or prior to
                              closing or can be removed professionally by your
                              solar company prior to closing.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Homes that don’t have non-permitted additions,
                              significant foundation issues, solar leases, or
                              polybutylene plumbing.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Homes with clear title, are not owned by banks,
                              government agencies, no double escrows and not
                              leased at time of closing.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              In the event your home does not apply to this
                              criteria, still submit your property as we still
                              will submit your home to several local home
                              investors for a cash offer and find you buyer.
                            </Typography>
                          </li>
                          <li>
                            <Typography className={classes.TypographyStraight}>
                              Not all homes meet the criteria for multiple
                              offers. We submit to obtain offers from multiple
                              investors and institutions as well as sharing with
                              you the conventional way to sell your home for a
                              side-by-side comparison.
                            </Typography>
                          </li>
                        </ul>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
  }
}

faq.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(faq);
