import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver.js";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Send from "@material-ui/icons/Send";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" } // Purple and green play nicely together.
  }
});

const styles = theme => ({
  root: {
    flewGrow: 1,
    marginTop: "5em"
  },
  form: {
    width: "75%",
    padding: "16px 32px",
    fontFamily: "VAGRounded",
    border: "0.3px solid #F1F3F3",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #F1F3F3",
      outline: "none",
      color: "black"
    },
    marginBottom: "8px"
  },
  hide: {
    display: "none"
  },
  show: {
    display: "block"
  },
  typography: {
    color: "#5E5E5E",
    fontSize: "24px",
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
  sendButton: {
    fontSize: "38px",
    borderRadius: "1em",
    position: "relative",
    top: "-1em",
    left: "10em",
    "&:hover": {
      cursor: "pointer"
    }
  }
});

class UpgradeUser extends React.Component {
  state = {
    secure: "",
    input: this.props.classes.show,
    renderUsers: this.props.classes.hide,
    users: []
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {
    APIserver.isLogged().then(res => {
      this.setState({ accountId: res.data.id });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.verify();
  };

  verify = () => {
    let users = [];
    if (this.state.secure === "60mFohd2Vg2") {
      this.setState({ input: this.props.classes.hide });
      APIserver.returnUsers().then(res => {
        res.data.map((item, key) => {
          users.push(item);
        });
        this.setState({ users: users });
      });
    }
  };

  upgradetoAgent = e => {
    APIserver.updateAccount({
      id: e,
      role: "agent"
    }).then(ret =>
      APIserver.returnAgent().then(agent => {
        this.props.history.push(`dashboard?AgentId=${agent.data.id}`);
      })
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Grid direction="column" container spacing={8}>
            <Grid item md={1}>
              <p className={classes.hide}>t</p>
              <p className={classes.hide}>t</p>
            </Grid>
            <Grid direction="row" container spacing={24}>
              <Grid align="center" item md={1} xs={false} />
              <Grid align="center" item md={1} xs={false} />
              <Grid align="center" item xs={12} md={8}>
                <SurveyDiv>
                  <Grid item md={12}>
                    <Grid container direction="column" spacing={24}>
                      <Grid align="center" item md={12}>
                        <Grid item md={12}>
                          <Typography
                            variant="h4"
                            color="inherit"
                            className={classes.typography}
                          >
                            Please Give Us Some More Information
                          </Typography>
                          <hr />
                        </Grid>
                        <Grid item md={12}>
                          <p className={classes.hide}>Please Log In</p>
                        </Grid>
                        <form action="post">
                          <Grid container direction="row">
                            <Grid item md={6}>
                              <input
                                value={this.state.secure}
                                onChange={this.handleInputChange}
                                className={`${classes.form} ${
                                  this.state.input
                                }`}
                                type="text"
                                name="secure"
                                placeholder="Enter Code"
                              />
                            </Grid>
                            <Grid item md={12} className={this.state.input}>
                              <SurveyButton
                                onClick={this.handleFormSubmit}
                                size="large"
                                color="primary"
                                variant="contained"
                              >
                                Submit
                              </SurveyButton>
                            </Grid>
                          </Grid>
                        </form>
                        <Grid item md={12}>
                          <Grid container direction="row">
                            {this.state.users.map((item, key) => {
                              return (
                                <Grid item md={12} align="left">
                                  <Typography className={classes.typography}>
                                    {item.email}
                                  </Typography>
                                  <Send
                                    onClick={() => this.upgradetoAgent(item.id)}
                                    color="primary"
                                    className={classes.sendButton}
                                  />
                                </Grid>
                              );
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </SurveyDiv>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

UpgradeUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UpgradeUser);
