const express = require("express");
const router = express.Router();

const {
  crearTarea,
  mostrarTareas,
} = require("../controllers/tareas.controller");

router.post("/", crearTarea);
router.get("/", mostrarTareas);

module.exports = router;
