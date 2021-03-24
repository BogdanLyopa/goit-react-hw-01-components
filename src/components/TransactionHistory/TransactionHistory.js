import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return <TransactionHistoryItem key={item.id} {...item} />;
      })}
    </table>
  );
};

export default TransactionHistory;
