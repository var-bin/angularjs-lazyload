// server.js

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
const distDir = path.join(__dirname, "dist");
app.use(express.static(distDir));

// Initialize the app.
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;

  console.info("App now running on port", port);
});
