const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const athletesRouter = require("./routes/athletes");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://username:opensponsorship123@cluster0.gtoqubw.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/athletes", athletesRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
