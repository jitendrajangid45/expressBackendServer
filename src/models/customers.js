const { required } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  active: {
    type: Schema.Types.Mixed,
    default: null
  },
  accounts: {
    type: [Number],
    required: true
  },

});

module.exports = mongoose.model('customers', customerSchema);
