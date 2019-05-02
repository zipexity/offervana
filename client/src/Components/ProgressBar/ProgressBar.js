import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  progressBar: {
    position: "relative",
    height: "30px",
    left: "1%",
    top: "10px",
    marginBottom: "10px",
    width: "105%",
    borderRadius: "50px",
    border: "1px solid #333"
  },

  filler: {
    background: "#46A1BA",
    height: "100%",
    borderRadius: "inherit",
    transition: "width .2s ease-in"
  },

  button: {
    marginRight: "10px",
    padding: "7px 12px",
    fontSize: "14px",
    background: "#d14836",
    color: "white",
    cursor: "pointer",
    outline: "0"
  },
  typography: {
    position: "relative",
    fontSize: "24px",
    top: "-1.3em",
    textAlign: "center",
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
  }
});

class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0
    };
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    if (this.state.percentage === 100) return;
    this.setState({ percentage: this.state.percentage + 20 });
  }

  componentDidMount = () => {
    let percNum =
      parseInt(window.location.pathname.split("homesurvey/q")[1]) * 2.63157895;
    let perc = Math.round(percNum);
    this.setState({
      percentage: perc
    });
  };

  render() {
    const { classes } = this.props;
    const ProgressBar = props => {
      return (
        <div className={`progressbar ${classes.progressBar}`}>
          <Filler percentage={props.percentage} />
          <Typography color="primary" className={classes.typography}>
            {`${props.percentage} % `}
          </Typography>
        </div>
      );
    };

    const Filler = props => {
      return (
        <div
          className={classes.filler}
          style={{ width: `${props.percentage}%` }}
        />
      );
    };
    return (
      <div>
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}

ProgressBarExample.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressBarExample);
