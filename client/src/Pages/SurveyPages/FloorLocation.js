import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton/BackButton";
import SurveyDiv from "../../Components/SurveyDiv/SurveyDiv";
import SurveyButton from "../../Components/SurveyButton/SurveyButton";
import Slide from "@material-ui/core/Slide";
import ProgressBarExample from "../../Components/ProgressBar/ProgressBar";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { FormGroup } from "@material-ui/core";

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
    display: "none"
  },
  show: {
    display: "block"
  },
  carpet: {
    fontSize: "24px",
    marginRight: "0.5em"
  }
});

class FloorLocation extends React.Component {
  state = {
    laminateLocationKitchen: localStorage.getItem("laminateLocationKitchen"),
    laminateLocationLivingroom: localStorage.getItem(
      "laminateLocationLivingroom"
    ),
    laminateLocationMbathroom: localStorage.getItem(
      "laminateLocationMbathroom"
    ),
    laminateLocationMbedroom: localStorage.getItem("laminateLocationMbedroom"),
    laminateLocationOther: localStorage.getItem("laminateLocationOther"),

    carpetLocationKitchen: localStorage.getItem("carpetLocationKitchen"),
    carpetLocationLivingroom: localStorage.getItem("carpetLocationLivingroom"),
    carpetLocationMbathroom: localStorage.getItem("carpetLocationMbathroom"),
    carpetLocationMbedroom: localStorage.getItem("carpetLocationMbedroom"),
    carpetLocationOther: localStorage.getItem("carpetLocationOther"),

    hardwoodLocationKitchen: localStorage.getItem("hardwoodLocationKitchen"),
    hardwoodLocationLivingroom: localStorage.getItem(
      "hardwoodLocationLivingroom"
    ),
    hardwoodLocationMbathroom: localStorage.getItem(
      "hardwoodLocationMbathroom"
    ),
    hardwoodLocationMbedroom: localStorage.getItem("hardwoodLocationMbedroom"),
    hardwoodLocationOther: localStorage.getItem("hardwoodLocationOther"),

    tileLocationKitchen: localStorage.getItem("tileLocationKitchen"),
    tileLocationLivingroom: localStorage.getItem("tileLocationLivingroom"),
    tileLocationMbathroom: localStorage.getItem("tileLocationMbathroom"),
    tileLocationMbedroom: localStorage.getItem("tileLocationMbedroom"),
    tileLocationOther: localStorage.getItem("tileLocationOther"),
    hiddenTile: this.props.classes.hide,
    hiddenLaminate: this.props.classes.hide,
    hiddenHardwood: this.props.classes.hide,
    hiddenCarpet: this.props.classes.hide,
    buttonStatus: false
  };

  componentDidMount = () => {};

  handleChange = name => e => {
    this.setState({ [name]: e.target.checked });
  };

  componentDidMount = () => {
    let til = localStorage.getItem("q43tile");
    let lam = localStorage.getItem("q43laminate");
    let wood = localStorage.getItem("q43hardwood");
    let carp = localStorage.getItem("q43carpet");

    if (til == "true") {
      this.setState({ hiddenTile: this.props.classes.show });
    } else {
    }

    if (lam == "true") {
      this.setState({ hiddenLaminate: this.props.classes.show });
    } else {
    }

    if (wood == "true") {
      this.setState({ hiddenHardwood: this.props.classes.show });
    } else {
    }

    if (carp == "true") {
      this.setState({ hiddenCarpet: this.props.classes.show });
    } else {
    }
    this.findAnswers();
  };

