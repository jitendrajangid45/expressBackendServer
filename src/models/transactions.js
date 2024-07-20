const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    account_id: {
      type: Number
    },
    transaction_count: {
      type: Number,
      required: true
    },
    transactions: [{
      date: {
          type: Date,
          required: true
      },
      amount: {
          type: Number,
          required: true
      },
      transaction_code: {
          type: String,
          required: true
      },
      symbol: {
          type: String,
          required: true
      },
      price: {
          type: String, 
          required: true
      },
      total: {
          type: String, 
          required: true
      }
  }]
  });
  
  module.exports = mongoose.model('transactions', transactionSchema);
  