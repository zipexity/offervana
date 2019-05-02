import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Link } from "react-router-dom";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
const styles = theme => ({
  root: {
    flewGrow: 1
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
  hide: {
    visibility: "hidden"
  }
});

class PopcornCeilings extends React.Component {
  state = {
    q14popcornceil: localStorage.getItem("q14popcornceil")
  };

  handleChange = e => {
    this.setState({ q14popcornceil: e.target.value });
  };

  render() {
    const submitButton = props => <Link to="/homesurvey/q29" {...props} />;
    const backButton = props => <Link to="/homesurvey/q27" {...props} />;

    const { classes } = this.props;
    return (
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <Grid direction="column" container spacing={24}>
            <Grid item md={1}>
              <p style={{ visibility: "hidden" }}>t</p>
            </Grid>
            <Grid direction="row" container spacing={24}>
              <Grid align="center" item md={1} xs={false} />
              <Grid align="center" item xs={12} md={10}>
                <SurveyDiv>
                  <Grid item md={12} xs={12}>
                    <Grid direction="column" container spacing={24}>
                      <Grid direction="row" container>
                        <Grid item md={11} xs={10}>
                          <ProgressBarExample />
                        </Grid>
                      </Grid>
                      <Grid container direction="row" spacing={8}>
                        <Grid item md={2}>
                          <BackButton
                            size="small"
                            variant="contained"
                            color="primary"
                            component={backButton}
                          />
                        </Grid>
                        <Grid item md={8}>
                          <Grid item md={12}>
                            <Typography
                              variant="h4"
                              color="inherit"
                              className={classes.title}
                            >
                              Does Your Home Have PopCorn Ceilings?
                              <hr />
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item md={2}>
                        <FormControl component="fieldset">
                          <RadioGroup
                            aria-label="q14popcornceil"
                            name="q14popcornceil"
                            value={this.state.q14popcornceil}
                            onChange={this.handleChange}
                          >
                            <FormControlLabel
                              value="yes"
                              control={<Radio color="primary" />}
                              label="Yes"
                            />
                            <FormControlLabel
                              value="no"
                              control={<Radio color="primary" />}
                              label="No"
                            />
                          </RadioGroup>
                        </FormControl>
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
                          <SurveyButton
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={localStorage.setItem(
                              "q14popcornceil",
                              this.state.q14popcornceil
                            )}
                            component={submitButton}
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
        </div>
      </Slide>
    );
  }
}

PopcornCeilings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PopcornCeilings);
