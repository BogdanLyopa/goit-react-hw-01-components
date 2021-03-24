import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistoryItem.scss';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionHistoryItem.protoTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
export default TransactionHistoryItem;
