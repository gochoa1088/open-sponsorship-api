const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const athleteSchema = new Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    location: { type: String, required: true },
    team: { type: String, required: true },
    gender: { type: String, required: true },
    sports: { type: [String], required: true },
    about: { type: String, required: true },
    interests: { type: String, required: true },
    profileImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = Athlete;
