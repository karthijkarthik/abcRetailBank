import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import DialogComponent from '../Dialog';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, totalBalance) {
  return {
    name,
    totalBalance,
    history: [
      { accountNo: 5765646164894, branch: 'Mascot', name: 'Dunlap Hubbard', balance: '$4456' }
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.totalBalance}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Account No.</TableCell>
                    <TableCell>Branch</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Available Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.accountNo}>
                      <TableCell component="th" scope="row">
                        {historyRow.accountNo}
                      </TableCell>
                      <TableCell>{historyRow.branch}</TableCell>
                      <TableCell>{historyRow.name}</TableCell>
                      <TableCell>{historyRow.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    totalBalance: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        accountNo: PropTypes.number.isRequired,
        branch: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired
      }),
    ).isRequired
  }).isRequired,
};

const rows = [
  createData('Savings Account', 'Total Available Balance: $4456'),
  createData('Current Account', 'Total Available Balance: $250'),
  createData('Savings Scheme Account', 'Total Invested Amount: $567')
];

export default function CollapsibleTable() {
  return (
    <div className="mainContainer">
        <DialogComponent title="Dashboard Page">
          <span>If you haven’t spent a lot of time in React this might be a spot where you spend more time than is necessary trying to figure out how to access props in a child functional component."</span>
        </DialogComponent>
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableBody>
            {rows.map((row) => (
                <Row key={row.name} row={row} />
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
}
