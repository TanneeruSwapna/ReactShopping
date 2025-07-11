require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PAYPAL_API = "https://sandbox.paypal.com"; // Live URL: https://api-m.paypal.com
const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const SECRET = process.env.PAYPAL_SECRET;

// Create PayPal Order
app.post("/create-paypal-order", async (req, res) => {
  const { amount } = req.body;

  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [{
          amount: {
            currency_code: "USD",
            value: amount
          }
        }]
      },
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json({ id: response.data.id });
  } catch (err) {
    console.error("Create Order Error", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// Capture PayPal Order
app.post("/capture-paypal-order/:orderId", async (req, res) => {
  const { orderId } = req.params;
  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Capture Error", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to capture order" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
