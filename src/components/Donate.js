import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css'; // Ensure this CSS file exists

const Donate = () => {
  const [showAmountInput, setShowAmountInput] = useState(false);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDonateClick = () => {
    setShowAmountInput(true);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    // Call Razorpay payment gateway
    loadRazorpay(amount);
  };

  const loadRazorpay = (amount) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => displayRazorpay(amount);
    document.body.appendChild(script);
  };

  const displayRazorpay = (amount) => {
    const options = {
      key: 'rzp_test_wEciy1yAhb8m8J', // Replace with your Razorpay key ID
      amount: amount * 100, // Amount in paise (e.g., 500 INR = 50000 paise)
      currency: 'INR',
      name: 'NGO for Disabled People',
      description: 'Donation',
      handler: (response) => {
        console.log(response);
        navigate('/success');
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="donate-container">
      {!showAmountInput ? (
        <div className="donate-content">
          <h2 className="heading">Donate to our NGO</h2>
          <button className="button" onClick={handleDonateClick}>Donate Now</button>
        </div>
      ) : (
        <div className="amount-content">
          <h2 className="heading">Enter Donation Amount</h2>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            min="1"
            placeholder="Enter donation amount"
            className="input"
          />
          <button className="button" onClick={handleSubmit}>Donate</button>
        </div>
      )}
    </div>
  );
};

export default Donate;
