const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

connectDB();

app.use(express.json());

app.use("/api/todos", require("./routes/api/todos"));

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirnanm, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
