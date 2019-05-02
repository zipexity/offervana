import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Addressbar from "../../Components/Addressbar/Addressbar";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import HomePageTopDiv from "../../Components/HomePageTopDiv/HomePageTopDiv";
import HomePageCards from "../../Components/HomePageCards/HomePageCards";
import checkmark from "../../Utils/Images/homepage/checkmark.png";
import minus from "../../Utils/Images/homepage/minus.png";
import Testimonials from "../../Components/Testimonials/Testimonials";
import MOPpdf from "../../Components/MOPpdf/MOPpdf";
import mop from "../../Utils/Images/multioffer.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavBar from "../../Components/NavBar/NavBar";
import testimonialsOne from "../../Utils/Images/Testimonials/Site testimonials.001.png";
import testimonialsTwo from "../../Utils/Images/Testimonials/Site testimonials.002.png";
import testimonialsThree from "../../Utils/Images/Testimonials/Site testimonials.003.png";
import testimonialsFour from "../../Utils/Images/Testimonials/Site testimonials.004.png";
import testimonialsFive from "../../Utils/Images/Testimonials/Site testimonials.005.jpeg";
import playbutton from "../../Utils/Images/play-button.svg";
import Footer from "./footer";
import "./homepage.css";
import APIserver from "../../Utils/api/APIserver";

const styles = theme => ({
  root: {
    flewGrow: 1,
    marginTop: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "71px"
    }
  },

  TypographyStraight: {
    color: "#5E5E5E",
    // fontSize: "20px",
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
  searchText: {
    position: "relative",
    fontSize: "36px !important",
    zIndex: "3",
    // top: "-13.5em",
    left: "0em",
    [theme.breakpoints.down("xs")]: {
      color: "white !important",
      fontWeight: "700",
      textShadow: "rgba(0, 0, 0, 0.4) 0.025em 0.025em 0.025em"
    }
  },
  searchTextTwo: {
    position: "relative",
    fontSize: "28px !important",
    zIndex: "3",
    // top: "-17.5em",
    left: "0em",
    [theme.breakpoints.down("xs")]: {
      color: "white !important",
      fontWeight: "700",
      textShadow: "rgba(0, 0, 0, 0.4) 0.025em 0.025em 0.025em"
    }
  },

  videoPlayer: {
    width: "100%",
    height: "850px",
    overflow: "hidden",
    position: "relative",
    zindex: "0"
  },
  // videoPlayerContainer: {
  //   height: "1200px",
  //   width: "100%",
  //   position: "relative",
  //   zIndex: "0"
  // },
  process: {
    backgroundColor: "#F1F3F3",
    position: "relative",
    top: "-250px",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      top: "-400px"
    },
    [theme.breakpoints.down("xs")]: {
      top: "-400px"
    },
    [theme.breakpoints.down("md")]: {
      top: "-250px"
    }
  },
  graySection: {
    backgroundColor: "#F1F3F3",
    position: "relative",
    top: "-150px"
  },
  howdiff: {
    marginTop: "1em",
    marginBottom: "2.5em",
    [theme.breakpoints.down("sm")]: {
      position: "relative"
    }
  },

  PlacesAutocomplete: {
    zIndex: "3",
    position: "relative"
  },
  dropDown: {
    backgroundColor: "white",
    position: "relative",
    zIndex: "3"
  },
  hide: {
    visibility: "hidden"
  },

  submitNum: {
    position: "relative",
    top: "1em",
    color: "#36454f"
  },
  upperSecHead: {
    marginTop: "1em"
  },

  mopScreenshot: {},
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

  checkHold: {
    width: "100px",
    height: "100px"
  },
  check: {
    width: "100%",
    height: "100%",
    position: "relative",
    top: "0",
    left: "0",
    zIndex: "99"
  },
  mopHold: {
    width: "100%",
    marginTop: "1em"
  },
  mop: {
    width: "100%",
    height: "100%"
  },

  multiofferText: {
    position: "relative",
    top: "-35px"
  },
  multiofferTextTwo: {
    position: "relative",
    top: "-20px"
  },
  box: {
    position: "relative",
    backgroundColor: "#F1F3F3",
    padding: "1em",
    width: "60%",
    zIndex: "3",
    top: "-48em",
    left: "0em",
    borderRadius: "1em",
    opacity: "0.8",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "0em",
      opacity: "1",
      padding: "0em",
      width: "100%",
      backgroundColor: "transparent"
    }
  },
  carouselContainer: {
    width: "100%",
    height: "100%",

    /* Add this */
    position: "relative",
    top: "0",
    left: "0"
  },
  testContainer: {
    backgroundColor: "#F1F3F3",
    position: "relative",
    top: "-115px"
  }
});

