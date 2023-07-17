import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    _id: ObjectId,
    title: String,
    description: String,
    status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
    subtask: [{ type: ObjectId, ref: "Subtask" }],
  },
  { versionKey: false }
);

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = { TaskModel };
