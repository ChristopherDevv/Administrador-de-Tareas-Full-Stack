const express = require("express");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ARCHIVOS ESTATICOS
app.use(express.static("public"));

module.exports = app;

