import React from "react";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#46A1BA" }, // Purple and green play nicely together.
    secondary: { main: "#46A1BA" } // This is just green.A700 as hex.
  }
});

const styles = theme => ({
  "@keyframes button": {
    from: { height: "12em", width: "15em", zIndex: "1" },
    to: { height: "13em", width: "16em", zIndex: "999999" }
  },
  button: {
    backgroundColor: theme.palette.primary,
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
      color: "white"
    }
  }
});
function FormBtn(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Button {...props} className={classes.button}>
        {props.children}
      </Button>
    </MuiThemeProvider>
  );
}

FormBtn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormBtn);
