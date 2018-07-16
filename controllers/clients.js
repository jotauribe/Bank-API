'use strict';

const moment = require('moment');
const Client = require('../models/clients');

const DATE_FORMAT = 'DD-MM-YYYY';

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

    console.log(req.body);

    const aClient = await Client.findOne({ id });

    if (aClient)
      return res.send({ error: 'Already exists a client with the given id' });

    const newClient = new Client(clientData);
    await newClient.save();
    res.send(newClient);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
