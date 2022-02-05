const Berth = require("../models/berth");

exports.getBerthDetails = async (req, res) => {
  try {
    let seats = await Berth.find(function (err, result) {
      if (err) {
        throw err;
      }
    });
    return res.status(200).json({
      success: true,
      seats,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.UpdateBerth = async (req, res) => {
  const { name, total, available } = req.body;

  const berth = await Berth.findById(req.params.id);

  if (berth) {
    berth.name = name;
    berth.total = total;
    berth.available = available;

    const updatedNote = await berth.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
};
