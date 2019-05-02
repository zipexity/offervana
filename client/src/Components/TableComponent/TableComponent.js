import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#F1F3F3",
    color: "#5E5E5E",
    fontSize: 20
  },
  body: {
    fontSize: 16
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  cell: {
    minWidth: 125
  },
  typography: {
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

function TableComponent(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell className={classes.typography} align="center">
              Name
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center">
              Phone Number
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center">
              Email
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center">
              Selling Home Address
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center">
              Sell By Goal
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center">
              Active Since
            </CustomTableCell>
            <CustomTableCell className={classes.typography} align="center" />
            <CustomTableCell className={classes.typography} align="center" />
          </TableRow>
        </TableHead>
        <TableBody>{props.children}</TableBody>
      </Table>
    </Paper>
  );
}

TableComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TableComponent);