  findAnswers = () => {
    let lamKit = localStorage.getItem("laminateLocationKitchen");
    let lamLiv = localStorage.getItem("laminateLocationLivingroom");
    let lamMbath = localStorage.getItem("laminateLocationMbathroom");
    let lamMbed = localStorage.getItem("laminateLocationMbedroom");
    let lamOther = localStorage.getItem("laminateLocationOther");

    if (lamKit == "true") {
      this.setState({ laminateLocationKitchen: true });
    } else {
      this.setState({ laminateLocationKitchen: false });
    }

    if (lamLiv == "true") {
      this.setState({ laminateLocationLivingroom: true });
    } else {
      this.setState({ laminateLocationLivingroom: false });
    }

    if (lamMbath == "true") {
      this.setState({ laminateLocationMbathroom: true });
    } else {
      this.setState({ laminateLocationMbathroom: false });
    }

    if (lamMbed == "true") {
      this.setState({ laminateLocationMbedroom: true });
    } else {
      this.setState({ laminateLocationMbedroom: false });
    }

    if (lamOther == "true") {
      this.setState({ laminateLocationOther: true });
    } else {
      this.setState({ laminateLocationOther: false });
    }

    let carpKit = localStorage.getItem("carpetLocationKitchen");
    let carpLiv = localStorage.getItem("carpetLocationLivingroom");
    let carpMbath = localStorage.getItem("carpetLocationMbathroom");
    let carpMbed = localStorage.getItem("carpetLocationMbedroom");
    let carpOther = localStorage.getItem("carpetLocationOther");

    if (carpKit == "true") {
      this.setState({ carpetLocationKitchen: true });
    } else {
      this.setState({ carpetLocationKitchen: false });
    }

    if (carpLiv == "true") {
      this.setState({ carpetLocationLivingroom: true });
    } else {
      this.setState({ carpetLocationLivingroom: false });
    }

    if (carpMbath == "true") {
      this.setState({ carpetLocationMbathroom: true });
    } else {
      this.setState({ carpetLocationMbathroom: false });
    }

    if (carpMbed == "true") {
      this.setState({ carpetLocationMbedroom: true });
    } else {
      this.setState({ carpetLocationMbedroom: false });
    }

    if (carpOther == "true") {
      this.setState({ carpetLocationOther: true });
    } else {
      this.setState({ carpetLocationOther: false });
    }

    let hardKit = localStorage.getItem("hardwoodLocationKitchen");
    let hardLiv = localStorage.getItem("hardwoodLocationLivingroom");
    let hardMbath = localStorage.getItem("hardwoodLocationMbathroom");
    let hardMbed = localStorage.getItem("hardwoodLocationMbedroom");
    let hardOther = localStorage.getItem("hardwoodLocationOther");

    if (hardKit == "true") {
      this.setState({ hardwoodLocationKitchen: true });
    } else {
      this.setState({ hardwoodLocationKitchen: false });
    }

    if (hardLiv == "true") {
      this.setState({ hardwoodLocationLivingroom: true });
    } else {
      this.setState({ hardwoodLocationLivingroom: false });
    }

    if (hardMbath == "true") {
      this.setState({ hardwoodLocationMbathroom: true });
    } else {
      this.setState({ hardwoodLocationMbathroom: false });
    }

    if (hardMbed == "true") {
      this.setState({ hardwoodLocationMbedroom: true });
    } else {
      this.setState({ hardwoodLocationMbedroom: false });
    }

    if (hardOther == "true") {
      this.setState({ hardwoodLocationOther: true });
    } else {
      this.setState({ hardwoodLocationOther: false });
    }

    let tileKit = localStorage.getItem("tileLocationKitchen");
    let tileLiv = localStorage.getItem("tileLocationLivingroom");
    let tileMbath = localStorage.getItem("tileLocationMbathroom");
    let tileMbed = localStorage.getItem("tileLocationMbedroom");
    let tileOther = localStorage.getItem("tileLocationOther");

    if (tileKit == "true") {
      this.setState({ tileLocationKitchen: true });
    } else {
      this.setState({ tileLocationKitchen: false });
    }

    if (tileLiv == "true") {
      this.setState({ tileLocationLivingroom: true });
    } else {
      this.setState({ tileLocationLivingroom: false });
    }

    if (tileMbath == "true") {
      this.setState({ tileLocationMbathroom: true });
    } else {
      this.setState({ tileLocationMbathroom: false });
    }

    if (tileMbed == "true") {
      this.setState({ tileLocationMbedroom: true });
    } else {
      this.setState({ tileLocationMbedroom: false });
    }

    if (tileOther == "true") {
      this.setState({ tileLocationOther: true });
    } else {
      this.setState({ tileLocationOther: false });
    }
  };

