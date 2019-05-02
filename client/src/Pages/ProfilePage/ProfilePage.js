import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import APIserver from "../../Utils/api/APIserver";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("Zillow", 150000, 6.0, 24, 4.0),
  createData("Opendoor", 139000, 9.0, 37, 4.3),
  createData("Knock", 140000, 16.0, 24, 6.0),
  createData("Offerpad", 143000, 3.7, 67, 4.3),
  createData("Real Market Price", 155000, 16.0, 49, 3.9)
];

class ProfilePage extends React.Component {
  state = {};

  componentDidMount = () => {
    APIserver.isLogged().then(res => {
      if (!res.data) {
        this.props.history.push("/api/login");
      } else {
        APIserver.profilesingleUserReturn(res.data.id).then(response => {
          this.props.history.push(`/multi?id=${response.data.id}`);
        });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return <div className={classes.flex} />;
  }
}

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePage);
