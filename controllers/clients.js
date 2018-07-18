'use strict';

const moment = require('moment');
const Client = require('../models/clients');
const Employment = require('../models/employment');

const DATE_FORMAT = 'MM-DD-YYYY';
const FIVE_MILLIONS = 5000000;
const TWENTY_MILLIONS = 20000000;
const FORTY_MILLIONS = 40000000;

exports.getClient = async function(req, res, next) {
  try {
    const { id } = req.params;

    const client = await Client.findOne({ id });

    if (!client) return res.sendStatus(204);
    //else
    res.send(client);
  } catch (error) {
    next(error);
  }
};

exports.addClient = async function(req, res, next) {
  try {
    const { id, firstName, lastName, birthdate } = req.body;

    const clientData = {
      id: parseInt(id),
      firstName,
      lastName,
      birthdate: moment(birthdate, DATE_FORMAT)
    };

    const aClient = await Client.findOne({ id });

    if (aClient)
      return res.send({ error: 'Already exists a client with the given id' });

    const newClient = new Client(clientData);
    await newClient.save();
    res.send(newClient);
  } catch (error) {
    next(error);
  }
};

exports.addClientEmploymentInfo = async function(req, res, next) {
  try {
    const { nit, client, company, salary, hireDate } = req.body;

    const employmentInfo = {
      nit: parseInt(nit),
      client,
      company,
      salary,
      hireDate: moment(hireDate, DATE_FORMAT)
    };

    console.log(employmentInfo);

    const isApproved = meetRequirements({ hireDate, salary: parseInt(salary) });

    if (!isApproved) return res.send({ response: 'DENIED' });

    const approvedLoanAmount = loanAmount(parseInt(salary));
    return res.send({ response: 'APPROVED', loanAmount: approvedLoanAmount });

    const newEmployment = new Employment(employmentInfo);
    await newEmployment.save();
    res.send(newEmployment);
  } catch (error) {
    next(error);
  }
};

function meetRequirements({ hireDate, salary }) {
  const now = moment();
  const monthsInCompany = now.diff(moment(hireDate, DATE_FORMAT), 'months');
  console.log('months in company: ', monthsInCompany);
  if (monthsInCompany > 18 && salary > 800000) return true;
  return false;
}

function loanAmount(salary) {
  if (salary > 800000 && salary <= 1000000) return FIVE_MILLIONS;
  if (salary > 1000000 && salary <= 4000000) return TWENTY_MILLIONS;
  if (salary > 4000000) return FORTY_MILLIONS;
  return 0;
}
