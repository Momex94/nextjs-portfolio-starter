import React from "react";

const handlePayment = async () => {
  if (!window.Pi) {
    alert("Pi API nije dostupan. Otvori ovu aplikaciju u Pi Browseru.");
    return;
  }

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
    alert("Greška tokom plaćanja: " + error.message);
  }
};

  return (
    <button onClick={handlePayment} style={{ padding: "10px", backgroundColor: "#ffcc00", border: "none", borderRadius: "5px" }}>
      Pay 0.001 Pi
    </button>
  );
};

export default TestPaymentButton;
