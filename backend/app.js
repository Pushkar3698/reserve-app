const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;
const cors = require("cors");
const bodyParser = require("body-parser");
const BusDetailsRouter = require("./routes/busDetails");
const schedule = require("./data/data");
const mongoose = require("mongoose");
const URL =
  "mongodb+srv://srini624618:SRIni3155@atlascluster.v1ayk1c.mongodb.net/?retryWrites=true&w=majority";

console.log(schedule);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(BusDetailsRouter);

mongoose
  .connect(URL, { useNewUrlParser: true })
  .then((res) => console.log("connected to the database"))
  .then(() => app.listen(PORT, () => console.log("connected to server")));
