const Routes = require("../model/cityRoutes");
const Bus = require("../model/busSchema");
const busIds = require("../data/busIds");

exports.getBusDetails = async (req, res, next) => {
  try {
    const { to, from, date } = req.body;

    const cities = await Routes.find({
      source: to,
      destination: from,
    }).populate("buses");
    if (!cities || cities.length === 0) {
      const error = new Error("could not find the selected routes");

      throw error;
    }

    res.status(200).json(cities);
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "could not find the selected routes", error: true });
  }
};
