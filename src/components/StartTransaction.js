import React, { useState } from 'react';

const StartTransaction = () => {
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState('');
  const [transactionType, setTransactionType] = useState('income');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the transaction data (can be stored or used for frontend operations)
    const transactionData = {
      name: transactionName,
      amount: parseFloat(transactionAmount),
      date: transactionDate,
      type: transactionType,
    };

    // For now, we just display the transaction data in the console
    console.log("Transaction Submitted:", transactionData);
    setMessage('Transaction submitted successfully!');

    // Reset the form after submission
    setTransactionName('');
    setTransactionAmount('');
    setTransactionDate('');
    setTransactionType('income');
  };

  return (
    <div>
      <h2>Start a New Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label>Transaction Name:</label>
          <input
            type="text"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Transaction Amount:</label>
          <input
            type="number"
            step="0.01"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Transaction Date:</label>
          <input
            type="date"
            value={transactionDate}
            onChange={(e) => setTransactionDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <button type="submit">Submit Transaction</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StartTransaction;