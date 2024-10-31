import React, { useState } from 'react';

const Checkout = () => {
  const [transactionCompleted, setTransactionCompleted] = useState(false);

  const handleCompleteTransaction = () => {
    console.log("Transaction completed!");
    setTransactionCompleted(true);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p>Your transaction details are being processed.</p>
      
      {transactionCompleted ? (
        <p className="transaction-success">
          Transaction completed successfully!
        </p>
      ) : (
        <button onClick={handleCompleteTransaction} disabled={transactionCompleted}>
          Complete Transaction
        </button>
      )}
    </div>
  );
};

export default Checkout;
