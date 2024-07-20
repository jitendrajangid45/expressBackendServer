const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    account_id: {
      type: Schema.Types.ObjectId,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    products: {
      type: [String], 
      required: true
    }
  });
  
  module.exports = mongoose.model('accounts', accountSchema);
  