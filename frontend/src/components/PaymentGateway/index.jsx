import React, { useEffect } from "react";

const PaymentGateway = ({ amount }) => {
  useEffect(() => {
    if (!window.paypal) return;

    window.paypal.Buttons({
      createOrder: async () => {
        const res = await fetch("http://localhost:5000/create-paypal-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount }),
        });

        const data = await res.json();
        return data.id; // PayPal order ID
      },
      onApprove: async (data) => {
        const res = await fetch(
          `http://localhost:5000/capture-paypal-order/${data.orderID}`,
          { method: "POST" }
        );
        const orderDetails = await res.json();
        alert("Payment successful!");
        console.log("✅ Order Details:", orderDetails);
      },
      onError: (err) => {
        console.error("❌ PayPal Error:", err);
        alert("Payment failed. Check console for error.");
      },
    }).render("#paypal-button-container");
  }, [amount]);

  return <div id="paypal-button-container" />;
};

export default PaymentGateway;
