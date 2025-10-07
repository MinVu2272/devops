const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from NodeJS + Express!");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
