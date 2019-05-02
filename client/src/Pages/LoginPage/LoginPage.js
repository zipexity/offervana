import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver.js";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import { Link } from "react-router-dom";
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
  typographyStraight: {
    color: "#5E5E5E",
    fontSize: "18px",
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
  emailTextHide: {
    display: "none"
  },
  passwordTextHide: {
    display: "none"
  },
  emailText: {
    color: "red !important"
  },
  passwordText: {
    color: "red !important"
  }
});

class LoginPage extends React.Component {
  state = {
    userEmail: "",
    userPass: "",
    passwordForm: this.props.classes.form,
    emailForm: this.props.classes.form,
    emailText: this.props.classes.emailTextHide,
    passwordText: this.props.classes.passwordTextHide
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
                this.props.history.push(`/multi?UserId=${response.data.id}`);
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userEmail && this.state.userPass) {
      APIserver.login(this.state.userEmail, this.state.userPass)
        .then(res => {
          APIserver.singleUserReturn().then(response => {
            let userId;
            Object.keys(response).every(function(x) {
              userId = response[x] === "" || response[x] === null; // or just "return o[x];" for falsy values
            });
            if (userId === true) {
              this.props.history.push("/createuser");
            } else {
              this.props.history.push("/");
            }
          });
        })
        .catch(err => {
          if (err) {
            this.setState({ emailForm: this.props.classes.failedform });
            this.setState({ emailText: this.props.classes.emailText });
            this.setState({ passwordForm: this.props.classes.failedform });
            this.setState({ passwordText: this.props.classes.passwordText });
          }
        });
    } else {
      if (this.state.userEmail) {
      } else {
        this.setState({ emailForm: this.props.classes.failedform });
        this.setState({ emailText: this.props.classes.emailText });
      }
      if (this.state.userPass) {
      } else {
        this.setState({ passwordForm: this.props.classes.failedform });
        this.setState({ passwordText: this.props.classes.passwordText });
      }
    }
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
                  <Grid container direction="column" spacing={24}>
                    <Grid align="center" item md={12} sm={12} xs={12}>
                      <Grid item md={12} sm={12} xs={12}>
                        <Typography
                          variant="h3"
                          color="inherit"
                          className={classes.typography}
                        >
                          Please Log In
                        </Typography>
                        <hr />
                      </Grid>
                      <Grid item md={12} sm={12} xs={12}>
                        <p className={classes.hide}>Please Log In</p>
                      </Grid>
                      <form action="post">
                        <Grid container direction="row">
                          <Grid
                            item
                            md={2}
                            sm={false}
                            xs={false}
                            align="left"
                          />
                          <Grid item md={10} sm={12} xs={12} align="left">
                            <Typography
                              className={`${classes.typographyStraight} ${
                                this.state.emailText
                              }`}
                            >
                              Wrong email
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <input
                              value={this.state.userEmail}
                              onChange={this.handleInputChange}
                              className={this.state.emailForm}
                              type="text"
                              name="userEmail"
                              placeholder="Email"
                            />
                          </Grid>
                          <Grid
                            item
                            md={2}
                            sm={false}
                            xs={false}
                            align="left"
                          />
                          <Grid item md={10} sm={12} xs={12} align="left">
                            <Typography
                              className={`${classes.typographyStraight} ${
                                this.state.passwordText
                              }`}
                            >
                              Wrong password
                            </Typography>
                          </Grid>
                          <Grid item md={12} sm={12} xs={12}>
                            <input
                              value={this.state.userPass}
                              className={this.state.passwordForm}
                              onChange={this.handleInputChange}
                              type="password"
                              name="userPass"
                              placeholder="Password"
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
                          <Grid item md={12} sm={12} xs={12}>
                            <Typography
                              color="inherit"
                              className={classes.typographyStraight}
                            >
                              New User?{" "}
                              <Link to={"/api/signup"}>Sign Up Here</Link>
                            </Typography>
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

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginPage);
