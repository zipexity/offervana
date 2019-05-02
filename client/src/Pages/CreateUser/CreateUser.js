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

class CreateUser extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    address: "",
    accountId: 1,
    agentId: 0,
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
    let tempId = this.props.history.location.search.split("=");
    let agentid = tempId[1];
    console.log("###", agentid);
    APIserver.isLogged().then(res => {
      if (
        Object.keys(res.data).length === 0 &&
        res.data.constructor === Object
      ) {
        return;
      } else {
        this.setState({ accountId: res.data.id });
        APIserver.returnAgents().then(agent => {
          if (agentid >= 0) {
            this.setState({ agentId: agentid });
            console.log("###", "rando");
          } else {
            this.setState({
              agentId:
                Math.floor(Math.random() * parseInt(agent.data.length)) + 1
            });
            console.log("###", "elserando");
          }
        });
        if (res.data.role === "client") {
          APIserver.singleUserReturn().then(response => {
            if (response.data) {
              if (
                Object.keys(response.data).length === 0 &&
                response.data.constructor === Object
              ) {
                return;
              } else {
                this.props.history.push(`/multi?UserId=${response.data.id}`);
              }
            } else {
            }
          });
        } else if (res.data.role === "agent") {
          APIserver.returnAgent().then(agent => {
            this.props.history.push(`/dashboard?AgentId=${agent.data.id}`);
          });
        }
      }
    });
    let address = localStorage.getItem("address");
    this.setState({ address: address });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.firstname);
    let firstname;
    let lastname;
    let phonenum;
    if (this.state.firstname) {
      firstname = this.state.firstname;
    } else {
      this.setState({ firstForm: this.props.classes.failedform });
      this.setState({ firstText: this.props.classes.firstText });
    }
    if (this.state.lastname) {
      lastname = this.state.lastname;
    } else {
      this.setState({ lastForm: this.props.classes.failedform });
      this.setState({ lastText: this.props.classes.lastText });
    }
    if (this.state.phone) {
      phonenum = this.state.phone;
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
    // APIserver.listAgents(this.state.agentId).then(agent => {
    //   let number = agent.data.phone;
    //   number = number.replace(/[^\d]/g, "");
    //   console.log(number);
    //   console.log(agent.data);
    //   APIserver.sendText(
    //     this.state.firstname,
    //     this.state.lastname,
    //     number,
    //     this.state.agentId,
    //     `You have a new client! View ${this.state.firstname} ${
    //       this.state.lastname
    //     } now on your agent dashboard www.offervana.herokuapp.com/dashboard?AgentId=${
    //       this.state.agentId
    //     }`
    //   )
    //     .then(text => {
    //       console.log("yep");
    //     })
    //     .catch(err => console.error(err));
    //   });
    APIserver.createuser(
      this.state.firstname,
      this.state.lastname,
      this.state.phone,
      this.state.address,
      this.state.accountId,
      this.state.agentId
    ).then(response => {
      this.props.history.push("/contract");
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
                      <Typography
                        variant="h4"
                        color="inherit"
                        className={classes.typography}
                      >
                        Your haven of offers awaits...
                      </Typography>
                      <Grid item md={10} xs={12} sm={12}>
                        <Typography
                          variant="h4"
                          color="inherit"
                          className={classes.typography}
                        >
                          Enter your name and number to submit your Home Survey.
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
                              Submit
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

CreateUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateUser);
