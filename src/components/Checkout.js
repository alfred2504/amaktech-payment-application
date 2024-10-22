import React from 'react';

const Checkout = () => (
  <div>
    <h2>Checkout Page</h2>
    <form>
      <div className="form-group">
        <label>Transaction Name:</label>
        <input type="text" required />
      </div>

      <div className="form-group">
        <label>Transaction Amount:</label>
        <input type="number" required />
      </div>

      <div className="form-group">
        <label>Transaction Date:</label>
        <input type="date" required />
      </div>

      <div className="form-group">
        <label>Transaction Type:</label>
        <select required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button type="submit">Submit Transaction</button>
    </form>
  </div>
);

export default Checkout;