import mongoose from "mongoose";

const SubTaskSchema = mongoose.Schema(
  {
    _id: ObjectId,
    title: String,
    isCompleted: boolean,
  },
  { versionKey: false }
);

const SubTaskModel = mongoose.model("SubTask", SubTaskSchema);

module.exports = { SubTaskModel };
