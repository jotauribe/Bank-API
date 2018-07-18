const ClientController = require('../controllers/clients');
const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  ClientController.addClient(req, res, next);
});

/* GET a client identified by a given ID. */
router.get('/:id', function(req, res, next) {
  ClientController.getClient(req, res, next);
});

router.post('/:id/employments', function(req, res, next) {
  ClientController.addClientEmploymentInfo(req, res, next);
});

module.exports = router;
