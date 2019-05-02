import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import LeftArrow from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
const styles = theme => ({
  root: {
    flewGrow: 1
  },
  LeftArrow: {
    marginLeft: theme.spacing.unit
  },
  mainDiv: {
    backgroundColor: "#e3e3e3",
    height: "160%",
    boxShadow: "4px 4px 15px grey",
    borderRadius: "1em"
  },
  title: {
    color: "black",
    fontFamily: [
      "Arial Rounded MT Bold",
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
    backgroundColor: theme.palette.primary,
    width: "65%",
    color: "white",
    padding: "16px 32px",
    textDecoration: "none",
    margin: "4px 2px",
    border: "0.4px solid white",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      border: "0.5px solid"
    },
    boxShadow: "2px 2px 5px grey"
  }
});

class FrontBackYard extends React.Component {
  state = {
    q28frontyard: false,
    q28backyard: false,
    q28noyard: false
  };

  onChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let front = localStorage.getItem("q28frontyard");
    let back = localStorage.getItem("q28backyard");
    let non = localStorage.getItem("q28noyard");

    if (front == "true") {
      this.setState({ q28frontyard: true });
    } else {
      this.setState({ q28frontyard: false });
    }

    if (back == "true") {
      this.setState({ q28backyard: true });
    } else {
      this.setState({ q28backyard: false });
    }

    if (non == "true") {
      this.setState({ q28noyard: true });
    } else {
      this.setState({ q28noyard: false });
    }
  };

  setLocal = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem("q28frontyard", this.state.q28frontyard);
    localStorage.setItem("q28backyard", this.state.q28backyard);
    localStorage.setItem("q28noyard", this.state.q28noyard);
  };
  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q29" {...props} />;
    const backButton = props => <Link to="/homesurvey/q27" {...props} />;
    const { classes } = this.props;
    return (
      <Slide direction={slide} in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <Grid direction="column" container spacing={24}>
            <Grid item md={1}>
              <p style={{ visibility: "hidden" }}>t</p>
            </Grid>
            <Grid direction="row" container spacing={24}>
              <Grid align="center" item md={1} xs={false} />
              <Grid align="center" item xs={12} md={10}>
                <div className={classes.mainDiv}>
                  <Grid item md={12}>
                    <Grid direction="column" container spacing={24}>
                      <Grid align="center" item md={12}>
                        <Typography
                          variant="h5"
                          color="inherit"
                          className={classes.title}
                        >
                          Progress Bar Here
                        </Typography>
                      </Grid>
                      <Grid container direction="row" spacing={8}>
                        <Grid item md={2}>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={this.goBack}
                            component={backButton}
                          >
                            <LeftArrow className={classes.LeftArrow} />
                          </Button>
                        </Grid>
                        <Grid item md={8}>
                          <Grid item md={12}>
                            <Typography
                              variant="h4"
                              color="inherit"
                              className={classes.title}
                            >
                              Select All That Apply?
                              <hr />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={6}>
                        <Checkbox
                          checked={this.state.q28frontyard}
                          onChange={this.onChange("q28frontyard")}
                          value="q28frontyard"
                          color="primary"
                        />
                        Frontyard
                      </Grid>
                      <Grid item md={6}>
                        <Checkbox
                          checked={this.state.q28backyard}
                          onChange={this.onChange("q28backyard")}
                          value="q28backyard"
                          color="primary"
                        />
                        Backyard
                      </Grid>
                      <Grid item md={6}>
                        <Checkbox
                          checked={this.state.q28noyard}
                          onChange={this.onChange("q28noyard")}
                          value="q28noyard"
                          color="primary"
                        />
                        None
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        spacing={24}
                        align="center"
                      >
                        <Grid item md={4}>
                          <p className={classes.hide}>t</p>
                        </Grid>
                        <Grid item md={4}>
                          <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            className={classes.button}
                            onClick={this.setLocal}
                            component={submitButton}
                          >
                            Next
                          </Button>
                        </Grid>
                        <Grid item md={4}>
                          <p className={classes.hide}>t</p>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Slide>
    );
  }
}

FrontBackYard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FrontBackYard);
