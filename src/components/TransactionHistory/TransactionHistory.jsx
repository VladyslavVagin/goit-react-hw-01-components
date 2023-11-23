import React from 'react';
import css from './TransactionHistory.module.css'

const TransactionHistory = transactions => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.transactionHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.transactionList}>
        {transactions.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.transaction}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
