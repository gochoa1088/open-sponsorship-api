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
    .then((athlete) => {
      if (!athlete) {
        throw new Error(`No athlete exists with id ${req.params.id}`);
      }
      res.json(athlete);
    })
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

router.put("/update/:id", (req, res) => {
  const updatedField = req.body;

  Athlete.findOneAndUpdate({ _id: req.params.id }, updatedField)
    .then((doc) => {
      return res.json({ message: "Athlete updated!", id: doc._id });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
