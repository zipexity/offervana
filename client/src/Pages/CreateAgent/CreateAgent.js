import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver.js";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flewGrow: 1
  },
  form: {
    width: "65%",
    fontFamily: "VAGRounded",
    fontSize: "28px",
    padding: "16px 32px",
    border: "0.3px solid #F1F3F3",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #F1F3F3",
      outline: "none",
      color: "black"
    },
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  failedform: {
    width: "65%",
    fontFamily: "VAGRounded",
    fontSize: "28px",
    padding: "16px 32px",
    border: "1px solid red",
    boxShadow: "2px 2px 5px grey",
    "&:focus": {
      border: "1.3px solid #F1F3F3",
      outline: "none",
      color: "black"
    },
    marginBottom: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "95%"
    }
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
  phone: {
    position: "relative",
    top: "1em"
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
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%"
    }
  },
  firstTextHide: {
    display: "none"
  },
  lastTextHide: {
    display: "none"
  },
  phoneTextHide: {
    display: "none"
  },
  firstText: {
    color: "red !important"
  },
  lastText: {
    color: "red !important"
  },
  phoneText: {
    color: "red !important",
    position: "relative",
    top: "25px !important"
  },
  phoneLabel: {
    position: "relative",
    top: "25px !important"
  }
});

class CreateAgent extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    accountId: 1,
    firstForm: this.props.classes.form,
    lastForm: this.props.classes.form,
    phoneForm: this.props.classes.form,
    firstText: this.props.classes.firstTextHide,
    lastText: this.props.classes.lastTextHide,
    phoneText: this.props.classes.phoneTextHide
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
      this.setState({ agentEmail: res.data.email });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstname);
    let firstname;
    let lastname;
    let phonenum;
    if (this.state.firstname) {
      firstname = this.state.firstname;
      this.setState({ firstForm: this.props.classes.form });
      this.setState({ firstText: this.props.classes.firstTextHide });
    } else {
      this.setState({ firstForm: this.props.classes.failedform });
      this.setState({ firstText: this.props.classes.firstText });
    }
    if (this.state.lastname) {
      lastname = this.state.lastname;
      this.setState({ lastForm: this.props.classes.form });
      this.setState({ lastText: this.props.classes.lastTextHide });
    } else {
      this.setState({ lastForm: this.props.classes.failedform });
      this.setState({ lastText: this.props.classes.lastText });
    }
    if (this.state.phone) {
      phonenum = this.state.phone;
      this.setState({ phoneForm: this.props.classes.form });
      this.setState({ phoneText: this.props.classes.phoneTextHide });
    } else {
      this.setState({ phoneForm: this.props.classes.failedform });
      this.setState({ phoneText: this.props.classes.phoneText });
    }
    if (this.state.firstname && this.state.lastname && this.state.phone) {
      this.createUser();
    } else {
      this.setState({ firstForm: this.props.classes.failedform });
      this.setState({ firstText: this.props.classes.firstText });
      this.setState({ lastForm: this.props.classes.failedform });
      this.setState({ lastText: this.props.classes.lastText });
      this.setState({ phoneForm: this.props.classes.failedform });
      this.setState({ phoneText: this.props.classes.phoneText });
    }
  };

  createUser = () => {
    console.log("hit method");
    APIserver.agentcreate(
      this.state.firstname,
      this.state.lastname,
      this.state.phone,
      this.state.agentEmail,
      this.state.accountId
    )
      .then(response => {
        this.props.history.push("/upgradeuser");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid direction="column" container spacing={8}>
          <Grid item md={1}>
            <p className={classes.hide}>t</p>
            <p className={classes.hide}>t</p>
          </Grid>
          <Grid direction="row" container spacing={24}>
            <Grid align="center" item md={1} xs={false} sm={false} />
            <Grid align="center" item md={1} xs={false} sm={false} />
            <Grid align="center" item xs={12} md={8} sm={12}>
              <SurveyDiv>
                <Grid item md={12} xs={12} sm={12}>
                  <Grid container direction="column">
                    <Grid align="center" item md={12} xs={12} sm={12}>
                      <Grid item md={12} xs={12} sm={12}>
                        <Typography
                          variant="h4"
                          color="inherit"
                          className={classes.typography}
                        >
                          Agent Creation
                        </Typography>
                        <hr />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <p className={classes.hide}>Please Log In</p>
                      </Grid>
                      <form action="post">
                        <Grid container direction="row">
                          <Grid item md={6} sm={6} xs={12}>
                            <Grid item md={7} sm={6} align="left">
                              <Typography
                                className={classes.typographyStraight}
                              >
                                First Name
                              </Typography>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  this.state.firstText
                                }`}
                              >
                                Please enter your first name
                              </Typography>
                            </Grid>
                            <input
                              value={this.state.firstname}
                              onChange={this.handleInputChange}
                              className={this.state.firstForm}
                              type="text"
                              name="firstname"
                              placeholder="First Name"
                            />
                          </Grid>
                          <Grid item md={6} sm={6} xs={12}>
                            <Grid item md={7} sm={6} align="left">
                              <Typography
                                className={classes.typographyStraight}
                              >
                                Last Name
                              </Typography>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  this.state.lastText
                                }`}
                              >
                                Please enter your last name
                              </Typography>
                            </Grid>
                            <input
                              value={this.state.lastname}
                              onChange={this.handleInputChange}
                              className={this.state.lastForm}
                              type="text"
                              name="lastname"
                              placeholder="Last Name"
                            />
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <Grid item md={7} sm={6} align="left">
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  classes.phoneLabel
                                }`}
                              >
                                Phone Number
                              </Typography>
                              <Typography
                                className={`${classes.typographyStraight} ${
                                  this.state.phoneText
                                }`}
                              >
                                Please enter your phone number
                              </Typography>
                            </Grid>
                            <input
                              value={this.state.phone}
                              onChange={this.handleInputChange}
                              className={`${this.state.phoneForm} ${
                                classes.phone
                              }`}
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                            />
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <Button
                              onClick={this.handleFormSubmit}
                              size="large"
                              color="primary"
                              variant="contained"
                              className={classes.button}
                            >
                              Verify
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </Grid>
                  </Grid>
                </Grid>
              </SurveyDiv>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CreateAgent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateAgent);
