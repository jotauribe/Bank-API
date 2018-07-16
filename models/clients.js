'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  id: { type: Number, required: [true, 'A valid client id must be provided'] },
  firstName: {
    type: String,
    required: [true, 'A valid client first name must be provided']
  },
  lastName: {
    type: String,
    required: [true, 'A valid client last name must be provided']
  },
  birthdate: {
    type: Date,
    required: [true, 'A valid client date of birth must be provided']
  }
});

module.exports = mongoose.model('Clients', ProviderSchema);
