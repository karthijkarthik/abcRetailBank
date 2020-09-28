import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MaterialTableComponent from '../MaterialTable';
import DialogComponent from '../Dialog';

const tableValues = (transactions) => ({
  columns: [
    { title: 'Narration', field: 'narration', width: 700 },
    { title: 'Date', field: 'date' },
    { title: 'Withdrawal', field: 'withdrawal' },
    { title: 'Deposit', field: 'deposit' },
    { title: 'Closing Balance', field: 'balance' }
  ],
  data: transactions,
  isEditable: false
});

export const TransactionHistory = ({
  transactions
}) => {
  return (
    <div className="mainContainer">
      <MaterialTableComponent 
        tableValues={tableValues(transactions)} />
      <DialogComponent title="Transaction History Page">
          <span>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</span>
      </DialogComponent>
    </div>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array
}

export const mapStateToProps = state => ({
  transactions: state.userDetails.otherDetails.transactions
});

export default connect(
    mapStateToProps,
    null
)(TransactionHistory);


