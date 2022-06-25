const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlights)

router.get('/flights/:id', controller.getSingleFlight)

router.post('/flights', controller.bookFlights)

router.patch('/flights/:id', controller.updateFlights)

router.delete('/flights/:id', controller.deleteFlights)

module.exports = router;