  submitAnswers = () => {
    localStorage.setItem("comingFrom", "left");
    localStorage.setItem(
      "laminateLocationKitchen",
      this.state.laminateLocationKitchen
    );
    localStorage.setItem(
      "laminateLocationLivingroom",
      this.state.laminateLocationLivingroom
    );
    localStorage.setItem(
      "laminateLocationMbathroom",
      this.state.laminateLocationMbathroom
    );
    localStorage.setItem(
      "laminateLocationMbedroom",
      this.state.laminateLocationMbedroom
    );
    localStorage.setItem(
      "laminateLocationOther",
      this.state.laminateLocationOther
    );

    localStorage.setItem(
      "carpetLocationKitchen",
      this.state.carpetLocationKitchen
    );
    localStorage.setItem(
      "carpetLocationLivingroom",
      this.state.carpetLocationLivingroom
    );
    localStorage.setItem(
      "carpetLocationMbathroom",
      this.state.carpetLocationMbathroom
    );
    localStorage.setItem(
      "carpetLocationMbedroom",
      this.state.carpetLocationMbedroom
    );
    localStorage.setItem("carpetLocationOther", this.state.carpetLocationOther);

    localStorage.setItem(
      "hardwoodLocationKitchen",
      this.state.hardwoodLocationKitchen
    );
    localStorage.setItem(
      "hardwoodLocationLivingroom",
      this.state.hardwoodLocationLivingroom
    );
    localStorage.setItem(
      "hardwoodLocationMbathroom",
      this.state.hardwoodLocationMbathroom
    );
    localStorage.setItem(
      "hardwoodLocationMbedroom",
      this.state.hardwoodLocationMbedroom
    );
    localStorage.setItem(
      "hardwoodLocationOther",
      this.state.hardwoodLocationOther
    );

    localStorage.setItem("tileLocationKitchen", this.state.tileLocationKitchen);
    localStorage.setItem(
      "tileLocationLivingroom",
      this.state.tileLocationLivingroom
    );
    localStorage.setItem(
      "tileLocationMbathroom",
      this.state.tileLocationMbathroom
    );
    localStorage.setItem(
      "tileLocationMbedroom",
      this.state.tileLocationMbedroom
    );
    localStorage.setItem("tileLocationOther", this.state.tileLocationOther);
  };

  goBack = () => {
    localStorage.setItem("comingFrom", "right");
  };

