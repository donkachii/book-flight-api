const { flights } = require("../models/Flight");
const fs = require("fs");

exports.getAllFlights = async (req, res) => {
  try {
    res.status(200).json({
      message: "All Flights",
      flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getSingleFlight = async (req, res) => {
  try {
    const id = req.params.id;

    const foundFlights = flights.find((flight) => String(flight.id) === id);

    if (!foundFlights) {
      res.status(404).json({ message: "Flights not found" });
    }

    res.status(200).json({
      message: "Single Flight",
      flight: foundFlights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.bookFlights = async (req, res) => {
  try {
    const { id, title, time, price, date } = await req.body;

    const newFlights = {
      id,
      title,
      time,
      price,
      date,
    };

    flights.push(newFlights);

    res.status(201).json({
      message: "Flight Successfully Booked",
      flights: flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.updateFlights = async (req, res) => {
  try {
    const id = req.params.id;
    const flight = flights.find((flight) => String(flight.id) === id);
    const { title, time, price, date } = await req.body;
    flight.title = title;
    flight.time = time;
    flight.price = price;
    flight.date = date;

    res.status(200).json({
      message: "Flight Successfully Updated",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteFlights = async (req, res) => {
  try {
    const id = req.params.id;
    const flight = flights.find((flight) => String(flight.id) === id);
    flights.splice(flights.indexOf(flight), 1);
    res.status(200).json({
      message: "Flight Successfully Deleted",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
