const ClientController = require('../controllers/clients');
const express = require('express');
const router = express.Router();

/* GET a client identified by a given ID. */
router.get('/:id', function(req, res, next) {
  ClientController.getClient(req, res, next);
});

router.post('/', function(req, res, next) {
  ClientController.addClient(req, res, next);
});

module.exports = router;
