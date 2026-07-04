const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model("Tarea", tareaSchema);
