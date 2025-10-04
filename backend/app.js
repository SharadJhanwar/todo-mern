const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")

const toDoItemsRouter = require("./routes/toDoItemsRouter")

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.log("MONGODB_URI is not present in .env");
}

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log("HEELO USER ");
  next();
});

app.use("/api/todo",toDoItemsRouter
)

mongoose.connect(MONGODB_URI).then(() => {
  console.log("CONNECTED TO DB")
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
