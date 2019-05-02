import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import APIserver from "../../Utils/api/APIserver";
import contract from "./contract.pdf";
import Checkbox from "@material-ui/core/Checkbox";

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
  title: {
    color: "#5E5E5E",
    fontSize: "48px",
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
  hide: {
    visibility: "hidden"
  },
  contractHold: {
    height: "450px",
    width: "100%"
  },
  forMobile: {
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-100px"
    }
  }
});

class Contract extends React.Component {
  state = {
    contract: localStorage.getItem("contract"),
    buttonStatus: true
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
    this.check(name, e.target.checked);
  };

  check = (name, value) => {
    if (value === true) {
      this.setState({ buttonStatus: false });
    } else {
      this.setState({ buttonStatus: true });
    }
  };

  submitAnswers = e => {
    localStorage.setItem("comingFrom", "left");
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
                APIserver.updateUser({
                  id: response.data.id,
                  contract: this.state.contract
                }).then(ret => this.props.history.push(`/api/surveys/:id`));
              }
            } else {
              this.props.history.push(`/createuser`);
            }
          });
        } else if (res.data.role === "agent") {
          APIserver.returnAgent().then(agent => {
            this.props.history.push(`/dashboard?AgentId=${agent.data.id}`);
          });
        }
      }
    });
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    console.log(this.state.contract);
    let slide = localStorage.getItem("comingFrom");
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
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
                    <Grid item md={12} xs={12}>
                      <Grid item md={12} xs={12} sm={12} align="center">
                        <Typography className={classes.title}>
                          Terms of Service
                        </Typography>
                      </Grid>
                      <Grid direction="row" container spacing={8}>
                        <Grid item md={1} align="center" />
                        <Grid item md={10} xs={12} sm={12} align="center">
                          <div className={classes.contractHold}>
                            <embed
                              src={
                                contract + "#toolbar=0&navpanes=0&scrollbar=0"
                              }
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} align="center">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={this.state.contract}
                                onChange={this.onChange("contract")}
                                value="contract"
                                color="primary"
                              />
                            }
                            label={
                              <Typography className={classes.titleStraight}>
                                I agree to Offervana's terms of service
                              </Typography>
                            }
                          />
                        </Grid>
                        <Grid
                          container
                          direction="row"
                          align="center"
                          className={classes.forMobile}
                        >
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid item md={4} xs={12}>
                            <SurveyButton
                              size="large"
                              color="primary"
                              variant="contained"
                              disabled={this.state.buttonStatus}
                              onClick={this.submitAnswers}
                            >
                              Next
                            </SurveyButton>
                          </Grid>
                          <Grid item md={4}>
                            <p className={classes.hide}>t</p>
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

Contract.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contract);
