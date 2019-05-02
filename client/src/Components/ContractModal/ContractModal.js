import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import contract from "./contract.pdf";
import Modal from "@material-ui/core/Modal";

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
  hide: {
    visibility: "hidden"
  },
  imgHold: {
    position: "relative",
    top: "15%",
    height: "75%",
    width: "50%",
    left: "25%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "60%",
      left: "10%"
    }
  }
});

class ContractModal extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Modal {...this.props}>
        <div className={classes.imgHold}>
          <embed
            src={contract + "#toolbar=0&navpanes=0&scrollbar=0"}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    );
  }
}

ContractModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContractModal);