  render() {
    let slide = localStorage.getItem("comingFrom");
    const submitButton = props => <Link to="/homesurvey/q28" {...props} />;
    const backButton = props => <Link to="/homesurvey/q26" {...props} />;
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
                <Grid align="center" item md={1} xs={false} />
                <Grid align="center" item md={1} xs={false} />
                <Grid item xs={12} md={8}>
                  <SurveyDiv>
                    <Grid item md={12} xs={12}>
                      <Grid direction="column" container spacing={8}>
                        <Grid direction="row" container>
                          <Grid item md={12} xs={12}>
                            <ProgressBarExample />
                          </Grid>
                        </Grid>
                        <Grid item md={12} xs={10} />
                        <Grid item md={12}>
                          <Grid direction="row" container>
                            <Grid item md={1} />
                            <Grid className="backBtn" item md={1}>
                              <BackButton
                                size="small"
                                variant="contained"
                                color="primary"
                                component={backButton}
                                onClick={this.goBack}
                              />
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} align="center">
                              <Typography
                                variant="h4"
                                color="inherit"
                                className={`heading-h4 ${classes.title}`}
                              >
                                What rooms are your different types of flooring
                                in?
                                <hr />
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenLaminate}
                        >
                          <Typography
                            className={` ${classes.title} ${classes.carpet}`}
                          >
                            Laminate
                          </Typography>

                          <FormControl component="fieldset">
                            <FormGroup row>
                              <FormControlLabel
                                value="kitchen"
                                control={
                                  <Checkbox
                                    checked={this.state.laminateLocationKitchen}
                                    onChange={this.handleChange(
                                      "laminateLocationKitchen"
                                    )}
                                    value="laminateLocationKitchen"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Kitchen
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="livingroom"
                                control={
                                  <Checkbox
                                    checked={
                                      this.state.laminateLocationLivingroom
                                    }
                                    onChange={this.handleChange(
                                      "laminateLocationLivingroom"
                                    )}
                                    value="laminateLocationLivingroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Living Room
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="mbathroom"
                                control={
                                  <Checkbox
                                    checked={
                                      this.state.laminateLocationMbathroom
                                    }
                                    onChange={this.handleChange(
                                      "laminateLocationMbathroom"
                                    )}
                                    value="laminateLocationMbathroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Master Bathroom
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="mbedroom"
                                control={
                                  <Checkbox
                                    checked={
                                      this.state.laminateLocationMbedroom
                                    }
                                    onChange={this.handleChange(
                                      "laminateLocationMbedroom"
                                    )}
                                    value="laminateLocationMbedroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Master Bedroom
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="other"
                                control={
                                  <Checkbox
                                    checked={this.state.laminateLocationOther}
                                    onChange={this.handleChange(
                                      "laminateLocationOther"
                                    )}
                                    value="laminateLocationOther"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Other
                                  </Typography>
                                }
                              />
                            </FormGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenCarpet}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Carpet
                          </Typography>

                          <FormControl component="fieldset">
                            <FormGroup row>
                              <FormControlLabel
                                value="kitchen"
                                control={
                                  <Checkbox
                                    checked={this.state.carpetLocationKitchen}
                                    onChange={this.handleChange(
                                      "carpetLocationKitchen"
                                    )}
                                    value="carpetLocationKitchen"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Kitchen
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="livingroom"
                                control={
                                  <Checkbox
                                    checked={
                                      this.state.carpetLocationLivingroom
                                    }
                                    onChange={this.handleChange(
                                      "carpetLocationLivingroom"
                                    )}
                                    value="carpetLocationLivingroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Living Room
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="mbathroom"
                                control={
                                  <Checkbox
                                    checked={this.state.carpetLocationMbathroom}
                                    onChange={this.handleChange(
                                      "carpetLocationMbathroom"
                                    )}
                                    value="carpetLocationMbathroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Master Bathroom
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="mbedroom"
                                control={
                                  <Checkbox
                                    checked={this.state.carpetLocationMbedroom}
                                    onChange={this.handleChange(
                                      "carpetLocationMbedroom"
                                    )}
                                    value="carpetLocationMbedroom"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Master Bedroom
                                  </Typography>
                                }
                              />
                              <FormControlLabel
                                value="other"
                                control={
                                  <Checkbox
                                    checked={this.state.carpetLocationOther}
                                    onChange={this.handleChange(
                                      "carpetLocationOther"
                                    )}
                                    value="carpetLocationOther"
                                    color="primary"
                                    className={`${classes.checkbox}`}
                                  />
                                }
                                label={
                                  <Typography className={classes.titleStraight}>
                                    Other
                                  </Typography>
                                }
                              />
                            </FormGroup>
                          </FormControl>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenHardwood}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Hardwood
                          </Typography>
                          <div className="kit">
                            <FormControl component="fieldset">
                              <FormGroup row>
                                <FormControlLabel
                                  value="kitchen"
                                  control={
                                    <Checkbox
                                      checked={
                                        this.state.hardwoodLocationKitchen
                                      }
                                      onChange={this.handleChange(
                                        "hardwoodLocationKitchen"
                                      )}
                                      value="hardwoodLocationKitchen"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Kitchen
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value="livingroom"
                                  control={
                                    <Checkbox
                                      checked={
                                        this.state.hardwoodLocationLivingroom
                                      }
                                      onChange={this.handleChange(
                                        "hardwoodLocationLivingroom"
                                      )}
                                      value="hardwoodLocationLivingroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Living Room
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value="mbathroom"
                                  control={
                                    <Checkbox
                                      checked={
                                        this.state.hardwoodLocationMbathroom
                                      }
                                      onChange={this.handleChange(
                                        "hardwoodLocationMbathroom"
                                      )}
                                      value="hardwoodLocationMbathroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Master Bathroom
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value="mbedroom"
                                  control={
                                    <Checkbox
                                      checked={
                                        this.state.hardwoodLocationMbedroom
                                      }
                                      onChange={this.handleChange(
                                        "hardwoodLocationMbedroom"
                                      )}
                                      value="hardwoodLocationMbedroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Master Bedroom
                                    </Typography>
                                  }
                                />
                                <FormControlLabel
                                  value="other"
                                  control={
                                    <Checkbox
                                      checked={this.state.hardwoodLocationOther}
                                      onChange={this.handleChange(
                                        "hardwoodLocationOther"
                                      )}
                                      value="hardwoodLocationOther"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Other
                                    </Typography>
                                  }
                                />
                              </FormGroup>
                            </FormControl>
                          </div>
                        </Grid>
                        <Grid
                          item
                          md={12}
                          align="center"
                          className={this.state.hiddenTile}
                        >
                          <Typography
                            className={`${classes.title} ${classes.carpet}`}
                          >
                            Tile
                          </Typography>
                          <FormControl component="fieldset">
                            <FormGroup row>
                              <Grid sm={12} xs={12}>
                                <FormControlLabel
                                  value="kitchen"
                                  control={
                                    <Checkbox
                                      checked={this.state.tileLocationKitchen}
                                      onChange={this.handleChange(
                                        "tileLocationKitchen"
                                      )}
                                      value="tileLocationKitchen"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Kitchen
                                    </Typography>
                                  }
                                />
                              </Grid>
                              <Grid sm={12} xs={12}>
                                <FormControlLabel
                                  value="livingroom"
                                  control={
                                    <Checkbox
                                      checked={
                                        this.state.tileLocationLivingroom
                                      }
                                      onChange={this.handleChange(
                                        "tileLocationLivingroom"
                                      )}
                                      value="tileLocationLivingroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Living Room
                                    </Typography>
                                  }
                                />
                              </Grid>
                              <Grid sm={12} xs={12}>
                                <FormControlLabel
                                  value="mbathroom"
                                  control={
                                    <Checkbox
                                      checked={this.state.tileLocationMbathroom}
                                      onChange={this.handleChange(
                                        "tileLocationMbathroom"
                                      )}
                                      value="tileLocationMbathroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Master Bathroom
                                    </Typography>
                                  }
                                />
                              </Grid>
                              <Grid sm={12} xs={12}>
                                <FormControlLabel
                                  value="mbedroom"
                                  control={
                                    <Checkbox
                                      checked={this.state.tileLocationMbedroom}
                                      onChange={this.handleChange(
                                        "tileLocationMbedroom"
                                      )}
                                      value="tileLocationMbedroom"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Master Bedroom
                                    </Typography>
                                  }
                                />
                              </Grid>
                              <Grid sm={12} xs={12}>
                                <FormControlLabel
                                  value="other"
                                  control={
                                    <Checkbox
                                      checked={this.state.tileLocationOther}
                                      onChange={this.handleChange(
                                        "tileLocationOther"
                                      )}
                                      value="tileLocationOther"
                                      color="primary"
                                      className={`${classes.checkbox}`}
                                    />
                                  }
                                  label={
                                    <Typography
                                      className={classes.titleStraight}
                                    >
                                      Other
                                    </Typography>
                                  }
                                />
                              </Grid>
                            </FormGroup>
                          </FormControl>
                        </Grid>
                        <Grid container direction="row" align="center">
                          <Grid item md={4} xs={false}>
                            <p className={classes.hide}>t</p>
                          </Grid>
                          <Grid
                            className="get-start-button"
                            item
                            md={4}
                            xs={12}
                          >
                            <SurveyButton
                              size="large"
                              color="primary"
                              variant="contained"
                              disabled={this.state.buttonStatus}
                              component={submitButton}
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

FloorLocation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloorLocation);
