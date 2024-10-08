import React from 'react';

function TransactionTable({ transactions, searchTerm, onDeleteTransaction}) {
  // Filter transactions based on the searchTerm
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description && transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Transactions History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>
                <button className='button'
                onClick={()=>onDeleteTransaction(transaction.id)}>
                  Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
