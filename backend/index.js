const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/tasks", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// database
const taskSchema = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: { type: String, required: true },
    cost: { type: Number, required: true },
    status: { type: String, required: true },
  })
);

app.get("/", async (req, res) => {
  const tasks = await taskSchema.find();
  res.send(tasks);
});

app.put("/:id", async (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Invalid status" });
  }

  const Task = await taskSchema.findByIdAndUpdate(
    req.params.id,
    {
      status: status,
    },
    { new: true }
  );
  if (!Task) return res.status(404).json({ message: "Task not found" });
  res.send(Task);
});

app.post("/", async (req, res) => {
  const { title, cost, status } = req.body;
  if (!title || !cost || !status) {
    return res.status(400).json({ message: "Invalid data" });
  }

  try {
    const task = new taskSchema({
      title,
      cost,
      status,
    });

    await task.save();
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Invalid id" });
  }

  taskSchema
    .findByIdAndDelete(id)
    .then(() => res.json({ message: "Task deleted successfully." }))
    .catch((error) => res.status(404).json({ error }));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
