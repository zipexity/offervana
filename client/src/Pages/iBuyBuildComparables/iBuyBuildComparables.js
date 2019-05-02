import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import APIserver from "../../Utils/api/APIserver";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import BackButton from "../../Components/BackButton/BackButton";
import { Link } from "react-router-dom";

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
    marginBottom: "8px",
    fontFamily: "VAGRounded"
  },
  loginButton: {
    backgroundColor: "#46A1BA",
    width: "40%",
    color: "white",
    padding: "16px 32px",
    fontSize: "24px",
    textDecoration: "none",
    margin: "4px 2px",
    border: "0.5px solid #46A1BA",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      border: "1.5px solid #46A1BA"
    },
    boxShadow: "2px 2px 5px grey",
    fontFamily: "VAGRounded",
    borderRadius: "0.5em"
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
  backButton: {
    position: "relative",
    top: "2.5em",
    left: "3em",
    [theme.breakpoints.down("xs")]: {
      top: "1.5em",
      left: "1em"
    }
  }
});

class iBuyBuildComparables extends React.Component {
  state = {
    homeComparables: "",
    UserId: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    APIserver.updateUser({
      id: this.state.UserId,
      ibuycomparables: this.state.homeComparables
    }).then(ret => console.log("done"));
  };

  componentDidMount = () => {
    let user = this.props.history.location.search.split("=");
    this.setState({ UserId: user[1] });
    APIserver.multiofferUserReturn(user[1]).then(res => {
      console.log(res.data.ibuycomparables);
      if (res.data.ibuycomparables === null) {
      } else {
        this.setState({
          homeComparables: res.data.ibuycomparables,
          agentId: res.data.AgentId
        });
      }
    });
  };

  render() {
    const backButton = props => (
      <Link to={`/dashboard?AgentId=${this.state.agentId}`} {...props} />
    );
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid direction="column" container spacing={8}>
          <Grid item md={1}>
            <p className={classes.hide}>t</p>
            <p className={classes.hide}>t</p>
          </Grid>
          <Grid direction="row" container spacing={24}>
            <Grid item md={1} xs={false} sm={false} />
            <Grid item md={1} xs={false} sm={false} />
            <Grid item xs={12} md={8} sm={12}>
              <SurveyDiv>
                <Grid item md={1} xs={1} sm={1} className={classes.backButton}>
                  <BackButton
                    size="small"
                    variant="contained"
                    color="primary"
                    component={backButton}
                  />
                </Grid>
                <Grid container direction="row" spacing={24}>
                  <Grid align="center" item md={12} xs={12} sm={12}>
                    <Grid item md={8} xs={10} sm={10}>
                      <Typography
                        variant="h3"
                        color="inherit"
                        className={classes.typography}
                      >
                        Build Offer
                      </Typography>
                      <hr />
                    </Grid>
                    <Grid item md={12} xs={12} sm={12}>
                      <p className={classes.hide}>t</p>
                    </Grid>
                    <form action="post">
                      <Grid item md={8} xs={12} sm={12}>
                        <input
                          className={classes.form}
                          value={this.state.homeComparables}
                          onChange={this.handleInputChange}
                          type="text"
                          name="homeComparables"
                          placeholder="Home Comparables MLS Link Here"
                        />
                      </Grid>
                      <Grid item md={8} xs={12} sm={12}>
                        <input
                          className={classes.loginButton}
                          onClick={this.handleFormSubmit}
                          type="submit"
                          value="Submit"
                        />
                      </Grid>
                    </form>
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

iBuyBuildComparables.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(iBuyBuildComparables);
