const express = require("express");
const router = express.Router();

const {
  crearTarea,
  cantidadTareas,
  mostrarTareas,
} = require("../controllers/tareas.controller");

router.post("/", crearTarea);
router.get("/cantidad", cantidadTareas);
router.get("/", mostrarTareas);

module.exports = router;