class HomePage extends React.Component {
  componentDidMount = () => {
    APIserver.autoSend().then(text => {
      console.log(text);
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div className="homePage">
        <div
          ref={el => (this.instance = el)}
          className={`main-panel ${classes.root}`}
        >
          <Grid container direction="row" align="center">
            <Grid item md={12} xs={12}>
              <div className="top-homePage">
                <div
                  className={`video-container ${classes.videoPlayerContainer}`}
                >
                  <div className={`video-player ${classes.videoPlayer}`}>
                    <VideoPlayer />

                    <div className={`box-banner ${classes.box}`}>
                      <Grid item xs={12} md={12}>
                        <Typography
                          className={`mutiple-offer ${classes.Typography} ${
                            classes.searchText
                          }`}
                        >
                          Get Multiple Offers On Your Home
                          {/* With The Click Of A Button */}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Typography
                          className={`instant-cash ${
                            classes.TypographyStraight
                          } ${classes.searchTextTwo}`}
                        >
                          Instant Cash Buyers Compete, You Win
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Addressbar />
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <div className="mid-homePage">
              <Grid className={classes.process} item md={12}>
                <Grid container direction="row">
                  <Grid item md={12} xs={12} className={classes.upperSecHead}>
                    <Typography
                      className={`modren-way ${classes.Typography}`}
                      variant="h3"
                    >
                      The Modern Way to Sell Your Home!
                    </Typography>
                  </Grid>
                  <Grid item md={12} xs={12} align="center">
                    <HomePageTopDiv />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container direction="row">
                <div className={`list-markit ${classes.cards}`}>
                  <Grid
                    className={`how-diff ${classes.howdiff}`}
                    item
                    md={12}
                    xs={12}
                  >
                    <div className="test">
                      <Typography
                        className={`test123 ${classes.Typography}`}
                        variant="h3"
                      >
                        The Offervana Difference
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item md={12} xs={12} className={classes.howdiff}>
                    <HomePageCards />
                  </Grid>
                </div>
              </Grid>

              <Grid item md={12} xs={12} className={classes.mopScreenshot}>
                <Grid container direction="row">
                  <Grid md={12} xs={12} align="center">
                    <div className={classes.graySection}>
                      <Grid
                        item
                        md={6}
                        xs={12}
                        className={classes.videoTestimonial}
                        align="center"
                      >
                        <Testimonials />
                      </Grid>
                    </div>
                  </Grid>
                  <div className={`carousal-d ${classes.testContainer}`}>
                    <Grid item md={3} xs={12} />
                    <Grid item md={6} xs={12} align="center">
                      <div
                        className={`carousel-box ${classes.carouselContainer}`}
                      >
                        <Carousel
                          autoPlay
                          showThumbs={false}
                          className="presentation-mode"
                          infiniteLoop={true}
                        >
                          <div className="my-slide content">
                            <img src={testimonialsOne} />
                          </div>

                          <div>
                            <img src={testimonialsTwo} />
                          </div>
                          <div>
                            <img src={testimonialsThree} />
                          </div>
                          <div>
                            <img src={testimonialsFour} />
                          </div>
                          <div>
                            <img src={testimonialsFive} />
                          </div>
                        </Carousel>
                      </div>
                    </Grid>
                    <Grid item md={3} xs={12} />
                  </div>
                  <Grid item md={12} xs={12}>
                    <Typography
                      className={`modren-way ${classes.Typography} ${
                        classes.multiofferText
                      }`}
                      variant="h3"
                    >
                      The Multioffer Platform
                    </Typography>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Typography
                      className={`typo-text ${classes.TypographyStraight} ${
                        classes.multiofferTextTwo
                      }`}
                      variant="h4"
                    >
                      Submit Your Home Survey for Instant Access
                    </Typography>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={classes.mopHold}>
                      <img src={mop} className={classes.mop} />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Footer />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
