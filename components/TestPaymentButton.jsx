import React from "react";

const TestPaymentButton = () => {
  const handlePayment = async () => {
    const paymentData = {
      amount: 0.001,
      memo: "Test payment from app",
      metadata: { type: "test" },
    };

    try {
      const payment = await window.Pi.createPayment(paymentData);
      console.log("Payment successful", payment);
    } catch (error) {
      console.error("Payment failed", error);
    }
  };

  return (
    <button onClick={handlePayment} style={{ padding: "10px", backgroundColor: "#ffcc00", border: "none", borderRadius: "5px" }}>
      Pay 0.001 Pi
    </button>
  );
};

export default TestPaymentButton;
