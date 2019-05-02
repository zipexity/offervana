import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import APIserver from "../../Utils/api/APIserver";
import Button from "@material-ui/core/Button";
import Offervanalogo from "../../Utils/Images/Offervanalogo.png";
import AddressbarNav from "../../Components/AddressbarNav/AddressbarNav";
import "../../Pages/HomePage/homepage.css";
const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
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
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  button: {
    width: "100%",
    color: "black",
    fontFamily: "VAGRounded"
  },
  appbar: {
    backgroundColor: "white",
    height: "5em"
  },
  link: {
    color: "black"
  },
  logo: {
    color: "black",
    marginLeft: "-2.5em"
  },
  navtext: { marginTop: "0.4em", fontFamily: "VAGRounded" },
  flexDisplay: {
    position: "relative",
    top: "2em"
  },
  hide: {
    display: "none"
  },
  show: {
    display: "block"
  }
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    loggedIn: false,
    profile: "",
    newMessages: "",
    showImageLink: this.props.classes.hide
    // previousScrollPosition: window.pageYOffset,
    // checkVisibility: true
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  componentDidMount = () => {
    // window.addEventListener("scroll", this.handleScrolling);
    APIserver.isLogged().then(res => {
      console.log(res.data);
      if (
        Object.keys(res.data).length === 0 &&
        res.data.constructor === Object
      ) {
        this.setState({ loggedIn: false });
        this.setState({ dashboard: "Login" });
        this.setState({ signouttext: "Create Account" });
        this.setState({ logoutButton: this.nothing });
        this.setState({ loginButton: this.login });
      } else {
        this.setState({ loggedIn: true });
        this.setState({ logoutButton: this.logout });
        this.setState({ loginButton: this.profile });
        this.setState({ signouttext: "Log Out" });
        if (res.data.role === "client") {
          APIserver.singleUserReturn().then(userRes => {
            if (userRes.data === null) {
              console.log("nada");
            } else {
              this.setState({ userId: userRes.data.id });
            }
            console.log(userRes.data);
            if (userRes.data) {
              if (
                userRes.data.status === "surveysub" ||
                userRes.data.status === "waitoffer" ||
                userRes.data.status === "buildoffer" ||
                userRes.data.status === "submitted" ||
                userRes.data.status === "done"
              ) {
                this.setState({ imageLink: `/images?id=${this.state.userId}` });
                this.setState({ showImageLink: this.props.classes.show });
              } else {
              }
            } else {
            }
          });
          this.setState({ dashboard: "Profile" });
        } else {
          APIserver.returnAgent().then(agent => {
            console.log(agent.data);
            this.setState({ dashboard: "Dashboard" });
            this.setState({ agentLink: `dashboard?AgentId=${agent.data.id}` });
          });
        }
      }
      this.viewMessages();
    });
  };

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScrolling);
  // }

  // handleScrolling = () => {
  //   const { previousScrollPosition } = this.state;

  //   const currentScrollPosition = window.pageYOffset;

  //   console.log("One ==> ", currentScrollPosition);

  //   const checkVisibility = previousScrollPosition > currentScrollPosition;

  //   console.log("Two ==> ", checkVisibility);

  //   this.setState({
  //     previousScrollPosition: currentScrollPosition,
  //     checkVisibility
  //   });
  // };

  viewMessages = () => {
    APIserver.singleUserReturn().then(res => {
      APIserver.usermessages().then(msg => {
        this.setState({ newMessages: msg.data.length });
      });
    });
  };

  logout = () => {
    window.location.replace("/api/logout");
    APIserver.logout();
    window.location.replace("/");
  };

  login = () => {
    window.location.replace("/api/login");
  };

  nothing = () => {
    window.location.replace("/api/signup");
  };

  profile = () => {
    if (this.state.dashboard === "Profile") {
      window.location.replace(`/multi?UserId=${this.state.userId}`);
    } else if (this.state.dashboard === "Dashboard") {
      window.location.replace(this.state.agentLink);
    }
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Button className={classes.button} onClick={this.state.loginButton}>
            {this.state.dashboard}
          </Button>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Button className={classes.button} onClick={this.state.logoutButton}>
            {this.state.signouttext}
          </Button>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Button className={classes.button} onClick={this.state.loginButton}>
            {this.state.dashboard}
          </Button>
        </MenuItem>
        <MenuItem onClick={this.handleMenuClose}>
          <Button className={classes.button} onClick={this.state.logoutButton}>
            {this.state.signouttext}
          </Button>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <Grid container direction="row">
              <Grid item md={3} xs={6}>
                <div>
                  <Link
                    href="/"
                    className={`${classes.logo} ${classes.flexDisplay}`}
                  >
                    <img
                      className={`logo-img ${classes.offervana}`}
                      src={Offervanalogo}
                    />
                  </Link>
                </div>
              </Grid>
              <Grid item md={1} xs={3} className={classes.flexDisplay}>
                <div className="navbar-link">
                  <Typography
                    align="left"
                    variant="h6"
                    className={classes.navtext}
                  >
                    <Link href="/faq" className={classes.link}>
                      FAQ
                    </Link>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={1} xs={3} className={classes.flexDisplay}>
                <div className="navbar-link">
                  <Typography
                    align="left"
                    variant="h6"
                    className={classes.navtext}
                  >
                    <Link
                      href={this.state.imageLink}
                      className={`${classes.link} ${this.state.showImageLink} ${
                        classes.imagelinkcss
                      }`}
                    >
                      Images
                    </Link>
                  </Typography>
                </div>
              </Grid>
              <Grid item md={3} xs={12} sm={12} className={classes.flexDisplay}>
                <AddressbarNav />
              </Grid>
              <Grid item md={1} xs={3} className={classes.flexDisplay} />
              {/* <Grid item md={8} /> */}
            </Grid>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton>
                <Badge badgeContent={this.state.newMessages} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
