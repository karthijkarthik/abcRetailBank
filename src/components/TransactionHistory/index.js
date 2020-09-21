import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(date, narration, withdrawal, deposit, balance) {
  return { date, narration, withdrawal, deposit, balance };
}

const rows = [
  createData( '13 Sep 2020', 'kqqhy5elav7k5owvci-PayUAccelystSolution', 689.00, '', '128,512.76' ),
  createData( '12 Sep 2020', 'ACH D- HDFCLTD-789456123', 500.00, '', '129,020.76' ),
  createData( '11 Sep 2020', 'POS 123456XXXXXX0379 SBIETC', '', 7.50, '129,520.76' ),
  createData( '10 Sep 2020', 'POS 123456XXXXXX0379 SELVANAYAGI TRAD', '', 8650.00, '129,512.76' ),
  createData( '09 Sep 2020', 'CRV POS 123456******0379 MSP AGENCIES', '', 500.00, '121,012.76' ),
  createData( '08 Sep 2020', 'POS 123456XXXXXX0379 MSP AGENCIES', 500, '', '120,512.76' )
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className="mainContainer">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Narration</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Withdrawal</TableCell>
              <TableCell align="right">Deposit</TableCell>
              <TableCell align="right">Closing Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.narration}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.withdrawal}</TableCell>
                <TableCell align="right">{row.deposit}</TableCell>
                <TableCell align="right">{row.balance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

