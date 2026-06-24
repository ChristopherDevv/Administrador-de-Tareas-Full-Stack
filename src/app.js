const express = require("express");
const path = require("path");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "../public")));

// RUTA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

module.exports = app;
