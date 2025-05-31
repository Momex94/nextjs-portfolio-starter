import React from "react";

export default function TestPaymentButton() {
  const makePayment = async () => {
    if (!window.Pi) {
      alert("Pi SDK nije učitan. Otvori u Pi Browseru.");
      return;
    }

    const paymentData = {
      amount: 0.0001,
      memo: "Test payment from app",
      metadata: { type: "test-payment" },
    };

    try {
      const scopes = ["payments"];
      await window.Pi.authenticate(scopes, onIncompletePaymentFound);
      const payment = await window.Pi.createPayment(paymentData, {
        onReadyForServerApproval: paymentId => {
          console.log("Ready for server approval", paymentId);
        },
        onReadyForServerCompletion: paymentId => {
          console.log("Ready for server completion", paymentId);
        },
        onCancel: paymentId => {
          console.log("Payment cancelled", paymentId);
        },
        onError: error => {
          console.error("Payment error", error);
        },
      });
      console.log("Payment created", payment);
    } catch (error) {
      console.error("Auth or payment failed:", error);
    }
  };

  const onIncompletePaymentFound = payment => {
    console.log("Incomplete payment found:", payment);
  };

  return (
    <button
      onClick={makePayment}
      style={{
        padding: "10px 20px",
        backgroundColor: "#f5c842",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "20px"
      }}
    >
      Pay 0.0001 Pi
    </button>
  );
}
