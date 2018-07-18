'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmploymentSchema = new Schema({
  company: {
    type: Object,
    required: [true, 'A valid company must to be provided']
  },
  salary: { type: Number, required: [true, 'Salary must to be a number'] },
  hireDate: {
    type: Date,
    required: [true, 'A valid hire date must be provided']
  }
});

module.exports = mongoose.model('Employments', EmploymentSchema);
