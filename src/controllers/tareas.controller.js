const Tarea = require("../models/Tarea");

// CREAMOS TAREA
const crearTarea = async (req, res) => {
  const nuevaTarea = await Tarea.create(req.body);
  res.json(nuevaTarea);
};

const cantidadTareas = async (req, res) => {
  const cantidad = await Tarea.countDocuments();
  res.json(cantidad);
};

const mostrarTareas = async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
};

module.exports = { crearTarea, mostrarTareas };
