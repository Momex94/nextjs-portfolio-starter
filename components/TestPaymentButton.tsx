'use client';

import React from 'react';

declare global {
  interface Window {
    Pi: any;
  }
}

const TestPaymentButton = () => {
  const handlePayment = async () => {
    try {
      const paymentData = {
        amount: 0.001,
        memo: 'Test plaćanje za Pi App Checklist',
        metadata: {
          userId: 'test_user_123',
          productId: 'test_item_abc',
        },
      };

      if (!window.Pi) {
        alert('Pi SDK nije dostupan. Otvori ovo u Pi Browseru.');
        return;
      }

      window.Pi.createPayment(paymentData, {
        onReadyForServerApproval: (paymentId: string) => {
          console.log('onReadyForServerApproval', paymentId);
        },
        onReadyForServerCompletion: (paymentId: string, txid: string) => {
          console.log('onReadyForServerCompletion', paymentId, txid);
        },
        onCancel: (paymentId: string) => {
          console.log('onCancel', paymentId);
        },
        onError: (error: Error, paymentId: string) => {
          console.error('onError', error, paymentId);
        },
      });
    } catch (error) {
      console.error('Greška pri plaćanju:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={handlePayment}
        style={{
          backgroundColor: '#f7931a',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Testiraj Pi Plaćanje
      </button>
    </div>
  );
};

export default TestPaymentButton;

Dodan TestPaymentButton za testiranje Pi transakcije

