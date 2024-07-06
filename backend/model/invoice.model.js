const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
        date: { type: Date, required: true },
  description: { type: String, required: true },
  landline: { type: String, required: false },
  telephone: { type: String, required: false },
  email: { type: String, required: false },
  items: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: false, default:0 },
      rate: { type: Number, required: false },
      total: { type: Number, required: true }
    }
  ],
  subtotal: { type: Number, required: true },
  discountRate: { type: Number, required: false },
  discount: { type: Number, required: false },
  totalDue: { type: Number, required: true },
}, {
  timestamps: true
});

const Invoice = mongoose.model("Invoice",InvoiceSchema);
module.exports = Invoice;