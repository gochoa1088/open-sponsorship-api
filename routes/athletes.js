const express = require("express");
const router = express.Router();

const Athlete = require("../models/athlete.model");

router.get("/", (req, res) => {
  Athlete.find()
    .then((athletes) => res.json(athletes))
    .catch((err) => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Athlete.findById(req.params.id)
    .then((athlete) => res.json(athlete))
    .catch((err) => res.status(400).json(err));
});

router.post("/add", (req, res) => {
  const athlete = req.body;
  const newAthlete = new Athlete(athlete);

  newAthlete
    .save()
    .then((doc) => {
      return res.json({ message: "Athlete added!", id: doc._id });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
