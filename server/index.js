require("dotenv").config()
const express = require("express");
const db = require("./db")
const bodyParser = require("body-parser")
const Auth =require("./routes/auth")
const Secrets =require("./routes/secrets")
const cors =require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", Auth);
app.use("/api/secrets", Secrets);

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(PORT, (req, res) => {
  console.log(`Server running at http://localhost:${PORT}`);
});
