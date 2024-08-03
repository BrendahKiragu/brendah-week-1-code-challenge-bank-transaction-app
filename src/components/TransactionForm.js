import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  //state variables and methods to update them
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  //triggered by form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Create a new transaction object
    const newTransaction = {
      date,
      description,
      amount: parseFloat(amount), // Convert amount to a number
    };

    // Call the function passed as a prop to add the transaction
    onAddTransaction(newTransaction);

    // Clears the input fields after submission
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
