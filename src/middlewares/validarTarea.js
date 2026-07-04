const validarTarea = (req, res, next) => {
  if (!req.body.titulo) {
    return res.status(400).json({ msg: "Debe ingresar una tarea" });
  }
  next();
};

module.exports = validarTarea;
