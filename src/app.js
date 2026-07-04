const express = require("express");
const path = require("path");
const app = express();

const tareasRoutes = require("./routes/tareas.routes");

// MIDDLEWARES
app.use(express.json());

// ARCHIVOS ESTATICOS
app.use(express.static(path.join(__dirname, "../public")));

// RUTA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

app.use("/api/tareas", tareasRoutes);

module.exports = app;
