import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LeftArrow from "@material-ui/icons/ArrowBackIos";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const styles = theme => ({
  LeftArrow: {
    marginLeft: theme.spacing.unit,
    color: "#F1F3F3"
  },
  backButton: {
    padding: "6px",
    width: "42%",
    cursor: "pointer",
    "&:focus": {
      backgroundColor: "#529aae"
    },
    "&:hover": {
      backgroundColor: "#529aae",
      padding: "8px",
      width: "44%"
    }
  }
});

function BackButton(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Button {...props} className={classes.backButton}>
        <LeftArrow className={classes.LeftArrow} />
      </Button>
    </MuiThemeProvider>
  );
}

BackButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BackButton);
