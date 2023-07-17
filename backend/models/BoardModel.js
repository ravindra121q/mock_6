const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const BoardSchema = new Schema(
  {
    name: String,
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { versionKey: false }
);

const BoardModel = model("Board", BoardSchema);

module.exports = { BoardModel };
